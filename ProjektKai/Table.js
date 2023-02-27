//klasa opisujaca plansze gry
class Table {   //extends Canvas uzywamy zeby dziedzyczyc
    constructor(){  //(ctx, canvas) zeby poprawnie odziedziczyc
        //super(canvas, ctx);
        this.c = new Canvas();  //tworze obiekt klasy Canvas i bede mogl teraz korzystac z pol tej Klasy (ctx, canvas)
    }

    //metoda rysowania planszy gry
    drawTable(){
        //this.ctx.fillStyle = '#999';
        //this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.c.ctx.fillStyle = '#999';
        this.c.ctx.fillRect(0, 0, this.c.canvas.width, this.c.canvas.height);
    }
}