var isViewExpanded = false;
var isControlExpanded = false;
var isScheduleExpanded = false;


function expandFunctionView() {
    
    if (isViewExpanded === false) {
        var button = document.getElementById("viewButton");
        button.style.animation = "shrinkth 1s linear 0s 1 forwards";
        var elements = document.querySelectorAll('.ViewMenuTD');
        for (var i=0; i<elements.length; i++){
            elements[i].style.display="block";
            elements[i].style.animation = "expandtd 1s linear 0s 1 forwards";
        }
        isViewExpanded = true;
        
    } else{
        var elements = document.querySelectorAll('.ViewMenuTD');
        for(var i=0; i<elements.length; i++){
            elements[i].style.animation = "expandtd-reverse 1s linear 0s 1 forwards";
        }
        for(var i=0; i<elements.length; i++){
            elements[i].style.display="none";
        }
        var button = document.getElementById("viewButton");
        button.style.animation = "shrinkth-reverse 1s linear 0s 1 forwards";
        
        isViewExpanded = false;
    }
}

function expandFunctionControl() {
    
    if (isControlExpanded === false) {
        var button = document.getElementById("controlButton");
        button.style.animation = "shrinkth 1s linear 0s 1 forwards";
        var elements =document.querySelectorAll('.ControlMenuTD');
        for(var i=0; i<elements.length; i++){
            elements[i].style.display="block";
            elements[i].style.animation = "expandtd 1s linear 0s 1 forwards";
        }
        isControlExpanded = true;
    } else {
        var elements =document.querySelectorAll('.ControlMenuTD');
        for(var i=0; i<elements.length; i++){
            elements[i].style.animation = "expandtd-reverse 1s linear 0s 1 forwards";
            
        }
        for(var i=0; i<elements.length; i++){
            elements[i].style.display="none";
        }
        var button = document.getElementById("controlButton");
        button.style.animation = "shrinkth-reverse 1s linear 0s 1 forwards";
        
        isControlExpanded = false;
    }
    
}

function expandSchedule(){
    if(isScheduleExpanded === false){
        var elements = document.querySelectorAll('.scheduleEntry');
        for(var i=0; i<elements.length; i++){
            elements[i].style.display="inline-block";
            elements[i].style.animation="expandtd 2s linear 0s forwards";
        }
        isScheduleExpanded=true;
    } else{
         var elements = document.querySelectorAll('.scheduleEntry');
        for(var i=0; i<elements.length; i++){
            elements[i].style.animation="expandtd-reverse 2s linear 0s forwards";
        }
        for(var i=0; i<elements.length; i++){
            elements[i].style.display="none";
        }
        isScheduleExpanded=false;
    }
}

function retrieveTime(){
    var datePicker = document.getElementById('calendar');
    var timePicker = document.getElementById('clock');
    
    if(datePicker.validity.badInput){
        alert("Error: Please confirm using a valid date");
        return false;
    }
    if(timePicker.validity.badInput){
        alert("Error: Please confirm using a valid time");
        return false;
    }
    
    var date = isToday(datePicker.value);
    if(date == false){
        alert("Error: This date has already past");
        return false;
    } else{
        room1.date= date;
    }
    room1.time = toTwelveHour(timePicker.value);
    room1.queue = true;
    
    $('#modalScheduler').modal('hide');
    swal(room1.date + " and " + room1.time, "Remember now to apply this action!","success");
    return false;
}

function applyRoom1(){
        
    if (room1.queue == true && room1.change == true) {
        room1.queue = false;
        room1.change = false;
        var scheduleEntry = document.createElement("span");
        
        var glyphIcon = document.createElement("span");
        glyphIcon.setAttribute("class","glyphicon glyphicon-fire");
        
        scheduleEntry.appendChild(glyphIcon);
        scheduleEntry.setAttribute("data-toggle","tooltip");
        var tooltipString = room1.room + " - " + room1.type + " - " + room1.date + " - " +room1.time + " - " + room1.temp;
        scheduleEntry.setAttribute("title",tooltipString);
        scheduleEntry.setAttribute("class","scheduleEntry");
        
        document.getElementById('entryWrapper').appendChild(scheduleEntry);
        
        $('[data-toggle="tooltip"]').tooltip();/*Bootstrap Tooltip - Re-load*/
        isScheduleExpanded=false;
        expandSchedule();
        
        swal("Success","New Entry added to schedule!","success");
    }
    else if(room1.change == true){
        room1.change = false;
        document.getElementById('kitchenStatus').innerHTML = room1.temp;
        swal("Success","Temperature updated to " + room1.temp,"success");
    }
    else{
        swal("Oops..","No temperature changes have been made!","error");
    }

}

function toTwelveHour(string){
    var hour = string.split(':')[0];
    var minutes = string.split(':')[1];
    if (hour > 12 ){
        var suffix = "pm"
        hour = hour-12;
    }else if(hour == 12){
        var suffix = "pm"
    }else{
        var suffix = "am"
    }
    return hour + ":"+minutes+suffix;
    
}

function isToday(string){
    var today = new Date();
    var todayDay = today.getDate();
    var todayMonth = today.getMonth();
    
    var month = string.split("-")[1];
    var day = string.split("-")[2];
    
    if((todayDay == day) && (todayMonth + 1 == month)){
        return "Today";
    }
    else if(todayMonth+1 > month){
        return false;
    }
    else if(todayMonth+1 == month){
        if(todayDay>day){
            return false;
        }
    }
    return day +"-" + month;
}





