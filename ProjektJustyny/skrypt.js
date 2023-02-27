// var pytania = [{
//     'pytanie': 'Gdzie Nowy Rok świętuje się najwcześniej?',
//     'a1': 'na Alasce',
//     'a2': 'w Australii',
//     'a3': 'na Grenlandii',
//     'a4': 'w Ghanie',
//     'poprawna_o': 'w Australii',
//     'nie': 'false'
// }, {
//     'pytanie': 'Co krótkiego ma kłamstwo?',
//     'a1': 'pamięć',
//     'a2': 'metę',
//     'a3': 'nogi',
//     'a4': 'w wzrok',
//     'poprawna_o': 'nogi',
//     'nie': 'false'
// }, {
//     'pytanie': 'Morze Martwe rozsławiło wysokie stężenie tego związku chemicznego.',
//     'a1': 'HCl',
//     'a2': 'CO',
//     'a3': 'NaOH',
//     'a4': 'NaCl',
//     'poprawna_o': 'NaCl',
//     'nie': 'false'
// }, {
//     'pytanie': 'W którym z filmów możemy podziwiać Marilyn Monroe?',
//     'a1': 'Diabeł ubiera się u Prady',
//     'a2': 'Monster',
//     'a3': 'Mężczyźni wolą blondynki',
//     'a4': 'Leon zawodowiec',
//     'poprawna_o': 'Mężczyźni wolą blondynki',
//     'nie': 'false'
// }, {
//     'pytanie': 'Ile to jest 1111 razy 1111, jeśli 1 razy 1 to 1, a 11 razy 11',
//     'a1': '111111111',
//     'a2': '1234321',
//     'a3': '12321',
//     'a4': '123454321',
//     'poprawna_o': '1234321',
//     'nie': 'false'
// }, {
//     'pytanie': 'Opłata reprograficzna dotyczy: ',
//     'a1': 'kopiowanych ołówków',
//     'a2': 'kopiowanych uszu',
//     'a3': 'papieru A4',
//     'a4': 'papieru A1',
//     'poprawna_o': 'papieru A4',
//     'nie': 'false'
// },];

// document.addEventListener('click', function wyw() {
//     wez_nr();
//     zmian_pyt();
//     buttons()
// })

// let numer = 0;
// let wynik = 0

// var lewko = document.querySelector('.lewo')
// var pyt = lewko.querySelector('.pytanie')
// var odpo = lewko.querySelectorAll('.odpowiedz')
// const wyg = lewko.querySelector('.wygrana')
// let kwo = wyg.querySelectorAll('.kwota')

// function zmian_pyt() {
//     wez_nr();
//     if(pytania[numer].nie === true){
//         zmian_pyt();
//     } else {
//         pytania[numer].nie = true;
//         pyt.textContent = pytania
//         [numer].pytanie
//         for (i=0; i<odpo.length; i++){
//             odpo[i].textContent = pytania[numer][`odpowiedz${i}`]
//             odpo[i].value = pytania [numer] [`odpowiedz${i}`]
//         }
//     }
// }

// function wygrana(){
//     const wyg = ['0', '500 zł', '1000 zł', '2000 zł', '5000 zł', '10 000 zł', '20 000 zł', '40 000 zł', '75 000 zł', '125 000 zł', '250 000 zł', '500 000 zł', '1 000 000 zł']
//     wynik++;
//     this.classList.remove('aktyw_odpowiedz')
//     aktyw_buttons();
// }

// function przegrana() {
//     tab.classList.remove('zla_odp')
//     usun_buttons();
//     reset();
//     pyt.innerHTML='rtvgbjfheubrbkdjn'
// }













//Tu masz zmienne
var bylo = [];
var poprawnaOdpowiedz = '';
var randomowaLiczba = 0;
var punkt = 0;

const btn1 = document.querySelector('.a1');
const btn2 = document.querySelector('.a2');
const btn3 = document.querySelector('.a3');
const btn4 = document.querySelector('.a4');


//To jest do wypelnienia tablicy zeby wszystkie elementy mialy "false" domyslnie
function wypelnienieTablicy(){
    for(let i=0; i<20; i++){
        bylo[i] = false;
    }
}

wypelnienieTablicy();

//Tworzy randomowa liczbe od 1 do 10 ale mozesz sobie zmienic na spokojnie zakres zmieniajac ta 10 w funkcji
function randomizer(){
    const warunek = Math.floor(Math.random() * 10) + 1;
    return warunek;
}

// console.log( randomowaLiczba );


