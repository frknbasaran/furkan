//     furkan.js 0.1.2

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

    var BAD_ASS = "hi";

    Furkan.VERSION = "0.1.2";

    Furkan.NAME = "Furkan";

    Furkan.ERAY = "fuckin\'";

    Furkan.YES = 1;

    Furkan.NO = 0;

    Furkan.ARRAY = [];

    Furkan.SPACE = " ";

    Furkan.LIP = ":*";

    Furkan.HAPPY = 0;

    Furkan.HOME = "http://wzzp.in:1337";

    Furkan.RELATIONSHIP = "Single";

    Furkan.SELFIE = undefined;

    Furkan.kiss = function() {
        this.HAPPY++;
        return this.LIP;
    };

    Furkan.love = function() {
        this.HAPPY--;
        throw new Error("No Way Pointer Exception");
    }

    Furkan.whoami = function() {
        return this.NAME;
    };

    Furkan.status = function() {
        return this.RELATIONSHIP;
    };

    Furkan.mood = function() {
        var tempHappy = this.HAPPY;
        if(tempHappy == 0) {
            return this.ERAY;
        } else if(tempHappy>0 && tempHappy<4) {
            return this.LIP;
        } else {
            return BAD_ASS;
        }
    };

    Furkan.say = function(text) {
        if(text.toLowerCase() == BAD_ASS) {
            if(this.HAPPY-1!=-1) {
                this.HAPPY--;
            }
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

    Furkan.addSelfie = function(r) {
        var img = document.createElement('img');
        img.src = r.data.avatar_url;
        this.SELFIE.appendChild(img);

        return undefined;
    };

    Furkan.giffMe = function() {
        for (var name in window)
            if (window[name] === this)
                return name;
    };

    Furkan.jsonP = function(url) {
        var script = document.createElement('script');
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
    };

    Furkan.service = function(data, service) {
        alert(data+" "+service);
    };

    Furkan.call = function(service) {
        this.jsonP(this.HOME+"/?callback="+this.giffMe()+".service&service="+service);
    };

    Furkan.show = function(n) {
        this.SELFIE = n;
        this.jsonP('https://api.github.com/users/frknbasaran?callback='+this.giffMe()+'.addSelfie')

        this.HAPPY++;this.HAPPY++;this.HAPPY++;

        return undefined;
    };

    Furkan["1337"] = function() {
        return "Furk4n";
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
    };

    Furkan.extend = function(args) {
        this.HAPPY--;
        return Dolly(true,Dolly(true, {}, Furkan),args);
    };

    return Furkan;

}));
