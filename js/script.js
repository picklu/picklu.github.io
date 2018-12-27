/*********************************************
 * 
 *  Uncheck toggler
 * 
 ********************************************/

(function() {
    var toggler = document.querySelector("#toggler");
    var navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function(element, i, arr) {
        element.addEventListener("click", function() {
            toggler.checked = false;
        });
    });
})();
