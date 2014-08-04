QUnit.test("whoami function test", function( assert ) {
    assert.ok( Furkan.whoami() == "Furkan", "Passed! with Core Name" );
    Furkan.NAME = "FurkanTemp";
    assert.ok( Furkan.whoami() == "FurkanTemp", "Passed! with Changed Name");
});

QUnit.test("leet function test", function( assert ) {
    assert.ok( Furkan["1337"]() == "Furk4n", "Passed!" );
});