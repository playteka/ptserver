/*
 if(document.createEvent){ //This is for the stand browser.
 var saveFlagChangeEvent=document.createEvent('HTMLEvents');
 saveFlagChangeEvent.initEvent('saveFlagChangeEvent',false,false);
 //var saveFlagChangeEvent = new Event('saveFlagChangeEvent');
 document.addEventListener('saveFlagChangeEvent',saveFlagChangeHandler);
 }else if(document.attachEvent){ //This is for the damn IE
 document.documentElement.saveFlagChangeEvent = 0; // an expando property
 document.documentElement.attachEvent("onpropertychange", function(event) {
 if (event.propertyName == "saveFlagChangeEvent") {
 saveFlagChangeHandler();
 }
 });
 }
 */
//var saveFlagChangeEvent = new Event('saveFlagChangeEvent');

var saveFlag=function(){
    var flag='IDLE'; //IDEL, SAVING, SAVED, MODIFIED
    var readonly = 'NO'; //YES, NO
    return {
    getFlag:function(){return flag;},
    setFlag:function(status){
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
    getReadonly:function(){return readonly;},
    setReadonly:function(status){readonly = status;}
    }
}();

$(document).on("saveFlagChangeEvent", function(event){
               //alert('event triggered'+saveFlag.getFlag());
               var flag = saveFlag.getFlag();
               if (flag == 'IDLE') {
               $('#info_save').html(LANG.IDLE);
               }
               else if (flag == 'SAVING') {
               $('#info_save').html(LANG.SAVING);
               }
               else if (flag == 'SAVED') {
               $('#info_save').html(LANG.SAVED);
               $('#info_save').attr("class", "btn btn-success");
               }
               else if (flag == 'MODIFIED') {
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
        var blob = new Blob([data], {type: "text/plain;charset=utf-16"});
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


function upload_xml(program, _id){
    
    saveFlag.setFlag('SAVING');
    
    var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    var xml_code = Blockly.Xml.domToText(xml);
    
    var posting = $.post("/blockly/app/"+program+"/upload", {"_id" : _id, "xml_code" : xml_code});
    posting.done(function(result){
                 if (result.status == "error") {
                 if (result.errorno == 1) {
                 alert("you haven't logged in yet");
                 }
                 else if (result.errorno == 2) {
                 alert("project does not exist");
                 }
                 else if (result.errorno == 3) {
                 alert("project has been deleted");
                 }
                 else if (result.errorno == 4) {
                 alert("you have no rights to modify program of another user");
                 }
                 }
                 else{
                 saveFlag.setFlag('SAVED');
                 return "success";
                 }
                 }).
    fail(function(){
         saveFlag.setFlag('MODIFIED');
         alert("network failed!");
         });
}

function download_xml(program, _id){
    
    var posting = $.post("/blockly/app/"+program+"/download", {"_id" : _id});
    posting.done(function(result){
                 if (result.status == "error") {
                 if (result.errorno == 1) {
                 alert(LANG.not_login);
                 }
                 else if (result.errorno == 2) {
                 alert(LANG.not_exist);
                 }
                 else if (result.errorno == 3) {
                 alert(LANG.project_deleted);
                 }
                 else if (result.errorno == 4) {
                 alert(LANG.no_view_rights);
                 }
                 logout();
                 }
                 else if (result.status == 'readonly') {
                 
                 //set the readonly flag to "YES"
                 saveFlag.setReadonly('YES');
                 
                 //hide save buttong and show fork button
                 $("#saveButton").hide();
                 $("#info_save").hide();
                 $("#forkButton").show();
                 $("#info_fork").show();
                 
                 //set playduino IP to localhost when program is readonly
                 runFlag.setIPaddress('127.0.0.1');
                 connect_playduino();
                 
                 if(result.xml_code == null) return;
                 
                 //load the program into workspace
                 try {  //parse text to xml DOM
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
                 else if (result.status == 'readwrite') {
                 
                 //set the readonly flag to "NO"
                 saveFlag.setReadonly('NO');
                 
                 //show save button and hide fork button
                 $("#savButton").show();
                 $("#info_save").show();
                 $("#forkButton").hide();
                 $("#info_fork").hide();
                 
                 //set playduino IP address and connect
                 runFlag.setIPaddress(result.ipaddress);
                 connect_playduino();
                 
                 if(result.xml_code == null) return;
                 
                 //load the program into workspace
                 try {  //parse text to xml DOM
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
    fail(function(){
         alert("network failed!");
         });
}


function ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint16Array(buf));
}

/*
 var disconnectedEvent = new Event('disconnectedEvent');
 var connectingEvent = new Event('connectingEvent');
 var connectedEvent = new Event('connectedEvent');
 var runningEvent = new Event('runningEvent');
 */

var runFlag=function(){
    var flag='DISCONNECTED';
    var ipaddress = '127.0.0.1';
    return {
    getFlag:function(){return flag;},
    setFlag:function(status){
        if (status != flag) {
            flag = status;
            if (flag == 'DISCONNECTED') {
                $(document).trigger("disconnectedEvent");
            }
            else if (flag == 'CONNECTING') {
                $(document).trigger("connectingEvent");
            }
            else if (flag == 'CONNECTED') {
                $(document).trigger("connectedEvent");
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

$(document).on('disconnectedEvent', function(event){
               // show 'disconnected' in red
               $("#info_connect").attr("class", "btn btn-danger");
               $("#info_connect").html(runFlag.getIPaddress() + ' disconnected');
               
               $("#runButton").attr("disabled", true);  //disable run button
               $("#stopButton").attr("disabled", true); //disable stop button
               
               // show 'stopped' in read
               $("#info_run").attr("class", "btn btn-danger");
               $("#info_run").html('stopped');
               });

$(document).on('connectingEvent', function(event){
               // show 'connecting' in red
               $("#info_connect").attr("class", "btn btn-danger");
               $("#info_connect").html(runFlag.getIPaddress() + LANG.connecting);
               
               $("#runButton").attr("disabled", true);  //disable run button
               $("#stopButton").attr("disabled", true); //disable stop button
               
               // show 'stopped' in read
               $("#info_run").attr("class", "btn btn-danger");
               $("#info_run").html(LANG.stopped);
               });

$(document).on('connectedEvent', function(event){
               // show 'connected' in green
               $("#info_connect").attr("class", "btn btn-success");
               $("#info_connect").html(runFlag.getIPaddress() + LANG.connected);
               
               $("#runButton").attr("disabled", false);  //enable run button
               $("#stopButton").attr("disabled", true); //disable stop button
               
               // show 'stopped' in read
               $("#info_run").attr("class", "btn btn-danger");
               $("#info_run").html(LANG.stopped);
               });

$(document).on('runningEvent', function(event){
               // show 'connected' in green
               $("#info_connect").attr("class", "btn btn-success");
               $("#info_connect").html(runFlag.getIPaddress() + LANG.connected);
               
               $("#runButton").attr("disabled", true);   //disable run button
               $("#stopButton").attr("disabled", false); //enable stop button
               
               // show 'running' in green
               $("#info_run").attr("class", "btn btn-success");
               $("#info_run").html(LANG.running);
               });


var broker_socekt = null;

function connect_playduino(){
    
    runFlag.setFlag('CONNECTING');
    
    var ipaddress = runFlag.getIPaddress();
    broker_socekt = io.connect('ws://'+ipaddress+':30001');
    
    broker_socekt.on('connect', function() {
                     runFlag.setFlag('CONNECTED');
                     document.getElementById('textarea_console').value += "connected!\n";
                     document.getElementById('textarea_console').scrollTop = document.getElementById('textarea_console').scrollHeight;
                     });
    
    broker_socekt.on('error', function() {
                     runFlag.setFlag('DISCONNECTED');
                     document.getElementById('textarea_console').value += "connect error!\n";
                     document.getElementById('textarea_console').scrollTop = document.getElementById('textarea_console').scrollHeight;
                     });
    
    broker_socekt.on('disconnect', function() {
                     runFlag.setFlag('DISCONNECTED');
                     document.getElementById('textarea_console').value += "disconnected!\n";
                     document.getElementById('textarea_console').scrollTop = document.getElementById('textarea_console').scrollHeight;
                     });
    
    // build event handlers to write the messages from worker and broker
    broker_socekt.on('worker_stdout', function (data) {
                     document.getElementById('textarea_console').value += data;
                     document.getElementById('textarea_console').scrollTop = document.getElementById('textarea_console').scrollHeight;
                     });
    
    broker_socekt.on('worker_stderr', function (data) {
                     runFlag.setFlag('CONNECTED'); //CONNECTED is the status of program being stopped
                     document.getElementById('textarea_console').value += data;
                     document.getElementById('textarea_console').scrollTop = document.getElementById('textarea_console').scrollHeight;
                     });
    
    broker_socekt.on('worker_exit', function (data) {
                     runFlag.setFlag('CONNECTED'); //CONNECTED is the status of program being stopped
                     document.getElementById('textarea_console').value += data;
                     document.getElementById('textarea_console').scrollTop = document.getElementById('textarea_console').scrollHeight;
                     });
    
    broker_socekt.on('server_sysout', function (data) {
                     //runFlag.setFlag('RUNNING'); //in this case, the program is still running
                     document.getElementById('textarea_console').value += data;
                     document.getElementById('textarea_console').scrollTop = document.getElementById('textarea_console').scrollHeight;
                     });
    
}



function run(){
    
    //show the console tab
    tabClick('tab_console');
    
    //if playduino is not connected, alert and return
    //however, this is unlikely to happen since run button is disabled when playduino is not connected
    if (runFlag.getFlag() != 'CONNECTED') {
        alert('playduino is disconnected or the program is still running!');
        return;
    }
    
    //send program to broker
    var code = document.getElementById('textarea_code').value;
    broker_socekt.emit('run', code);
    
    runFlag.setFlag('RUNNING'); //set the status to running
}

function stop(){
    //send the 'stop' message to broker
    if (broker_socekt != null) {
        broker_socekt.emit('stop','stop');
    };
    
    //disable stop button
    //document.getElementById('stopButton').disabled = true;
}


function commandline_keypress(event){
    var key = event.keyCode;
    if(key==13){
        var command = document.getElementById("commandline").value +"\n";
        document.getElementById("commandline").value = "";
        document.getElementById('textarea_console').value += command;
        if (broker_socekt != null) {
            broker_socekt.emit('write',command);
        };
    }
}

function fork(program, _id, language){
    
    if (!isLogin) {  //if it is not login, then go to the login page
        if(confirm('Please login at first')){
            redirectLogin('playduino', program_id);
        }
        else{
            return;
        }
    }
    else{ //if it is logined. Do forking and go to project page
        var posting = $.post("/blockly/app/"+program+"/fork", {"_id" : _id});
        posting.done(function(result){
                     if (result.status == "error") {
                     if (result.errorno == 1) {
                     alert(LANG.not_login);
                     }
                     else if (result.errorno == 2) {
                     alert(LANG.not_exist);
                     }
                     else if (result.errorno == 3) {
                     alert(LANG.project_deleted);
                     }
                     else if (result.errorno == 4) {
                     alert(LANG.no_fork_rights);
                     }
                     }
                     else{
                     window.location.assign('/project?lang='+language + '#'+program);
                     }
                     }).
        fail(function(){
             alert("network failed!");
             });
    }
}
