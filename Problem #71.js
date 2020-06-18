for(var b = 1000000; b >= 1; b--) {
    var a = (3*b - 1)/7;
    if(a == (a|0)) {
        console.log(a,b);
        break;
    }
}

