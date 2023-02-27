//klasa opisujaca nasz element canvas
class Canvas{
    constructor(){
        this.canvas = document.querySelector('#canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = 900;
        this.canvas.height = 600;
    }
}