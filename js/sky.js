function Sky(option) {
    this.ctx = option.ctx;
    this.x = option.x;
    this.y = option.y;
    this.img = option.img;

    this.step = 2;
    this.w = option.img.width;

};


Sky.prototype = {
    constructor: Sky,
    drawSky: function() {
        this.x -= this.step;
        if (this.x <= -this.w) {
            this.x += this.w * 2;
        };
        this.ctx.drawImage(this.img, this.x, this.y);
    }
}