cc.Class({
    extends: cc.Component,
    properties: {
        
    },

    onLoad: function () {
        this._obj = cc.Utils.bindNode(this.node);
        this.labnum = 0;
        this.clearlab();

        this.node.on('touchstart', function (event) {
            var boxnode = this._obj.bg._Node
            let box = boxnode.getBoundingBox();
            if (!box.contains(boxnode.convertToNodeSpaceAR(event.getLocation()))) {
                console.log("out the box");
                this.quit();
            }
        }.bind(this))
    },

    clickbtn: function (eve, customdata) { 
        if (customdata === 'clear') {
            this.labnum = 0;
            this.clearlab();
            return;
        } else if (customdata === 'back') {
            if (this.labnum === 0) {
                return;
            }
            this._obj.lab[(this.labnum)]._Label.string = '';
            this.labnum--;
            return;
        }
        if (this.labnum >= 6) {
            return;
        }
        this.labnum++;
        this._obj.lab[this.labnum]._Label.string = customdata;
        if (this.labnum >= 6) {
            cc.log('满了');
        }
    },

    clearlab: function () { 
        for (let i = 1; i < 7; i++){
            this._obj.lab[i]._Label.string = '';
        }
    },

    quit: function (){
        this.node.destroy(true);
    },
});