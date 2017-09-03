function Brids(option) {
    this.ctx = option.ctx;
    this.birdsimg = option.img;
    this.canvasx = option.canvasx;
    this.canvasy = option.canvasy;

    this.index = 0;
    this.step = 0;
    this.birdSpeed = 0;
    this.g = 0.0003;
    this.maxSpeed = 0.5;
    this.maxAngle = 45;
};
Brids.prototype = {
    constructor: Brids,
    drawBrids: function(offsteTime) {
        var birdsw = this.birdsimg.width / 3;
        var birdsh = this.birdsimg.height;
        var birdsx = birdsw * this.index;
        var birdsy = 0;
        var distanceY = this.birdSpeed * offsteTime + offsteTime * offsteTime * this.g / 2;
        /*速度是越来越快的， 所以需要加上前面的速度基线*/
        this.birdSpeed = this.birdSpeed + this.g * offsteTime;
        /*设置画布的Y坐标值*/
        this.canvasy += distanceY;

        var currentAngle = this.birdSpeed * this.maxAngle / this.maxSpeed;
        if (currentAngle > this.maxAngle) {
            currentAngle = this.maxAngle;
        };

        ctx.save();
        ctx.translate(this.canvasx, this.canvasy);
        ctx.rotate(Math.PI / 180 * currentAngle);
        ctx.drawImage(this.birdsimg, birdsx, birdsy, birdsw, birdsh, -birdsw / 2, -birdsh / 2, birdsw, birdsh);
        ctx.restore();
        this.index++;
        if (this.index > 2) {
            this.index = 0;
        }
    }
}