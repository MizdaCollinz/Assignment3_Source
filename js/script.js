var isViewExpanded = false;
var isControlExpanded = false;

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

function hoverControl(){
    
}


