let sonuc = document.querySelector("#sonuc");
let kare = document.querySelectorAll(".kare");
let sil = document.querySelector("#sil");
let hesapla = document.querySelector("#hesapla");


for(let i = 0; i<16; i++){
    if(i != 12 && i != 14){
    kare[i].addEventListener('click', yazdir);}
}

function yazdir(){
    sonuc.value = sonuc.value + this.value
    
}

hesapla.addEventListener('click', hesap);
function hesap(){
    sonuc.value = eval(sonuc.value);
}

sil.addEventListener('click', silsin);
function silsin() {
    sonuc.value = "";
}
