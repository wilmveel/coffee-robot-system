var pos = {

    GET_CUP1 : new Buffer('1400AA88BB66FF', 'hex'),
    GET_CUP2 : new Buffer('1400AA88BB6666', 'hex'),
    GET_CUP3 : new Buffer('14002299666666', 'hex'),
    GET_CUP4 : new Buffer('140022996666FF', 'hex'),

    ROTATE_0 : new Buffer('1500', 'hex'),
    ROTATE_1 : new Buffer('1533', 'hex'),
    ROTATE_2 : new Buffer('1566', 'hex'),
    ROTATE_3 : new Buffer('1599', 'hex'),
    ROTATE_4 : new Buffer('15BB', 'hex'),
    ROTATE_5 : new Buffer('15FF', 'hex')

};

module.exports = function (result, loop) {

    return [
        function(cb){
            console.log(loop, 'ROTATE_' + loop)
            result['ARZ4IF88'].write(pos['ROTATE_' + loop]);
            result['ARZ4IF2A'].write(pos.GET_CUP1, function(){
                setTimeout(cb,5000)
            });
        },
        function(cb){
            result['ARZ4IF2A'].write(pos.GET_CUP4, function(){
                setTimeout(cb,5000)
            });
        }
    ];

}