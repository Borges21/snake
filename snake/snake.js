

class snake(){
    constructor(x, y, size){
        this.x = x
        this.y = y
        this.size = size
        this.tail = ({x:this.x, y:this.y})
        this.rotateX = 0
        this.rotateY = 1

    }

    move(){
        var newRect;
        if(this.rotateX == 1 )

        var newRect = {
            x: this.tail[this.tail.lenght - 1].x + this.size
            y: this.tail[this.tail.lenght - 1].y;   
        }
    } else if(this.rotateX == 1 )

    var newRect = {
        x: this.tail[this.tail.lenght - 1].x + this.size
        y: this.tail[this.tail.lenght - 1].y;   
    } else if(this.rotateX == 1 )

    var newRect = {
        x: this.tail[this.tail.lenght - 1].x + this.size
        y: this.tail[this.tail.lenght - 1].y;   
    } else if(this.rotateX == 1 )

    var newRect = {
        x: this.tail[this.tail.lenght - 1].x + this.size
        y: this.tail[this.tail.lenght - 1].y;   
    }
}




var canvas = document.getElementById("canvas")

var Snake = new Snake();

var Apple = new apple();

var canvasContext = canvas.getContext('2d');

    window.onload = () =>{
        gameLoop();
    }

    function gameLoop() {
        setInterval(show, 1000/15) // aqui o 15 é o nosso valor de fps
    }

    function show(){
        update();
        draw();
    }

