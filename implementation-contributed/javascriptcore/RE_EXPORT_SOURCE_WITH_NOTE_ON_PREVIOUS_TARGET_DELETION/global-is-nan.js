function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error(`bad value: ${actual}`);
}
for (var i = -1e4; i < 1e4; ++i)
    shouldBe(isNaN(i), false);

// Emit DoubleRep.
for (var i = 0; i < 1e4; ++i) {
    shouldBe(isNaN(Infinity), false);
    shouldBe(isNaN(-Infinity), false);
    shouldBe(isNaN(NaN), true);
}

// Emit ToNumber.
for (var i = 0; i < 1e4; ++i)
    shouldBe(isNaN("0"), false);
shouldBe(isNaN("Hello"), true);
shouldBe(isNaN("NaN"), true);

// modify global-is-nan.js in the vendor repo

    /*
    ****************************************************** test262-automation ******************************************************
    Summary: Source material changed after curation & deletion of exported file.
        File Status: Fully curated & deleted
        Source Status: Modified since curation & deletion.
        Below is the current and modified source which was exported on undefined
    */