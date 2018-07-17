var abort = $vm.abort;

(async function () {
    const { shouldBe } = await import('./import-tests/should.js');
    {
        let a = await import('./import-tests/cocoa.js');
        let b = await import('./import-tests/cocoa.js');
        shouldBe(a, b);
        shouldBe(a.hello(), 42);
    }

    {
        let a = await import('./import-tests/multiple.js');
        let a2 = await a.result();
        shouldBe(a !== a2, true);
        shouldBe(a2.ok(), 42);
        let a3 = await a.result();
        shouldBe(a2, a3);
    }

    {
        let error = null;
        try {
            let a = await import({ toString() { throw new Error('out'); } });
        } catch (e) {
            error = e;
        }
        shouldBe(error !== null, true);
        shouldBe(String(error), `Error: out`);
    }

    // partially curate import-basic.js

    {
        let value = './import-tests/cocoa.js';
        let v = await import(value);
        let v2 = await import('./import-tests/cocoa.js');
        shouldBe(v, v2);
    }
}()).catch((error) => {
    print(String(error));
    abort();
});

    /*
    ********************************** test262-automation **********************************
    Summary: Source file renamed after partial curation & modification of exported file.
        File Status: Partially curated & modified.
        Source Status: Renamed since export.
        This file name and location now matches the source which was exported on Tue Jul 17 2018 15:18:12 GMT-0400 (Eastern Daylight Time)
    */