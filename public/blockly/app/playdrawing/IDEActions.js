

var runFlag=function(){
    var flag='IDLE'; //IDLE, STOPPED, RUNNING
    var ipaddress = '127.0.0.1';
    return {
    getFlag:function(){return flag;},
    setFlag:function(status){
        if (status != flag) {
            flag = status;
            if (flag == 'STOPPED'){
                $(document).trigger("stoppedEvent");
            }
            else if (flag == 'RUNNING') {
                $(document).trigger("runningEvent");
            }
        }
    },
    getIPaddress:function(){return ipaddress;},
    setIPaddress:function(newip){
        ipaddress = newip;
    }
    }
}();

$(document).on('runningEvent', function(event){
               
               $("#runButton").attr("disabled", true);   //disable run button
               $("#stopButton").attr("disabled", false); //enable stop button
               
               // show 'running' in green
               $("#info_run").attr("class", "btn btn-success");
               $("#info_run").html(LANG.running);
});

$(document).on('stoppedEvent', function(event){
               
               $("#runButton").attr("disabled", false);   //enable run button
               $("#stopButton").attr("disabled", true); //disable stop button
               
               // show 'running' in red
               $("#info_run").attr("class", "btn btn-danger");
               $("#info_run").html(LANG.stopped);
});

var saveFlag = function() {
    var flag = 'IDLE'; //IDEL, SAVING, SAVED, MODIFIED
    var readonly = 'NO'; //YES, NO
    return {
        getFlag: function() {
            return flag;
        },
        setFlag: function(status) {
            if (status != flag) {
                flag = status;
                $(document).trigger("saveFlagChangeEvent");
                /*
                 if(document.dispatchEvent){
                 document.dispatchEvent(saveFlagChangeEvent); //This is for the stand browser.
                 }
                 else if(document.attachEvent){
                 document.documentElement.fakeEvents++; //This for IE
                 }
                 */
            }
        },
        getReadonly: function() {
            return readonly;
        },
        setReadonly: function(status) {
            readonly = status;
        }
    }
}();

$(document).on("saveFlagChangeEvent", function(event) {
    //alert('event triggered'+saveFlag.getFlag());
    var flag = saveFlag.getFlag();
    if (flag == 'IDLE') {
        $('#info_save').html(LANG.IDLE);
    } else if (flag == 'SAVING') {
        $('#info_save').html(LANG.SAVING);
    } else if (flag == 'SAVED') {
        $('#info_save').html(LANG.SAVED);
        $('#info_save').attr("class", "btn btn-success");
    } else if (flag == 'MODIFIED') {
        $('#info_save').html(LANG.MODIFIED);
        $('#info_save').attr("class", "btn btn-danger");
    };

});

/**
 * Save blocks to local file.
 * better include Blob and FileSaver for browser compatibility
 */
function save() {
    var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    var data = Blockly.Xml.domToText(xml);

    var filename = prompt("Please enter your file name", "sketch1");
    if (filename != null) {
        filename += '.xml';
        // Store data in blob.
        var blob = new Blob([data], {
            type: "text/plain;charset=utf-16"
        });
        saveAs(blob, filename);
        onsole.log("saving blob " + filename);
    }
}

/**
 * Load blocks from local file.
 */
function upload() {
    var upLoadFiles = document.getElementById("uploadInput").files;
    // Only allow uploading one file.
    if (upLoadFiles.length != 1) {
        return;
    }

    // FileReader
    var reader = new FileReader();
    reader.onload = function(event) {
        var target = event.target;
        // 2 == FileReader.DONE
        if (target.readyState == 2) {
            try {
                var xml = Blockly.Xml.textToDom(target.result);
            } catch (e) {
                alert('Error parsing XML:\n' + e);
                return;
            }

            var count = Blockly.mainWorkspace.getAllBlocks().length;
            if (count && confirm('Replace existing blocks?\n"Cancel" will merge.')) {
                Blockly.mainWorkspace.clear();
            }

            //load XML into workspace
            Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
            //invoke myUpdateFunction() to generate the obj_set for object dropdown menu
            myUpdateFunction();
            //clear the workspace
            Blockly.mainWorkspace.clear();
            //load XML again so that even the Chinese characters of the dropdown menu will be shown properly
            Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
        }
        // Reset value of input after loading because Chrome will not fire
        // a 'change' event if the same file is loaded again.
        document.getElementById('uploadInput').value = '';
    };
    reader.readAsText(upLoadFiles[0]);
}


