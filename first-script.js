console.info("Page Loaded");

var age = 32;
var firstName = 'Daniel';
var lastName = 'Suciu';
var employed = 'true';


console.info ('Numele: ' + firstName + ' ' + lastName);
console.info (age);
console.info (employed);

function getInfo(name) {
    var msg = 'Hello ' + name + ', ' + 'welcome at FastTrackIT.';
    return msg;
}
var info = getInfo('Matei');
console.info(info);


function addApples(firstNumber, secondNumber) {
    var count = firstNumber + secondNumber;
    return count - 1;
}

