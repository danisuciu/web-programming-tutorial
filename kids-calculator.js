function countTo(n) {
    for (var i = 1; i <= n; ) {
        console.info(i);
        i++;
    }
}

function addNumbers(a, b) {
    console.info('primul numar este ' + a);
    console.info('al doilea numar este ' + b);

    var suma = a; // numarul cel mai mare
    var degete = b; // numarul cel mai mic

    if (a < b);    {
        suma = b;
        degete = a;
    }

    while (degete > 0) {
        degete--; // luam un deget de la b
        suma++; // punem un deget la a
        console.info(suma + ' - au mai ramas ' + degete + ' degete');
    }
    console.info('suma este: ' +suma);
}
// var count = addNumbers(6, 16);

function isNumberPrime(n) {
    for(var i = 2 ; i < n; i++) {
        if(n%i == 0) {
            return false;
        }
    }
    return true;
}

function showPrimeNumbersTo(n) {
    for (var i = 5; i <= n; i++){
        if (i%2 && i%3 && i%4){
            console.info(i);
        }
    }
}
showPrimeNumbersTo(25);