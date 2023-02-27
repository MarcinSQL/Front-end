//klasa opisujaca pojazd gracza
class Player extends Canvas {
    constructor(ctx, canvas) {
        super(ctx, canvas);

        //wielkosc pojazdu gracza
        this.playerWidth = 80;
        this.playerHeight = 80;

        this.playerX = this.canvas.width / 2 - this.playerWidth / 2; //wspolrzedna X pojazdu gracza
        this.playerY = this.canvas.height / 1.4; //wspolrzedna Y pojazdu gracza

        //informacje o obrazku pojazdu gracza
        this.shipImage = new Image();   //tworzymy obiekt obrazka
        this.shipImage.src = './img/bird.png';    //przypisujemy konkretny obrazek do obiektu shipImage
        
        //wspolrzedne pojedynczego statku w obrazku
        this.shipX = 0;
        this.shipY = 0;
        //wielkosc pojazda z obrazka
        this.shipWidth = 80;
        this.shipHeight = 80;
    }

    //rysowanie pojazdu gracza na planszy gry
    playerBirdDraw() {
        
        //TO TEZ DO ANIMACJI OBRAZKA
        /*
        if(this.shipX >= 560) {
            this.shipX = 0;
        }
        */
       
        this.ctx.drawImage(
            this.shipImage, 
            this.shipX, 
            this.shipY, 
            this.shipWidth, 
            this.shipHeight, 
            this.playerX, 
            this.playerY, 
            this.playerWidth, 
            this.playerHeight
        );
        
        //TO JUZ JEST DO ANIMACJI OBRAZKA A TEGO NIE ROBILEM
        //this.shipX += this.shipWidth;

    }
}