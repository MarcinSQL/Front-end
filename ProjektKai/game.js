//uruchamianie/wywolywanie gry

//const game = new Game();    //tworze obiekt klasy Game
//game.startGame();


    //losowanie liczby z przedzialu <min, max>
    const getRandom = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };


const canvas = new Canvas();
const table = new Table();
const player = new Player();

lastTime = 0;
fps = 40;

const startGame = function (time){
    requestAnimationFrame(startGame);
    if(time - lastTime >= 1000 / fps) {
        lastTime = time;

        table.drawTable();
        player.playerBirdDraw();
        //player.playerShipMove();  //obciazajacy przegladarke sposob
    }
};

startGame();