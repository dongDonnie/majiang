cc.Class({
    extends: cc.Component,
    properties: {

    },

    onLoad: function () {
        // this._obj = cc.Utils.bindNode(this.node);
        this.roomrule = {
            game: 0,
            jushu: 0,
            paixing: 0
        }
    },

    clickbtn: function (eve, customdata) {
        if (customdata === 'jushu0') {
            this.roomrule.jushu = 0;
        } else if (customdata === 'jushu1') {
            this.roomrule.jushu = 1;
        } else if (customdata === 'paixing0') {
            this.roomrule.paixing = 0;
        } else if (customdata === 'paixing1') {
            this.roomrule.paixing = 1;
        } else if (customdata === 'game0') {
            this.roomrule.game = 0;
        }
        cc.log(this.roomrule);
    },

    quit: function () { 
        this.node.destroy(true);
    },
});