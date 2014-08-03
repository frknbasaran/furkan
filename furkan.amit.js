//     furkan.amit.js

//     (c) 2014-fuckin' ever Eray Arslan
//     furkan.amit(person) may be freely distributed under the MIT license.
//     For all details and documentation:
//     (README.md)

(function (root, factory) {

    if (typeof define === "function" && define.amd) {

        define(["Furkan"], function(Furkan) {

            return factory(Furkan || root.Furkan);

        });

    } else {

        factory(Furkan);

    }

}(this, function(Furkan) {

    Furkan.Amit = function() {
        throw new Error(this.NAME + " love me baby!");
    };

    return Furkan.Amit;

}));