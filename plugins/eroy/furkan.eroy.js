//     furkan.eroy.js

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

    var me = Furkan.ERAY;

    for (var name in Furkan)
        if (!(name === "ERAY"))
            delete Furkan[name];

    Furkan.Eroy = function() {
        return me;
    };

    return Furkan.Eroy;

}));