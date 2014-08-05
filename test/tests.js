(function() {

    test("whoami", 1, function() {
        strictEqual(Furkan.NAME, Furkan.whoami());
    });

})();