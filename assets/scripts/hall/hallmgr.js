cc.Class({
    extends: cc.Component,
    properties: {
        createpre: cc.Prefab,
        joinpre:cc.Prefab,
    },

    onLoad: function () {
        this._obj = cc.Utils.bindNode(this.node);
        cc.socket.on('createroom', function (data) {
            data = JSON.parse(data);
            cc.log(data);
        })
    },

    createbtn: function (){
        var create = cc.instantiate(this.createpre);
        create.parent = this.node;
    },

    joinbtn: function (){
        var join = cc.instantiate(this.joinpre);
        join.parent = this.node;
    },
});