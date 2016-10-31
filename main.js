var ftdi = require('ftdi');
var async = require('async');

module.exports = function (cb) {
    ftdi.find(0x0403, 0x6001, function (err, devices) {

        var exec = {};

        devices.forEach(function (device) {
            var x = new ftdi.FtdiDevice(device);
            x.on('error', function (err) {
                console.error(err)
            });
            exec[device.serialNumber] = function (callback) {
                x.open({
                    baudrate: 38400,
                    databits: 8,
                    stopbits: 1,
                    parity: 'none',
                    bitmode: 'cbus', // for bit bang
                    bitmask: 0xff    // for bit bang
                }, function (err) {
                    x.on('data', function (data) {
                        console.log(device.serialNumber, ' : ', data.toString())

                    });
                    var buf = new Buffer('01', 'hex');
                    x.write(buf, function (err) {
                        console.log('start')
                    });
                    callback(err, x);
                });
            };
        });
        async.parallel(exec, cb);
    });
};




