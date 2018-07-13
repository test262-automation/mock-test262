(function() {
    for (var i = 0; i < 10000; ++i) {
        var o = {};
        
        if (hasCustomProperties(o))
            throw "Error: object shouldn't have custom properties yet.";
        
        o.f = 42;
        
        if (!hasCustomProperties(o))
            throw "Error: object should have custom properties already.";
    }
})();

    /*
    ********************************** test262-automation **********************************
    Summary: Source file renamed after curation & deletion of exported file.
        File Status: Fully curated & deleted
        Source Status: Renamed since curation & deletion.
        This file name and location now matches the source which was exported on Fri Jul 13 2018 11:57:38 GMT-0400 (EDT)
    */