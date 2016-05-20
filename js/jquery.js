$(document).ready(function(){

   $("[name='toggleBox']").bootstrapSwitch();/*Bootstrap Switch*/
   $('[data-toggle="tooltip"]').tooltip();/*Bootstrap Tooltip*/
       
    /*Bootstrap Slider*/
    var kitchenSlider = $('#kitchenSlider').slider({
        formatter: function(value) {
            return 'Current value: ' + value+"°C";
        }
    });
       
    
    $('#kitchenSlider').on("slideStop",function(value){
         room1.temp = value.value+"°C";
         room1.change = true;
    });
    
    
    $('#bath1Slider').slider({
        formatter: function(value) {
            return 'Current value: ' + value+"°C";
        }
    });
    
    $('#bath2Slider').slider({
        formatter: function(value) {
            return 'Current value: ' + value+"°C";
        }
    });
    $('#kitchenSliderB').slider({
        formatter: function(value) {
            return 'Current value: ' + value+"°C";
        }
    });
    $('#loungeSliderB').slider({
        formatter: function(value) {
            return 'Current value: ' + value+"°C";
        }
    });
    $('#bedroomSliderB').slider({
        formatter: function(value) {
            return 'Current value: ' + value+"°C";
        }
    });
    $('#diningSliderB').slider({
        formatter: function(value) {
            return 'Current value: ' + value+"°C";
        }
    });

});