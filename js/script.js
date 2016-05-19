var isViewExpanded = false;
var isControlExpanded = false;
var isScheduleExpanded = false;


$(document).ready(function(){

   $("[name='toggleBox']").bootstrapSwitch();/*Bootstrap Switch*/
   $('[data-toggle="tooltip"]').tooltip();/*Bootstrap Tooltip*/
    
    /*Bootstrap Slider*/
    $('#kitchenSlider').slider({
        formatter: function(value) {
            return 'Current value: ' + value;
        }
    });
    
    $('#bath1Slider').slider({
        formatter: function(value) {
            return 'Current value: ' + value;
        }
    });
    
    $('#bath2Slider').slider({
        formatter: function(value) {
            return 'Current value: ' + value;
        }
    });
    $('#kitchenSliderB').slider({
        formatter: function(value) {
            return 'Current value: ' + value;
        }
    });
    $('#loungeSliderB').slider({
        formatter: function(value) {
            return 'Current value: ' + value;
        }
    });
    $('#bedroomSliderB').slider({
        formatter: function(value) {
            return 'Current value: ' + value;
        }
    });
    $('#diningSliderB').slider({
        formatter: function(value) {
            return 'Current value: ' + value;
        }
    });

});



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








