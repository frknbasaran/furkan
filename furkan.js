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

    Furkan.VERSION = "0.0.5";

    Furkan.NAME = "Furkan";

    Furkan.ERAY = "fuckin\'";

    Furkan.YES = 1;

    Furkan.NO = 0;

    Furkan.ARRAY = [];

    Furkan.SPACE = " ";

    Furkan.whoami = function() {
        return this.NAME;
    };

    Furkan.say = function(text) {
        if(text.toLowerCase() == "hi") {
            throw new Error(
                    this.NAME+
                    this.SPACE+
                    'dont'+
                    this.SPACE+
                    'apply'+
                    this.SPACE+
                    this.ERAY+
                    this.SPACE+
                    'this'+
                    this.SPACE+
                    'text!'
            );
        }
        return text + this.SPACE + this.NAME;
    };

    Furkan.amicute = function() {
        return this.YES;
    };

    var Dolly = function () {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
        if ( typeof target === "boolean" ) {
            deep = target;
            target = arguments[ i ] || {};
            i++;
        }
        if ( typeof target !== "object" && !(Object.prototype.toString.call( target ) === '[object Function]') ) {
            target = {};
        }
        if ( i === length ) {
            target = this;
            i--;
        }
        for ( ; i < length; i++ ) {
            if ( (options = arguments[ i ]) != null ) {
                for ( name in options ) {
                    src = target[ name ];
                    copy = options[ name ];
                    if ( target === copy ) {
                        continue;
                    }
                    if ( deep && copy && ( (copy.toString()==="[object Object]") ||
                        (copyIsArray = (Object.prototype.toString.call( copy ) === '[object Array]')) ) ) {
                        if ( copyIsArray ) {
                            copyIsArray = false;
                            clone = src && (Object.prototype.toString.call( src ) === '[object Array]') ? src : [];

                        } else {
                            clone = src && (src.toString()==="[object Object]") ? src : {};
                        }
                        target[ name ] = Dolly( deep, clone, copy );
                    } else if ( copy !== undefined ) {
                        target[ name ] = copy;
                    }
                }
            }
        } return target;
    }

    Furkan.extend = function(args) {
        return Dolly(true,Dolly(true, {}, Furkan),args);
    };

    return Furkan;

}));
