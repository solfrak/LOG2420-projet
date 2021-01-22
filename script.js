fetch("./data.json")
.then(response => {
    
    return response.json();
})
.then(data => {
    fTitre(data);
    fBottin(data);
    
});


function fTitre(data)
{
    document.getElementById("titre").innerHTML = data.donne[0].titre;
    document.getElementById("sous-titre").innerHTML = data.donne[1].titre;
    document.getElementById("fleche").innerHTML = data.donne[2].fleche;    
}

function fBottin(data)
{
    var text ="";
    var i = 0
    var x;
    for (x in data.bottin){
        text += data.bottin[x].name +" "+ data.bottin[x].lastName + data.bottin[x].poste + "<br>";
        //document.write(text);
    }
    
    document.getElementById("bottin").innerHTML = "<p>" + text + "</p>";
}