//Glowna funkcja programu
function zmian_pyt(){
    //przydzielamy randomowa liczbe do zmiennej
    randomowaLiczba = randomizer();
    // console.log(randomowaLiczba + ' randomowaLiczba w pierwszym miejscu');

    //zmodyfikowany twoj sprawdzacz ;P
    if(bylo[randomowaLiczba - 1] == true){
        // console.log(randomowaLiczba + ' randomowaLiczba');
        // console.log(bylo[randomowaLiczba - 1] + ' Tablica');
        // console.log(' randomowaLiczba po zmianie');
        zmian_pyt();
    }
    else{
        switch(randomowaLiczba){
            case 1:
                $('.pytanie').html('Gdzie Nowy Rok świętuje się najwcześniej?');
                $('.a1').html('na Alasce');
                $('.a2').html('w Australii');
                $('.a3').html('na Grenlandii');
                $('.a4').html('w Ghanie');
                poprawnaOdpowiedz = 'w Australii';
                bylo[0] = true;
                break;
            case 2:
                $('.pytanie').html('Co krótkiego ma kłamstwo?');
                $('.a1').html('pamięć');
                $('.a2').html('metę');
                $('.a3').html('nogi');
                $('.a4').html('wzrok');
                poprawnaOdpowiedz = 'nogi';
                bylo[1] = true;
                break;
            case 3:
                $('.pytanie').html('Morze Martwe rozsławiło wysokie stężenie tego związku chemicznego.');
                $('.a1').html('HCl');
                $('.a2').html('CO');
                $('.a3').html('NaOH');
                $('.a4').html('NaCl');
                poprawnaOdpowiedz = 'NaCl';
                bylo[2] = true;
                break;
            case 4:
                $('.pytanie').html('W którym z filmów możemy podziwiać Marilyn Monroe?');
                $('.a1').html('Diabeł ubiera się u Prady');
                $('.a2').html('Monster');
                $('.a3').html('Mężczyźni wolą blondynki');
                $('.a4').html('Leon zawodowiec');
                poprawnaOdpowiedz = 'Mężczyźni wolą blondynki';
                bylo[3] = true;
                break;
            case 5:
                $('.pytanie').html('Ile to jest 1111 razy 1111, jeśli 1 razy 1 to 1, a 11 razy 11');
                $('.a1').html('111111111');
                $('.a2').html('1234321');
                $('.a3').html('12321');
                $('.a4').html('123454321');
                poprawnaOdpowiedz = '1234321';
                bylo[4] = true;
                break;
            case 6:
                $('.pytanie').html('Opłata reprograficzna dotyczy: ');
                $('.a1').html('kopiowanych ołówków');
                $('.a2').html('kopiowanych uszu');
                $('.a3').html('papieru A4');
                $('.a4').html('papieru A1');
                poprawnaOdpowiedz = 'papieru A4';
                bylo[5] = true;
                break;
            case 7:
                $('.pytanie').html('abc7');
                $('.a1').html('a');
                $('.a2').html('b');
                $('.a3').html('c');
                $('.a4').html('d');
                poprawnaOdpowiedz = 'c';
                bylo[6] = true;
                break;
            case 8:
                $('.pytanie').html('abc8');
                $('.a1').html('a');
                $('.a2').html('b');
                $('.a3').html('c');
                $('.a4').html('d');
                poprawnaOdpowiedz = 'c';
                bylo[7] = true;
                break;
            case 9:
                $('.pytanie').html('abc9');
                $('.a1').html('a');
                $('.a2').html('b');
                $('.a3').html('c');
                $('.a4').html('d');
                poprawnaOdpowiedz = 'c';
                bylo[8] = true;
                break;
            case 10:
                $('.pytanie').html('abc10');
                $('.a1').html('a');
                $('.a2').html('b');
                $('.a3').html('c');
                $('.a4').html('d');
                poprawnaOdpowiedz = 'c';
                bylo[9] = true;
                break;
        }
    }
}

//Wywolanie funkcji BARDZO WAZNE ZEBY TO BYLO TUTAJ
zmian_pyt();

//A tutaj te przyciski, sama wiesz o co chodzi
btn1.addEventListener('click', function(){
    if(btn1.textContent == poprawnaOdpowiedz){
        punkt++;
        $('.wygrana').children(".kwota:nth-child("+ punkt +")").addClass('zaliczone');
        zmian_pyt();
    }
    else if(btn1.textContent !== poprawnaOdpowiedz){
        $('.pytanie').html('Przegrales!');
    }
})
btn2.addEventListener('click', function(){
    if(btn2.textContent == poprawnaOdpowiedz){
        punkt++;
        $('.wygrana').children(".kwota:nth-child("+ punkt +")").addClass('zaliczone');
        zmian_pyt();
    }
    else if(btn2.textContent !== poprawnaOdpowiedz){
        $('.pytanie').html('Przegrales!');
    }
})
btn3.addEventListener('click', function(){
    if(btn3.textContent == poprawnaOdpowiedz){
        punkt++;
        $('.wygrana').children(".kwota:nth-child("+ punkt +")").addClass('zaliczone');
        zmian_pyt();
    }
    else if(btn3.textContent !== poprawnaOdpowiedz){
        $('.pytanie').html('Przegrales!');
    }
})
btn4.addEventListener('click', function(){
    if(btn4.textContent == poprawnaOdpowiedz){
        punkt++;
        $('.wygrana').children(".kwota:nth-child("+ punkt +")").addClass('zaliczone');
        zmian_pyt();
    }
    else if(btn4.textContent !== poprawnaOdpowiedz){
        $('.pytanie').html('Przegrales!');
    }
})