QUnit.test("whoami function test", function( assert ) {
    assert.ok( Furkan.whoami() == "Furkan", "Passed!" );
    Furkan.NAME = "FurkanTemp";
    assert.ok( Furkan.whoami() == "FurkanTemp", "Passed!");
});

QUnit.test("say function test", function( assert ) {
    assert.ok( Furkan.say("mrb") == "mrb Furkan", "Passed!" );
});

