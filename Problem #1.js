function Problem1(){
    this.katlar = function(sayi,kat){
        return !(sayi%kat);
    };
    var sonuc = 0;
    for(var i = 1; i < 1000; i++){
        if(katlar(i,3) || katlar(i,5)){
            sonuc += i;
        }
    }
    return sonuc ;
