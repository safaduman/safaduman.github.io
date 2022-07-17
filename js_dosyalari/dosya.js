// alert("Sefa Duman'ın web sitesine hoş geldiniz. Kurban kesimi yapılır!");

console.log("Fenerbahce ancak ruyasında şampiyon olur!");

//  fonksiyonu olusturdum(tanimladim)
function adSoyadYaz() {
    console.log("Safa Duman");
}

// fonksiyonu cagirdim(calistirdim)
adSoyadYaz();


function maasHesapla() {
    var aylikMaas = 5_000; // dogru -> 15000, yanlis -> 15 000


    var yillikMaas = aylikMaas * 12;
    var ONyillikMaas = aylikMaas * 12 * 10;
    var ELLIyillikMaas = aylikMaas * 12 * 50;




    console.log(
        "Yıllık MAAŞ: ", yillikMaas
    );
    console.log(
        "ONyillik MAAŞ: ", ONyillikMaas
    );
    console.log(
        "ELLIyillik MAAŞ: ", ELLIyillikMaas
    );
}

maasHesapla();



function maaslariGoster() {
    var safaninMaasi = 15_000;
    var adnaninMaasi = 45_000;
    var ismailinMaasi = 5_000;
    var ibrahiminMaasi = 1000;
    var mehmetinMaasi = 15_000;


    maaslar = [safaninMaasi, adnaninMaasi, ismailinMaasi, ibrahiminMaasi, mehmetinMaasi];


    console.log("====== MAAŞLARIMIZ ======");
    // console.log(safaninMaasi);
    // console.log(adnaninMaasi);
    // console.log(ismailinMaasi);
    // console.log(ibrahiminMaasi);
    // console.log(mehmetinMaasi);

    maaslar.forEach(maas => {
        console.log("Benim maaşım: ", maas);
    });

}
function yaslarigoster() {


    var sefaninyasi = 14;
    var ismailinyasi = 10;
    var mehmedinyasi = 13;
    var ibrahiminyasi = 1;

    yaslar = [sefaninyasi, ismailinyasi, mehmedinyasi, ibrahiminyasi];

    console.log("======YASLARİMİZ======");

    yaslar.forEach(yas => {
        console.log("yaslar:", yas);
    });


}

yaslarigoster();

maaslariGoster();


function resimElementiOlustur() {
    var resimDiv = document.getElementById("resimID");




    sayilar = [1, 2];

    sayilar.forEach(sayi => {

        var resimImg = document.createElement("img");
        resimImg.src = "https://cdn.memorial.com.tr/files/2018/8/ab3d54ce-b6f5-428f-94af-d757be212720.png"
        resimImg.style.cssText = "width: 600px; height: 400px;";
        // id'si resimID olan div'in icersine çocuk bir element yani resimImg'yi ekliyoruz.
        resimDiv.appendChild(resimImg);

    });


}
resimElementiOlustur();

const range = (start, end, length = end - start) => Array.from({ length }, (_, i) => start + i);

function butonelementiolustur() {
    var butondiv = document.getElementById("butonID");


    // sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    sayilar = range(1,10); // 1 ile 9 arasindaki sayilari getirir. 1 ve 9 dahil.. ustteki kullanim ile ayni

    sayilar.forEach(sayi => {

        var benimButonum = document.createElement("button");
        // benimButonum'un üzerinde yazan yazıyı sayı olarak belirledik. Yani üzerinde 1, 2, 3 ... yazacak.
        benimButonum.textContent = sayi;
        // burada benimButonum sayi degerini kullanarak id veriyoruz. Ornegin btn1, btn2, btn3 ... gibi olacak.
        benimButonum.id = "sayiButonu" + sayi;

        benimButonum.onclick = function butonArkaPlanDegis() {
            const butonID = "sayiButonu" + sayi;
            var secilenButon = document.getElementById(butonID);
            secilenButon.style.backgroundColor = "red";
        }
        // butonu butondiv'e cocuk olarak ekliyoruz 
        butondiv.appendChild(benimButonum);

        // eger sayi 3'e bolunebiliyorsa <br /> etiketi eklesin ki diğer rakamlar alt satıra gelsin
        if (sayi % 3 == 0) {
            butondiv.appendChild(document.createElement("br"));
        }

        
        
        
        
        
    }); // burasi forEach bittigi yer

}

butonelementiolustur();



/* ODEV : 8x8 lik satranc tahtasi yapiacak butonlar ile yapilacak. 64 tane buton olacak.
butona tiklayinca arka plan mavi olacak.
*/ 
function santrancTahtasiOlustur(){
var santrancdiv = document.getElementById("santrancID");

sayilar = range(1,65); 

    sayilar.forEach(sayi => {

        var benimsantranc = document.createElement("button");
        
        benimsantranc.textContent = sayi;
        
        benimsantranc.id = "sayiButonu" + sayi;

        benimsantrac.onclick = function butonArkaPlanDegis() {
            const santrancID = "sayiButonu" + sayi;
            var secilenButon = document.getElementById(santrancID);
            secilenButon.style.backgroundColor = "red";
        }
         
        santrancdiv.appendChild(benimsantranc);

        
        if (sayi % 8 == 0) {
            santrancdiv.appendChild(document.createElement("br"));
        }


        })

        }

        santrancTahtasiOlustur();