function upload_xml(program, _id) {

    saveFlag.setFlag('SAVING');

    var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    var xml_code = Blockly.Xml.domToText(xml);

    var posting = $.post("/blockly/app/" + program + "/upload", {
        "_id": _id,
        "xml_code": xml_code
    });
    posting.done(function(result) {
        if (result.status == "error") {
            if (result.errorno == 1) {
                alert("you haven't logged in yet");
            } else if (result.errorno == 2) {
                alert("project does not exist");
            } else if (result.errorno == 3) {
                alert("project has been deleted");
            } else if (result.errorno == 4) {
                alert("you have no rights to modify program of another user");
            }
        } else {
            saveFlag.setFlag('SAVED');
            return "success";
        }
    }).
    fail(function() {
        saveFlag.setFlag('MODIFIED');
        alert("network failed!");
    });
}

function download_xml(program, _id) {

    var posting = $.post("/blockly/app/" + program + "/download", {
        "_id": _id
    });
    posting.done(function(result) {
            if (result.status == "error") {
                if (result.errorno == 1) {
                    alert(LANG.not_login);
                } else if (result.errorno == 2) {
                    alert(LANG.not_exist);
                } else if (result.errorno == 3) {
                    alert(LANG.project_deleted);
                } else if (result.errorno == 4) {
                    alert(LANG.no_view_rights);
                }
                logout();
            } else if (result.status == 'readonly') {

                //set the readonly flag to "YES"
                saveFlag.setReadonly('YES');

                //hide save button and show fork button
                $("#saveButton").hide();
                $("#info_save").hide();
                $("#forkButton").show();
                $("#info_fork").show();
                
                //set the menu title to the project name
                $("#menu_title").html(result.project_name);

                if (result.xml_code == null) return;

                //load the program into workspace
                try { //parse text to xml DOM
                    var xml = Blockly.Xml.textToDom(result.xml_code);
                } catch (e) {
                    alert('Error parsing XML:\n' + e);
                    return;
                }
                //load XML into workspace
                Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
                //invoke myUpdateFunction() to generate the obj_set for object dropdown menu
                myUpdateFunction();
                //clear the workspace
                Blockly.mainWorkspace.clear();
                //load XML again so that even the Chinese characters of the dropdown menu will be shown properly
                Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
            } else if (result.status == 'readwrite') {

                //set the readonly flag to "NO"
                saveFlag.setReadonly('NO');

                //show save button and fork button
                $("#savButton").show();
                $("#info_save").show();
                $("#forkButton").show();
                $("#info_fork").show();

                //set the menu title to the project name
                $("#menu_title").html(result.project_name);

                if (result.xml_code == null) return;

                //load the program into workspace
                try { //parse text to xml DOM
                    var xml = Blockly.Xml.textToDom(result.xml_code);
                } catch (e) {
                    alert('Error parsing XML:\n' + e);
                    return;
                }
                //load XML into workspace
                Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
                //invoke myUpdateFunction() to generate the obj_set for object dropdown menu
                myUpdateFunction();
                //clear the workspace
                Blockly.mainWorkspace.clear();
                //load XML again so that even the Chinese characters of the dropdown menu will be shown properly
                Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
            }
        }). // posting.done
    fail(function() {
        alert("network failed!");
    });
}


function ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint16Array(buf));
}

//create a new canvas to run the processing
function createCanvas(){
		//make a new canvas, in case we are switch from 2D to 3D context
		//get container
		var container = document.getElementById("content_canvas");
		//get iframe
		var oldIframe = document.getElementById("processing_iframe");
		//remove the iframe if it exists
		if(oldIframe){
			container.removeChild(oldIframe);
		}
		//create a new iframe
		var newIframe = document.createElement("iframe");
		//set the id
		newIframe.id = "processing_iframe";
		//append it as the child of the container
		container.appendChild(newIframe);
		
		return newIframe;
}

