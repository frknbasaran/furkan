//     furkan.js 0.0.1

//     (c) 2014-fuckin' ever Eray Arslan
//     furkan(person) may be freely distributed under the MIT license.
//     For all details and documentation:
//     (README.md)

(function(root, factory) {

    if(typeof define === 'function' && define.amd) {

        define(['exports'], function(exports) {
            root.Furkan = factory(root, exports);
        });

    } else if (typeof exports !== 'undefined') {

        factory(root, exports);

    } else {

        root.Furkan = factory(root, {});

    }

}(this, function(root, Furkan) {

    Furkan.VERSION = "0.0.3";

    Furkan.NAME = "Furkan";

    Furkan.ERAY = "fuckin\'";

    Furkan.YES = 1;

    Furkan.NO = 0;

    Furkan.ARRAY = [];

    Furkan.SPACE = " ";

    Furkan.whoami = function() {
        return Furkan.NAME;
    };

    Furkan.say = function(text) {
        if(text.toLowerCase() == "hi") {
            throw new Error(
                    Furkan.NAME+
                    Furkan.SPACE+
                    'dont'+
                    Furkan.SPACE+
                    'apply'+
                    Furkan.SPACE+
                    Furkan.ERAY+
                    Furkan.SPACE+
                    'this'+
                    Furkan.SPACE+
                    'text!'
            );
        }
        return text + Furkan.SPACE + Furkan.NAME;
    };

    Furkan.amicute = function() {
        return Furkan.YES;
    };

    Furkan.extend = function(args) {
        function clone(obj){
            if(obj == null || (typeof(obj) != 'object' || typeof(obj) != 'function'))
                return obj;
            var temp = obj.constructor();
            for(var key in obj)
                temp[key] = clone(obj[key]);
            return temp;
        }

        function extend (target, source) {
            target = target || {};
            for (var prop in source) {
                if (typeof source[prop] === 'object') {
                    target[prop] = extend(target[prop], source[prop]);
                } else { target[prop] = source[prop]; }
            } return target;
        }

        return extend(clone(Furkan),args);
    };

    return Furkan;

}));
