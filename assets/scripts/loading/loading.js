cc.Class({
    extends: cc.Component,
    properties: {
        
    },

    onLoad: function () {
        this._obj = cc.Utils.bindNode(this.node);
        cc.socket.on('load', function (data) {
            data = JSON.parse(data);
            cc.log(data);
            if (data.isS) {
                cc.director.loadScene('hall');
            }
        });
    },

    clickload: function (){
        if (this._obj.btns.agreement._Toggle.isChecked) {
            var data = {
                id: this._obj.input.number._EditBox.string,
                psw: this._obj.input.psw._EditBox.string
            };
            data = JSON.stringify(data);
            cc.socket.emit('load', data);
        } else {
            cc.log('请勾选协议');
        }
    },

    showagreement: function (){
        this._obj.agreement._Node.active = true;
    },

    closeagreement: function (){
        this._obj.agreement._Node.active = false;
    },
});