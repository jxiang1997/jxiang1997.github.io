/* JS logic for meat slides */


$(document).ready(function() {
    console.log("WHAT's UP!!");
    // Beef
    var beef = $('#beef');
    var beef_carbon = $('#beef_carbon');
    var beef_land_use = $('#beef_land_use');
    var beef_water_use = $('#beef_water_use');

    // Poultry 
    var poultry = $('#poultry');
    var poultry_carbon = $('#poultry_carbon');
    var poultry_land_use = $('#poultry_land_use');
    var poultry_water_use = $('#poultry_water_use');


    // Pork
    var pork = $('#pork');
    var pork_carbon = $('#pork_carbon');
    var pork_land_use = $('#pork_land_use');
    var pork_water_use = $('#pork_water_use');

    // Lamb/Goat
    var lamb_goat = $('#lamb_goat');
    var lamb_goat_carbon = $('#lamb_goat_carbon');
    var lamb_goat_land_use = $('#lamb_goat_land_use');
    var lamb_goat_water_use = $('#lamb_goat_water_use');

    // Dairy
    var dairy = $('#dairy');
    var dairy_carbon = $('#dairy_carbon');
    var dairy_land_use = $('#dairy_land_use');
    var dairy_water_use = $('#dairy_water_use');

    // have sliders show up during scrolling
    $(window).scroll(function() {
        var position  = $(this).scrollTop();

        // dynamic sliders
        function slider(elem, loc, width){
            var target = loc.offset().top;

            function checkvisible(elem) {
                var vPH = viewPortHeight(),
                y = elem.offset().top;

            return (position < y && y < vPH + position);
            }

            // get view port height
            function viewPortHeight(){
                var documentelement = document.documentElement;

                if(!!window.innerWidth)
                    {return window.innerHeight; }
                else if (documentelement && !isNaN(documentelement.clientHeight))
                    {return documentelement.clientHeight;}
                
                return 0;
            }

            if (checkvisible(elem)) {
                elem.css({'width': width + '%'});
            }
            else {
                elem.css({'width': '0%'});
            }
        }

        slider(beef_carbon, beef, '90');
        slider(beef_land_use, beef, '90');
        slider(beef_water_use, beef, '90');

        slider(poultry_carbon, poultry, '40');
        slider(poultry_land_use, poultry, '30');
        slider(poultry_water_use, poultry, '10');

        slider(pork_carbon, pork, '50');
        slider(pork_land_use, pork, '50');
        slider(pork_water_use, pork, '50');


        slider(lamb_goat_carbon, lamb_goat, '70');
        slider(lamb_goat_land_use, pork, '70');
        slider(lamb_goat_water_use, pork, '70');

        slider(dairy_carbon, dairy, '80');
        slider(dairy_land_use, pork, '80');
        slider(dairy_water_use, pork, '80');

    })

});