var pos = {

    GET_CUP1 : new Buffer('1400AA88BB66FF', 'hex'),
    GET_CUP2 : new Buffer('1400AA88BB6666', 'hex'),
    GET_CUP3 : new Buffer('14008080806666', 'hex'),
    GET_CUP4 : new Buffer('146627CC886666', 'hex'),
    GET_CUP5 : new Buffer('140027CC886666', 'hex'),

    ROTATE_0 : new Buffer('1500', 'hex'),
    ROTATE_1 : new Buffer('1533', 'hex'),
    ROTATE_2 : new Buffer('1566', 'hex'),
    ROTATE_3 : new Buffer('1599', 'hex'),
    ROTATE_4 : new Buffer('15CC', 'hex')

};

module.exports = function (result, loop) {

    return [
        function(cb){
            result['ARZ4IF88'].write(pos['ROTATE_' + loop]);
            result['ARZ4IF2A'].write(pos.GET_CUP1, function(){
                setTimeout(cb,5000)
            });
        },
        function(cb){
            result['ARZ4IF88'].write(pos['ROTATE_' + loop]);
            result['ARZ4IF2A'].write(pos.GET_CUP2, function(){
                setTimeout(cb,1000)
            });
        },
        function(cb){
            result['ARZ4IF2A'].write(pos.GET_CUP3, function(){
                setTimeout(cb,1000)
            });
        },
        function(cb){
            result['ARZ4IF2A'].write(pos.GET_CUP4, function(){
                setTimeout(cb,5000)
            });
        },
        function(cb){
            result['ARZ4IF2A'].write(pos.GET_CUP5, function(){
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