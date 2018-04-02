function getRow(firstName, lastName, phone){
    return "<tr><td>" + firstName + "</td><td>" + lastName +"</td><td>" + phone + "</td></tr>";
}

var persons = [
    // firstName, lastName, phone
    ["Daniel", "Suciu", "07430743"],
    ["Andrei", "Ille", "07450745"],
    ["Filip", "Ille", "07460746"]
];

var rows = '';

persons.forEach(function(person) {
    rows += getRow(person[0], person[1], person[2]);
});
// document.getElementById('phone-book').getElementsByTagName('tbody')[0].innerHTML = row1 + row2;
$('#phone-book tbody').html(rows);