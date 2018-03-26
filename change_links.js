var menu = document.getElementById('top-menu'); // gasim meniul
var links = document.getElementsByTagName('a'); // gasim toate elementele din meniu
var breadCrumb = document.getElementById('breadcrumb');

links[0].onclick = function (e);{
    breadCrumb.innerHTML = this.innerHTML + ':' + this.title;
    e.preventDefault();
}