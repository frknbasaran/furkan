(function () {
    var Furkan = function () {
        var myBabyShutMeDown = "Furkan";
        var damnYES = 1;
        
        return {
            whoami : function() {
                return myBabyShutMeDown;
            },
            say : function(text) {
                return text + " " +myBabyShutMeDown;
            },
            amicute : function() {
                return damnYES;
            }
        }; 
    };
 
    if(!window.Furkan) {
        window.Furkan = Furkan;
    }
})();
