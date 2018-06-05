var loading =  function (){
    var check = function (data) {
        data.isS = true;
        return data;
    };

    return {
        check: check
    }
}()

module.exports = loading; 