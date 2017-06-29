var canvasElement = document.getElementById('canvas');
var canvas = canvasElement.getContext('2d');

var Point = function(x,y) {
    this.x = x;
    this.y = y;
};

var B = new Point(0,500);
var C = new Point(500,500);
var A = new Point(250,500-(250*Math.sqrt(3)));

function Draw(A,B,C) {
    canvas.moveTo(A.x,A.y);
    canvas.lineTo(B.x,B.y);
    canvas.lineTo(C.x,C.y);
    canvas.lineTo(A.x,A.y)
    canvas.stroke();
}

Draw(this.A,this.B,this.C);

