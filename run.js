var main = require('./main')
var steps = require('./steps')
var async = require('async');


main(function (err, result) {

    if (err)
        return console.error(err);

    async.eachSeries([0, 1, 2, 3, 4], function (loop, callback) {
        async.series(steps(result, loop), function () {
            callback();
        });
    });

});

