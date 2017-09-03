function Pipe(option) {
    this.ctx = option.ctx;
    this.topimg = option.topimg;
    this.downimg = option.downimg;
    this.x = option.x;
    this.setp = 2;
    this.w = option.topimg.width;
    this.h = option.topimg.height;
    this.topy = 0;
    this.bottony = 0;
    this.spec = 160;
    this.getY();

};
Pipe.prototype = {
    constructor: Pipe,
    drawpiep: function() {
        this.x -= this.setp;
        if (this.x <= -this.w * 3) {
            this.x = this.w * 3 * 5;
            this.getY();
        }

        this.ctx.drawImage(this.topimg, this.x, this.topy);
        this.ctx.rect(this.x, this.topy, this.w, this.h);
        this.ctx.drawImage(this.downimg, this.x, this.bottony);
        this.ctx.rect(this.x, this.bottony, this.w, this.h);

    },
    getY: function() {
        this.topy = -(Math.random() * 310 + 90);
        this.bottony = this.topy + this.h + this.spec;
    }

}