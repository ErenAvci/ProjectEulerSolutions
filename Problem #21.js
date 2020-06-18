var toplam = 10000;
var yarisi = toplam / 2;
var arkadasSayilar = [];
var sum = 0;

for (var i = 0; i < yarisi; i++){
  if (toplam % i === 0){
    arkadasSayilar.push(i);
    sum += i;
  }
}
console.log( toplam + " den küçük tüm arkadaş sayıların toplamı " + sum + "'dir");
console.log(arkadasSayilar);
