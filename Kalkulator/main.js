 //Animacja menu
 $('.rodzaj_rozwiniecie').slideUp(0);
 $('.style_rozwiniecie').slideUp(0);
 $('.autor_rozwiniecie').slideUp(0);

 $('.rodzaj').on('click', function(){
     if($('.rodzaj_rozwiniecie').is(":hidden")){
         if($('.style_rozwiniecie').is(":visible") || $('.autor_rozwiniecie').is(":visible")){
             $('.style_rozwiniecie').slideUp(800);
             $('.autor_rozwiniecie').slideUp(800);
         }
         $('.rodzaj_rozwiniecie').css({"visibility" : "visible"});
         $('.rodzaj_rozwiniecie').slideDown(800);
         $('.border').css({"z-index" : "-1"});
     }
     else if($('.rodzaj_rozwiniecie').is(":visible")){
         $('.rodzaj_rozwiniecie').slideUp(800);
         $('.rodzaj_rozwiniecie').css({"visibility" : "visible"});
         if($('.style_rozwiniecie').is(":visible") || $('.autor_rozwiniecie').is(":visible")) return;
         else{
             $('.border').css({"z-index" : "0"});
         }    
     }
 })
 $('.style').on('click', function(){
     if($('.style_rozwiniecie').is(":hidden")){
         if($('.rodzaj_rozwiniecie').is(":visible") || $('.autor_rozwiniecie').is(":visible")){
             $('.rodzaj_rozwiniecie').slideUp(800);
             $('.autor_rozwiniecie').slideUp(800);
         }
         $('.style_rozwiniecie').css({"visibility" : "visible"});
         $('.style_rozwiniecie').slideDown(800);
         $('.border').css({"z-index" : "-1"});
     }
     else if($('.style_rozwiniecie').is(":visible")){
         $('.style_rozwiniecie').slideUp(800);
         $('.style_rozwiniecie').css({"visibility" : "visible"});
         if($('.rodzaj_rozwiniecie').is(":visible") || $('.autor_rozwiniecie').is(":visible")) return;
         else{
             $('.border').css({"z-index" : "0"});
         }
     }
 })
 $('.autor').on('click', function(){
     if($('.autor_rozwiniecie').is(":hidden")){
         if($('.rodzaj_rozwiniecie').is(":visible") || $('.style_rozwiniecie').is(":visible")){
             $('.rodzaj_rozwiniecie').slideUp(800);
             $('.style_rozwiniecie').slideUp(800);
         }
         $('.autor_rozwiniecie').css({"visibility" : "visible"});
         $('.autor_rozwiniecie').slideDown(800);
         $('.border').css({"z-index" : "-1"});
     }
     else if($('.autor_rozwiniecie').is(":visible")){
         $('.autor_rozwiniecie').slideUp(800);
         $('.autor_rozwiniecie').css({"visibility" : "visible"});
         if($('.rodzaj_rozwiniecie').is(":visible") || $('.style_rozwiniecie').is(":visible")) return;
         else{
             $('.border').css({"z-index" : "0"});
         }
     }
 })

 //Zmiana styli
 $('.domyslny').on('click', function(){
    $('.obramowanie_kalkulatora').unbind();
    
    $('.obramowanie_kalkulatora').addClass('kalkulator');

    $('body').removeClass('bodyAlt2');
    $('.nav').removeClass('navAlt2');
    $('body').removeClass('navAlt2');
    $('.pokazywanie').removeClass('pokazywanieAlt2');
    $('.border').removeClass('borderAlt2');
    $('.umieszczenie').removeClass('navAlt2');

    $('.wynikowe').removeClass('wynikoweAlt2');
    $('.dopiski').removeClass('dopiskiAlt2');

    $('body').removeClass('bodyAlt3');
    $('.nav').removeClass('navAlt3');
    $('body').removeClass('navAlt3');
    $('.umieszczenie').removeClass('navAlt3');
    $('.pokazywanie').removeClass('pokazywanieAlt3');
    $('.border').removeClass('borderAlt3');
    $('.umieszczenie').removeClass('navAlt3');

    $('body').removeClass('bodyAlt4');
    $('.nav').removeClass('navAlt4');
    $('body').removeClass('navAlt4');
    $('.pokazywanie').removeClass('pokazywanieAlt4');
    $('.border').removeClass('borderAlt4');
    $('.umieszczenie').removeClass('navAlt4');
    $('.wynikowe').removeClass('wynikoweAlt4');
    $('.dopiski').removeClass('dopiskiAlt4');

    $('.poleAlt2').addClass('pole');
    $('.pole_znakuAlt2').addClass('pole_znaku');
    $('.pole_wynikuAlt2').addClass('pole_wyniku');

    $('.poleAlt3').addClass('pole');
    $('.pole_znakuAlt3').addClass('pole_znaku');
    $('.pole_wynikuAlt3').addClass('pole_wyniku');

    $('.poleAlt4').addClass('pole');
    $('.pole_znakuAlt4').addClass('pole_znaku');
    $('.pole_wynikuAlt4').addClass('pole_wyniku');

    $('.poleAlt2').removeClass('poleAlt2');
    $('.pole_znakuAlt2').removeClass('pole_znakuAlt2');
    $('.pole_wynikuAlt2').removeClass('pole_wynikuAlt2');

    $('.poleAlt3').removeClass('poleAlt3');
    $('.pole_znakuAlt3').removeClass('pole_znakuAlt3');
    $('.pole_wynikuAlt3').removeClass('pole_wynikuAlt3');

    $('.poleAlt4').removeClass('poleAlt4');
    $('.pole_znakuAlt4').removeClass('pole_znakuAlt4');
    $('.pole_wynikuAlt4').removeClass('pole_wynikuAlt4');
 })

 $('.zabawka').on('click', function(){
    $('.obramowanie_kalkulatora').unbind();

    $('.obramowanie_kalkulatora').removeClass('kalkulator');

    $('.nav').removeClass('navAlt3');
    $('body').removeClass('navAlt3');
    $('.umieszczenie').removeClass('navAlt3');

    $('body').removeClass('bodyAlt3');
    $('.nav').removeClass('navAlt3');
    $('body').removeClass('navAlt3');
    $('.pokazywanie').removeClass('pokazywanieAlt3');
    $('.border').removeClass('borderAlt3');
    $('.umieszczenie').removeClass('navAlt3');
    $('.wynikowe').removeClass('wynikoweAlt3');
    $('.dopiski').removeClass('dopiskiAlt3');

    $('body').removeClass('bodyAlt4');
    $('.nav').removeClass('navAlt4');
    $('body').removeClass('navAlt4');
    $('.pokazywanie').removeClass('pokazywanieAlt4');
    $('.border').removeClass('borderAlt4');
    $('.umieszczenie').removeClass('navAlt4');
    $('.wynikowe').removeClass('wynikoweAlt4');
    $('.dopiski').removeClass('dopiskiAlt4');

    $('.pole').removeClass('poleAlt3');
    

    $('body').addClass('bodyAlt2');
    $('.nav').addClass('navAlt2');
    $('body').addClass('navAlt2');
    $('.pokazywanie').addClass('pokazywanieAlt2');
    $('.border').addClass('borderAlt2');
    $('.umieszczenie').addClass('navAlt2');
    $('.wynikowe').addClass('wynikoweAlt2');
    $('.dopiski').addClass('dopiskiAlt2');

    $('.pole').addClass('poleAlt2');
    $('.pole_znaku').addClass('pole_znakuAlt2');
    $('.pole_wyniku').addClass('pole_wynikuAlt2');

    $('.poleAlt3').addClass('poleAlt2');
    $('.pole_znakuAlt3').addClass('pole_znakuAlt2');
    $('.pole_wynikuAlt3').addClass('pole_wynikuAlt2');

    $('.poleAlt4').addClass('poleAlt2');
    $('.pole_znakuAlt4').addClass('pole_znakuAlt2');
    $('.pole_wynikuAlt4').addClass('pole_wynikuAlt2');

    $('.poleAlt3').removeClass('poleAlt3');
    $('.pole_znakuAlt3').removeClass('pole_znakuAlt3');
    $('.pole_wynikuAlt3').removeClass('pole_wynikuAlt3');

    $('.poleAlt4').removeClass('poleAlt4');
    $('.pole_znakuAlt4').removeClass('pole_znakuAlt4');
    $('.pole_wynikuAlt4').removeClass('pole_wynikuAlt4');

    $('.poleAlt2').removeClass('pole');
    $('.pole_znakuAlt2').removeClass('pole_znaku');
    $('.pole_wynikuAlt2').removeClass('pole_wyniku');
 })

 $('.cyfrowy').on('click', function(){
    $('.obramowanie_kalkulatora').unbind();

    $('.nav').removeClass('navAlt2');
    $('body').removeClass('navAlt2');
    $('.umieszczenie').removeClass('navAlt2');
    $('.border').removeClass('borderAlt2');
    $('.pokazywanie').removeClass('pokazywanieAlt2');

    $('body').addClass('bodyAlt3');
    $('.nav').addClass('navAlt3');
    $('body').addClass('navAlt3');
    $('.pokazywanie').addClass('pokazywanieAlt3');
    $('.border').addClass('borderAlt3');
    $('.umieszczenie').addClass('navAlt3');
    $('.wynikowe').addClass('wynikoweAlt3');
    $('.dopiski').addClass('dopiskiAlt3');

    $('body').removeClass('bodyAlt4');
    $('.nav').removeClass('navAlt4');
    $('body').removeClass('navAlt4');
    $('.pokazywanie').removeClass('pokazywanieAlt4');
    $('.border').removeClass('borderAlt4');
    $('.umieszczenie').removeClass('navAlt4');
    $('.wynikowe').removeClass('wynikoweAlt4');
    $('.dopiski').removeClass('dopiskiAlt4');

    $('.pole').addClass('poleAlt3');
    $('.pole_znaku').addClass('pole_znakuAlt3');
    $('.pole_wyniku').addClass('pole_wynikuAlt3');

    $('.poleAlt2').addClass('poleAlt3');
    $('.pole_znakuAlt2').addClass('pole_znakuAlt3');
    $('.pole_wynikuAlt2').addClass('pole_wynikuAlt3');

    $('.poleAlt4').addClass('poleAlt3');
    $('.pole_znakuAlt4').addClass('pole_znakuAlt3');
    $('.pole_wynikuAlt4').addClass('pole_wynikuAlt3');

    $('.poleAlt4').removeClass('poleAlt4');
    $('.pole_znakuAlt4').removeClass('pole_znakuAlt4');
    $('.pole_wynikuAlt4').removeClass('pole_wynikuAlt4');

    $('.poleAlt3').removeClass('pole');
    $('.pole_znakuAlt3').removeClass('pole_znaku');
    $('.pole_wynikuAlt3').removeClass('pole_wyniku');


 })

 $('.woda').on('click', function(){
    $('.obramowanie_kalkulatora').removeClass('kalkulator');
        
        $('.nav').removeClass('navAlt2');
        $('body').removeClass('navAlt2');
        $('.umieszczenie').removeClass('navAlt2');
        $('.border').removeClass('borderAlt2');
        $('.pokazywanie').removeClass('pokazywanieAlt2');

        $('body').removeClass('bodyAlt3');
        $('.nav').removeClass('navAlt3');
        $('body').removeClass('navAlt3');
        $('.pokazywanie').removeClass('pokazywanieAlt3');
        $('.border').removeClass('borderAlt3');
        $('.umieszczenie').removeClass('navAlt3');
        $('.wynikowe').removeClass('wynikoweAlt3');
        $('.dopiski').removeClass('dopiskiAlt3');
        

        $('body').addClass('bodyAlt4');
        $('.nav').addClass('navAlt4');
        $('body').addClass('navAlt4');
        $('.pokazywanie').addClass('pokazywanieAlt4');
        $('.border').addClass('borderAlt4');
        $('.umieszczenie').addClass('navAlt4');
        $('.wynikowe').addClass('wynikoweAlt4');
        $('.dopiski').addClass('dopiskiAlt4');

        $('.pole').addClass('poleAlt4');
        $('.pole_znaku').addClass('pole_znakuAlt4');
        $('.pole_wyniku').addClass('pole_wynikuAlt4');

        $('.poleAlt2').addClass('poleAlt4');
        $('.pole_znakuAlt2').addClass('pole_znakuAlt4');
        $('.pole_wynikuAlt2').addClass('pole_wynikuAlt4');

        $('.poleAlt3').addClass('poleAlt4');
        $('.pole_znakuAlt3').addClass('pole_znakuAlt4');
        $('.pole_wynikuAlt3').addClass('pole_wynikuAlt4');

        $('.poleAlt2').removeClass('poleAlt2');
        $('.pole_znakuAlt2').removeClass('pole_znakuAlt2');
        $('.pole_wynikuAlt2').removeClass('pole_wynikuAlt2');

        $('.poleAlt3').removeClass('poleAlt3');
        $('.pole_znakuAlt3').removeClass('pole_znakuAlt3');
        $('.pole_wynikuAlt3').removeClass('pole_wynikuAlt3');

        $('.poleAlt4').removeClass('pole');
        $('.pole_znakuAlt4').removeClass('pole_znaku');
        $('.pole_wynikuAlt4').removeClass('pole_wyniku');

        $('.obramowanie_kalkulatora').on('click', function(e){
            // console.log(e.clientX + 'x');   //wspolrzedne x myszki
            // console.log(e.clientY + 'y');   //wspolrzedne y myszki

            // console.log(e.target.offsetLeft + 'left');  //odleglosc od lewej krawedzi do buttona
            // console.log(e.target.offsetTop + 'top');    //odleglosc od gornej krawedzi do buttona

            // console.log(e.target);  //target kliku

            let x = e.clientX;
            let y = e.clientY;

            const newSpan = document.createElement('span');

            newSpan.style.left =  x + 'px';
            newSpan.style.top = y + 'px';

            this.appendChild(newSpan);
        })
 })

 //FUNKCJONALNOSC KALKULATORA

 //Pobranie wyswietlacza
 const wyswietlacz = document.querySelector('.wynikowe')
 const dodatkowe = document.querySelector('.dopiski')

 //Pobieranie cyfr
 const zero = document.querySelector('#cyfra0')
 const jeden = document.querySelector('#cyfra1')
 const dwa = document.querySelector('#cyfra2')
 const trzy = document.querySelector('#cyfra3')
 const cztery = document.querySelector('#cyfra4')
 const piec = document.querySelector('#cyfra5')
 const szesc = document.querySelector('#cyfra6')
 const siedem = document.querySelector('#cyfra7')
 const osiem = document.querySelector('#cyfra8')
 const dziewiec = document.querySelector('#cyfra9')

 //Pobieranie znakow
 const przecinek = document.querySelector('#przecinek')
 const negate = document.querySelector('#negate')
 const dodawanie = document.querySelector('#dodawanie')
 const odejmowanie = document.querySelector('#odejmowanie')
 const mnozenie = document.querySelector('#mnozenie')
 const dzielenie = document.querySelector('#dzielenie')
 const pierwiastek = document.querySelector('#pierwiastek')
 const doKwadratu = document.querySelector('#do_kwadratu')
 const jedenNad = document.querySelector('#jeden_nad')
 const cofanie = document.querySelector('#cofanie')
 const C = document.querySelector('#C')
 const CE = document.querySelector('#CE')
 const procent = document.querySelector('#procent')
 const wynik = document.querySelector('#wynik')

 //Zmienne pomocnicze
 var znaczekPoDodatkowym = false;
 var coRobimy = 0;
 var liczbaWDodatkowym = 0;
 var bufor = 0;
 var zamiennikLiczby = false;

 function wynikowe(){
    if(znaczekPoDodatkowym === true){
        var dod = dodatkowe.textContent.slice(0, -1);
        switch(coRobimy){
            //dodawanie
            case 1:
                dodatkowe.textContent = '';
                wyswietlacz.innerHTML = (Number(dod) + Number(wyswietlacz.textContent));
                
                // //////////////////////////////////////////////
                // ////  OGRANICZENIE LICZB DOPRACOWAC     //////
                // //////////////////////////////////////////////
                
                // if(wyswietlacz.textContent.length >= 10){
                //     for(var i=0; i<= wyswietlacz.textContent.length - 10; i++) i++;
                //     wyswietlacz.textContent.slice(10, -i);
                // }
                break;
            //odejmowanie
            case 2:
                dodatkowe.textContent = '';
                wyswietlacz.innerHTML = (Number(dod) - Number(wyswietlacz.textContent));
                if(wyswietlacz.textContent.length >= 10){
                    for(var i=0; i<= wyswietlacz.textContent.length - 10; i++) i++;
                    wyswietlacz.textContent.slice(10, 10000);
                }
                break;
            //mnozenie
            case 3:
                dodatkowe.textContent = '';
                wyswietlacz.innerHTML = (Number(dod) * Number(wyswietlacz.textContent));
                if(wyswietlacz.textContent.length >= 10){
                    for(var i=0; i<= wyswietlacz.textContent.length; i++) i++;
                    wyswietlacz.textContent.slice(10, -i);
                }
                break;
            //dzielenie
            case 4:
                dodatkowe.textContent = '';
                wyswietlacz.innerHTML = (Number(dod) / Number(wyswietlacz.textContent));
                if(wyswietlacz.textContent.length >= 10){
                    for(var i=0; i<= wyswietlacz.textContent.length - 10; i++) i++;
                    wyswietlacz.textContent.slice(10, 654646464);
                }
                break;
         }
    }
    else if(znaczekPoDodatkowym == false){
        switch(coRobimy){
            //dodawanie
            case 1:
                dodatkowe.textContent = bufor + '+';
                break;
            //odejmowanie
            case 2:
                dodatkowe.textContent = bufor + '-';
                break;
            //mnozenie
            case 3:
                dodatkowe.textContent = bufor + '*';
                break;
            //dzielenie
            case 4:
                dodatkowe.textContent = bufor + '/';
                break;
        }
    }
 }

 //Wyswietlanie cyfr
 zero.addEventListener('click', function(){
     wyswietlacz.innerHTML += '0';
     if(zamiennikLiczby == true){
        wyswietlacz.innerHTML = '0';
        zamiennikLiczby = false;
     }
 })
 jeden.addEventListener('click', function(){
     wyswietlacz.innerHTML += '1';
     if(zamiennikLiczby == true){
        wyswietlacz.innerHTML = '1';
        zamiennikLiczby = false;
     }
 })
 dwa.addEventListener('click', function(){
     wyswietlacz.innerHTML += '2';
     if(zamiennikLiczby == true){
        wyswietlacz.innerHTML = '2';
        zamiennikLiczby = false;
     }
 })
 trzy.addEventListener('click', function(){
     wyswietlacz.innerHTML += '3';
     if(zamiennikLiczby == true){
        wyswietlacz.innerHTML = '3';
        zamiennikLiczby = false;
     }
 })
 cztery.addEventListener('click', function(){
     wyswietlacz.innerHTML += '4';
     if(zamiennikLiczby == true){
        wyswietlacz.innerHTML = '4';
        zamiennikLiczby = false;
     }
 })
 piec.addEventListener('click', function(){
     wyswietlacz.innerHTML += '5';
     if(zamiennikLiczby == true){
        wyswietlacz.innerHTML = '5';
        zamiennikLiczby = false;
     }
 })
 szesc.addEventListener('click', function(){
     wyswietlacz.innerHTML += '6';
     if(zamiennikLiczby == true){
        wyswietlacz.innerHTML = '6';
        zamiennikLiczby = false;
     }
 })
 siedem.addEventListener('click', function(){
     wyswietlacz.innerHTML += '7';
     if(zamiennikLiczby == true){
        wyswietlacz.innerHTML = '7';
        zamiennikLiczby = false;
     }
 })
 osiem.addEventListener('click', function(){
     wyswietlacz.innerHTML += '8';
     if(zamiennikLiczby == true){
        wyswietlacz.innerHTML = '8';
        zamiennikLiczby = false;
     }
 })
 dziewiec.addEventListener('click', function(){
     wyswietlacz.innerHTML += '9';
     if(zamiennikLiczby == true){
        wyswietlacz.innerHTML = '9';
        zamiennikLiczby = false;
     }
 })

 //Wyswietlanie znakow
 przecinek.addEventListener('click', function(){
     if(wyswietlacz.textContent.includes('.')) return;
     else if(wyswietlacz.innerHTML === '') return wyswietlacz.innerHTML = '0.';
     else{
         wyswietlacz.innerHTML += '.';
     }
     
 })
 dodawanie.addEventListener('click', function(){
    // znaczekPoDodatkowym = true;
    coRobimy = 1;
    if(dodatkowe.textContent !== "" && wyswietlacz.textContent !== ""){
        wynikowe();
        znaczekPoDodatkowym = true;
        dodatkowe.innerHTML = wyswietlacz.innerHTML + '+';
        zamiennikLiczby = true;
        // wyswietlacz.innerHTML = '';
    }
    else if(wyswietlacz.textContent !== ""){
        znaczekPoDodatkowym = true;
        dodatkowe.innerHTML = wyswietlacz.innerHTML + '+';
        zamiennikLiczby = true;
        // wyswietlacz.innerHTML = '';
    }
    else if(dodatkowe.textContent !== "" && wyswietlacz.textContent === '' && znaczekPoDodatkowym === true){
        znaczekPoDodatkowym = true;
        var skr = dodatkowe.textContent.slice(0, -1);
        dodatkowe.innerHTML = skr + '+';
    }
 })
 odejmowanie.addEventListener('click', function(){
    // znaczekPoDodatkowym = true;
    coRobimy = 2;
    if(dodatkowe.textContent !== "" && wyswietlacz.textContent !== ""){
        wynikowe();
        znaczekPoDodatkowym = true;
        dodatkowe.innerHTML = wyswietlacz.innerHTML + '-';
        zamiennikLiczby = true;
        // wyswietlacz.innerHTML = '';  
    }
    else if(wyswietlacz.textContent !== ""){
        znaczekPoDodatkowym = true;
        dodatkowe.innerHTML = wyswietlacz.innerHTML + '-';
        zamiennikLiczby = true;
        // wyswietlacz.innerHTML = '';  
    }
    else if(dodatkowe.textContent !== "" && wyswietlacz.textContent === '' && znaczekPoDodatkowym === true){
        znaczekPoDodatkowym = true;
        var skr = dodatkowe.textContent.slice(0, -1);
        dodatkowe.innerHTML = skr + '-';
    }
 })
 mnozenie.addEventListener('click', function(){
    // znaczekPoDodatkowym = true;
    coRobimy = 3;
    if(dodatkowe.textContent !== "" && wyswietlacz.textContent !== ""){
        wynikowe();
        znaczekPoDodatkowym = true;
        dodatkowe.innerHTML = wyswietlacz.innerHTML + '*';
        zamiennikLiczby = true;
        // wyswietlacz.innerHTML = '';
    }
    else if(wyswietlacz.textContent !== ""){
        znaczekPoDodatkowym = true;
        dodatkowe.innerHTML = wyswietlacz.innerHTML + '*';
        zamiennikLiczby = true;
        // wyswietlacz.innerHTML = '';
    }
    else if(dodatkowe.textContent !== "" && wyswietlacz.textContent === '' && znaczekPoDodatkowym === true){
        znaczekPoDodatkowym = true;
        var skr = dodatkowe.textContent.slice(0, -1);
        dodatkowe.innerHTML = skr + '*';
    }
 })
 dzielenie.addEventListener('click', function(){
    // znaczekPoDodatkowym = true;
    coRobimy = 4;
    if(dodatkowe.textContent !== "" && wyswietlacz.textContent !== ""){
        wynikowe();
        znaczekPoDodatkowym = true;
        dodatkowe.innerHTML = wyswietlacz.innerHTML + '/';
        zamiennikLiczby = true;
        // wyswietlacz.innerHTML = '';
    }
    else if(wyswietlacz.textContent !== ""){
        znaczekPoDodatkowym = true;
        dodatkowe.innerHTML = wyswietlacz.innerHTML + '/';
        zamiennikLiczby = true;
        // wyswietlacz.innerHTML = '';
    }
    else if(dodatkowe.textContent !== "" && wyswietlacz.textContent === '' && znaczekPoDodatkowym === true){
        znaczekPoDodatkowym = true;
        var skr = dodatkowe.textContent.slice(0, -1);
        dodatkowe.innerHTML = skr + '/';
    }
 })
 negate.addEventListener('click', function(){
    if(dodatkowe.textContent.includes('negate')){
        bufor = wyswietlacz.textContent;
        liczbaWDodatkowym = Number(wyswietlacz.textContent);
        dodatkowe.innerHTML = 'negate(' + wyswietlacz.innerHTML + ')';
        wyswietlacz.innerHTML = liczbaWDodatkowym * -1;
    }
    else if(dodatkowe.textContent !== "" && wyswietlacz.textContent !== ""){
        wynikowe();
        bufor = wyswietlacz.textContent;
        liczbaWDodatkowym = Number(wyswietlacz.textContent);
        dodatkowe.innerHTML = 'negate(' + wyswietlacz.innerHTML + ')';
        wyswietlacz.innerHTML = liczbaWDodatkowym * -1;
    }
    else if(wyswietlacz.textContent !== ""){
        bufor = wyswietlacz.textContent;
        liczbaWDodatkowym = Number(wyswietlacz.textContent);
        dodatkowe.innerHTML = 'negate(' + wyswietlacz.innerHTML + ')';
        wyswietlacz.innerHTML = liczbaWDodatkowym * -1;
    }
 })
 pierwiastek.addEventListener('click', function(){
    if(wyswietlacz.textContent !== ""){
        liczbaWDodatkowym = Number(wyswietlacz.textContent);
        dodatkowe.innerHTML = '√(' + wyswietlacz.innerHTML + ')';
        wyswietlacz.innerHTML = Math.sqrt(Number(wyswietlacz.textContent));
        bufor = wyswietlacz.textContent;
    } 
 })
 doKwadratu.addEventListener('click', function(){
    if(wyswietlacz.textContent !== ""){
        dodatkowe.innerHTML = 'sqr(' + wyswietlacz.innerHTML + ')';
        wyswietlacz.innerHTML = (Number(wyswietlacz.textContent) * Number(wyswietlacz.textContent));
        bufor = wyswietlacz.textContent;
    }
 })
 jedenNad.addEventListener('click', function(){
    if(wyswietlacz.textContent !== ""){
        dodatkowe.innerHTML = '1/(' + wyswietlacz.innerHTML + ')';
        wyswietlacz.innerHTML = (1 / Number(wyswietlacz.textContent));
        bufor = wyswietlacz.textContent;
    }
 })
 cofanie.addEventListener('click', function(){
    var skr = wyswietlacz.textContent.slice(0, -1);
     wyswietlacz.innerHTML = skr;
 })
 C.addEventListener('click', function(){
     dodatkowe.innerHTML = '';
     wyswietlacz.innerHTML = '';
     znaczekPoDodatkowym = false;
     zamiennikLiczby = false;
     coRobimy = 0;
     liczbaWDodatkowym = 0;
 })
 CE.addEventListener('click', function(){
     wyswietlacz.innerHTML = '';
     zamiennikLiczby = false;
     liczbaWDodatkowym = 0;
 })
 procent.addEventListener('click', function(){
    if(dodatkowe.textContent !== "" && wyswietlacz.textContent !== ""){
        wynikowe();
        dodatkowe.innerHTML = Number(wyswietlacz.textContent);
        wyswietlacz.innerHTML = (Number(wyswietlacz.textContent) / 100);
        bufor = wyswietlacz.textContent;
    }
    else if(wyswietlacz.textContent !== ""){
        dodatkowe.innerHTML = Number(wyswietlacz.textContent);
        wyswietlacz.innerHTML = (Number(wyswietlacz.textContent) / 100);
        bufor = wyswietlacz.textContent;
    }
 })
 wynik.addEventListener('click', function(){
    wynikowe();
    znaczekPoDodatkowym = false;
 });