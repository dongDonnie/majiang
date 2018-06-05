var hallmgr = function () {
    var createroom = function (data) {
        data.isS = true;
        return data;
    };

    return {
        createroom: createroom
    }
}()
module.exports = hallmgr;