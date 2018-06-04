var Utils = require('Utils');
// import global from './global';
cc.Class({
    extends: cc.Component,

    properties: {
        // namelabel: cc.EditBox,
        // passwordlabel: cc.EditBox,
    },

    onLoad: function () {
        cc.Url = "http://localhost:8080";
        cc.socket = io(cc.Url);
        cc.Utils = Utils;
    },

    start: function () {
        cc.socket.on('welcome', function (data) {
            cc.log("data = " + data);
        })
    },

    clickLogin: function (eve, custom) {
        var data = {
            "pid": "12345678",
            "name": this.namelabel.string,
            "password": this.passwordlabel.string,
        }
        data = JSON.stringify(data);
        cc.socket.emit(CmdCode.code.login, data);
    }
});