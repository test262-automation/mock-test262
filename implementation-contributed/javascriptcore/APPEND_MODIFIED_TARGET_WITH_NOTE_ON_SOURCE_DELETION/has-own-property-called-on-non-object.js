"use strict";

let objs = [
    function() { },
    new String(),
    {foo: 45},
    {bar:50, foo: 45},
    {baz:70, bar:50, foo: 45},
    new Date,
];

let has = ({}).hasOwnProperty;
function foo(o) {
    return has.call(o, "foo");
}

// Partially curate has-own-property-called-on-non-object.js

noInline(foo);

for (let i = 0; i < 10000; i++)
    foo(objs[i % objs.length]);

foo("foo");

    /*
    ********************************** test262-automation **********************************
    Summary: Source file deleted after partial curation.
        File Status: Partially curated & modified.
        Source Status: Deleted since export.
        This message was added on Fri Jul 13 2018 11:09:15 GMT-0400 (EDT)
    */