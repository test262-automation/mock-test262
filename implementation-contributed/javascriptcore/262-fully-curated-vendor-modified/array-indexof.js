function shouldBe(actual, expected)
{
    if (actual !== expected)
        throw new Error('bad value: ' + actual);
}

(function () {
    function indexOf(array, value)
    {
        return array.indexOf(value);
    }
    noInline(indexOf);

    var array = [];
    for (var i = 0; i < 100; ++i)
        array.push(i);

    for (var i = 0; i < 1e5; ++i)
        shouldBe(indexOf(array, 42), 42);
}());

(function () {
    function indexOf(array, value)
    {
        return array.indexOf(value);
    }
    noInline(indexOf);

    var array = [];
    for (var i = 0; i < 100; ++i)
        array.push(i + 0.5);

    for (var i = 0; i < 1e5; ++i)
        shouldBe(indexOf(array, 42 + 0.5), 42);
}());


// Modify array-indexof.js in the vendor repo

    /*
    ****************************************************** test262-automation ******************************************************
    Summary: Source material changed after curation & deletion of exported file.
        File Status: Fully curated & deleted
        Source Status: Modified since curation & deletion.
        Below is the current and modified source which was exported on undefined
    */