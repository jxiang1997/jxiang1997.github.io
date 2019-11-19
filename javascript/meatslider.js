/* JS logic for meat slides */



$(document).ready(function() {
    // Beef
    var beef = $('#beef');
    var beef_carbon = $('#beef_carbon');

    // Poultry 
    var poultry = $('#poultry');
    var poultry_carbon = $('#poultry_carbon');

    // Pork
    var pork = $('#pork');
    var pork_carbon = $('#pork_carbon');

    // Lamb/Goat
    var lamb_goat = $('#lamb_goat');
    var lamb_goat_carbon = $('#lamb_goat_carbon');

    // Dairy
    var pork = $('#dairy');
    var pork_carbon = $('#dairy_carbon');

    // have sliders show up during scrolling
    $(windom).scroll(function() {

        // dynamic sliders
        function slider(elem, loc, width){
            var target = loc.offset().top;

            function checkvisible(elem) {
                var vpH = viewPortHeight(),
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
        slider(poultry_carbon, poultry, '90');
        slider(pork_carbon, pork, '90');
        slider(lamb_goat_carbon, lamb_goat, '90');
        slider(dairy_carbon, dairy, '90');

    })
    

});