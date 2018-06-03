/*$(document).ready(function () {
$("#username").on('input', function() {
    var name = $( this ).val();
    localStorage.setItem("nom", name)
    console.log("NOM: ",localStorage.getItem("nom"))
})

});
localStorage.setItem("nom", "Léo")
var a = localStorage.getItem("nom")
console.log(a)*/


function jeclick(index){

    var requete = new XMLHttpRequest();
    requete.open("GET", "liste.json")
    requete.onload = function () {
        
        console.log(requete.responseText);
        
        var data = JSON.parse(requete.responseText);


        
        console.log(index); 
        console.log(data[index].nom);
        $("#cli").text(data[index].name + data[index].firstName + data[index].login + data[index].profession + data[index].mail + data[index].tel);
        
        
    }
requete.send();
}