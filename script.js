
$(document).ready(function() {

    if (localStorage.korpa) {
        prikazKorpe();

    } else {
     localStorage.korpa = "";
    }

    prikaziBrKorpe();
    ispisProizvoda();
  
})

function ispisProizvoda() {

    for (let i = 0; i < podaci.length; i++) {
       
        if (podaci[i].popust) {

            $(".proizvodi").append(`
                <div class="col-xs-12 col-sm-4 col-md-3"> 
                    <div class="panel panel-primary kartica">
                  
                        <h1 class='popust'><span class="label label-danger">- ${podaci[i].popust * 100} %</span></h1>
                        <div class="panel-heading">${podaci[i].naziv}</div>
                       
                        <div class="panel-body"><img src=".../Slike/${podaci[i].slika}" class="img-responsive" style="width:100%" alt="Image"></div>
                        <div class="panel-footer">
                            <small class='text-danger'><del>${prikazCene(podaci[i].cena)} RSD</del></small><br>
                            ${prikazCene(podaci[i].cena - podaci[i].cena * podaci[i].popust) } RSD
                        </div>
                        <button onclick="dodavanjeUKorpu(${podaci[i].id})" class='btn btn-primary btn-lg'><span class='glyphicon glyphicon-shopping-cart'></span></button>
                    </div>
                </div>
            `);
        } 
        
        else {
            $(".proizvodi").append(`
                <div class="col-xs-12 col-sm-4 col-md-3"> 
                    <div class="panel panel-primary kartica">
                        <div class="panel-heading">${podaci[i].naziv}</div>
                      
                        <div class="panel-body"><img src=".../Slike/${podaci[i].slika}" class="img-responsive" style="width:100%" alt="Image"></div>
                        <div class="panel-footer">
                        <small><del></del></small><br>
                        ${prikazCene(podaci[i].cena)} RSD</div>
                        <button onclick="dodavanjeUKorpu(${podaci[i].id})" class='btn btn-primary btn-lg'><span class='glyphicon glyphicon-shopping-cart'></span></button>
                    </div>
                </div>
            `);
        }
    }
}


function prikazCene(broj) {  
    var n = broj.toFixed(2).toString().split("").reverse();
    if (n.length > 6) n.splice(6, 0, ","); 
    if (n.length >= 11) n.splice(10, 0, ",") 
    return n.reverse().join(""); 
}


function dodavanjeUKorpu(id) {

    var objekat = pronadjiPrekoID(id);
 
    if (localStorage.korpa != "") { 
        var korpa = JSON.parse(localStorage.korpa);
    } else { var korpa = []; }

    korpa.push(objekat);
 
    localStorage.korpa = JSON.stringify(korpa);

    prikaziBrKorpe();
   
    prikazKorpe();
}

function pronadjiPrekoID(id) {
    for (let i = 0; i < podaci.length; i++) {
        if (id == podaci[i].id) 
            return podaci[i];
    }
}


function prikaziBrKorpe() {
    
    if (localStorage.korpa == "") { 
        $("#brKorpa").text("0");
   
    } else { 
        $("#brKorpa").text(JSON.parse(localStorage.korpa).length);
    }
}


function prikazKorpe() {
    
    var korpa = JSON.parse(localStorage.korpa);
    
    var brojac = 1;
    
    var zbir = 0;
    
    $("#tabela").html("");
   
    if (korpa.length == 0 || korpa == "") {
        $(".korpa-naslov").text("Korpa je prazna");
    } else {
        $(".korpa-naslov").text("Sadržaj korpe");
       
        for (let i = 0; i < korpa.length; i++) {

          if (korpa[i].popust) {
                var cena = korpa[i].cena - korpa[i].cena * korpa[i].popust;
            } else {
                var cena = korpa[i].cena;
            }


            $("#tabela").append(`
                <tr>
                    <td>${brojac}</td>
                    <td><img src='.../Slike/${korpa[i].slika}'></td>
                    <td>${korpa[i].naziv}</td>
                    <td>${prikazCene(cena)}</td>
                    <td>
                        <button class='btn btn-danger' onclick='brisanjeIzKorpe(${i})'>
                            <span class='glyphicon glyphicon-trash'></span>
                        </button>
                    </td>
                </tr>
            `);

            brojac++;
            zbir += cena;
        }
    }
   
    $('#ukupnaCena').text(prikazCene(zbir) + " RSD");
}

function brisanjeIzKorpe(index) {
   
    var korpa = JSON.parse(localStorage.korpa);
   
    korpa.splice(index,1);
    
    localStorage.korpa = JSON.stringify(korpa);
    
    prikazKorpe();
    prikaziBrKorpe();
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
 
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


