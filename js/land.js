function Land(option) {
    this.ctx = option.ctx;
    this.landimg = option.landimg;
    this.landx = option.landx;
    this.landy = option.landy;
    this.imgw = option.landimg.width;
    this.step = 2;


};
Land.prototype = {
    constructor: Land,
    drawland: function() {
        this.landx -= this.step;
        if (this.landx <= -this.imgw) {
            this.landx = this.imgw * 3;
        }
        this.ctx.drawImage(this.landimg, this.landx, this.landy);

    }
}