function run() {

    //show the console tab
    tabClick('tab_canvas');

    //if playduino is not connected, alert and return
    //however, this is unlikely to happen since run button is disabled when playduino is not connected
    if (runFlag.getFlag() != 'STOPPED') {
        alert('playduino is disconnected or the program is still running!');
        return;
    }

    runFlag.setFlag('RUNNING'); //set the status to running
    
    //get code
    var code = document.getElementById('textarea_code').value;
    //prepare P5 and scripts
	var includeP5 = '<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.4.20/p5.min.js" type="text/javascript"><\/script>';
	var scriptStart = '<script type="text/javascript">';
	var scriptEnd = '<\/script>';
	//create canvas for processing		
	var newIframe = createCanvas();
	newIframe.width = '1024';newIframe.height = '768';
	//create datauri	
	var datauri = 'data:text/html;charset=utf-8,' +
			encodeURIComponent('<!DOCTYPE html>'+
							   '<html lang="en">'+
							   '<head><title>Embedded Window</title>' +
							   includeP5 +
							   scriptStart +
							   code +
							   scriptEnd +
							    '</head>'+
							   '<body></body>'+
							   '</html>' );
	//set the iframe source to datauri
    newIframe.src = datauri;
    //append the iframe to the content_canvas
	document.getElementById("content_canvas").appendChild(newIframe);
}

function stop() {
	//get container
	var container = document.getElementById("content_canvas");
	//get iframe
	var oldIframe = document.getElementById("processing_iframe");
	//remove the iframe if it exists
	if(oldIframe){
		container.removeChild(oldIframe);
	}

    //set the status to stopped
    runFlag.setFlag('STOPPED');
    
    //show the sketch tab
    tabClick('tab_sketch');
}


function commandline_keypress(event) {
    var key = event.keyCode;
    if (key == 13) {
        var command = document.getElementById("commandline").value + "\n";
        document.getElementById("commandline").value = "";
        document.getElementById('textarea_console').value += command;
        if (broker_socekt != null) {
            broker_socekt.emit('write', command);
        };
    }
}

// To verify if the program name is valid
var isNotSafe = function(str) {
    var filterString = "";
    filterString = filterString == "" ? "'~`·!?@#$%^&*()-+./\" " : filterString
    var ch;
    var i;
    var temp;
    var error = false; // 当包含非法字符时，返回True
    if (str.length == 0) {
        error = true;
        return error;
    }
    for (i = 0; i <= (filterString.length - 1); i++) {
        ch = filterString.charAt(i);
        temp = str.indexOf(ch);
        if (temp != -1) {
            error = true;
            break;
        }
    }
    return error;
};

function fork(program, _id, language) {

    if (!isLogin) { //if it is not login, then go to the login page
        if (confirm('Please login at first')) {
            redirectLogin(program, program_id);
        } else {
            return;
        }
    } else { //if it is logined. Do forking and go to project page
        //ask user to input the new program name, default name is the same name of the program
        var current_project_name = $("#menu_title").text();
        var project_name = prompt(LANG.enter_project_name, current_project_name);
        if (isNotSafe(project_name)) {
            alert(LANG.fork_failed);
            return;
        }
        var posting = $.post("/blockly/app/" + program + "/fork", {
            "_id": _id,
            "project_name": project_name
        });
        posting.done(function(result) {
            if (result.status == "error") {
                if (result.errorno == 1) {
                    alert(LANG.not_login);
                } else if (result.errorno == 2) {
                    alert(LANG.not_exist);
                } else if (result.errorno == 3) {
                    alert(LANG.project_deleted);
                } else if (result.errorno == 4) {
                    alert(LANG.no_fork_rights);
                }
            } else {
                window.location.assign('/project?lang=' + language + '#' + program);
            }
        }).
        fail(function() {
            alert("network failed!");
        });
    }
}