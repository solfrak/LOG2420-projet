fetch("./data.json")
.then(response => {
    
    return response.json();
})
.then(data => {
    fTitre(data);
    fBottin(data);
    fProduit(data);
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
    var email="";
    var i = 0
    var x;
    // for (x in data.bottin){
    //     text = data.bottin[x].name +" "+ data.bottin[x].lastName + " - "+ data.bottin[x].poste + "<br>";
    //     email = data.bottin[x].email + "<br>";
    //     document.getElementById("bottin_name").innerHTML += "<li class='nom'";
    //     //document.write(text);
        
    //     document.getElementById("bottin_email").innerHTML +=  email;

    // }
    
    
}


function buttonPlus(){
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
    
}

 function buttonMinus(){
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number').value = value;
 }

 function popup(){
    document.getElementById("popup").style.visibility = "visible";
    console.log("clicked");
 }
 document.getElementById("firstarticle").addEventListener("click", popup);

 
 //   function fProduit(data)
 //  {
 //      var text ="";
 //      var i = 0
    
 //      var commande = document.getElementById("commandElemList");

//      for (i in data.Produit){
//          text = data.Produit[x].Produit;
//          commande.innerHTML += "<div> <input type='text' class='commandElemInput' id='number' value='0'/>  <input type='button' onclick='buttonPlus()'  /><br><input type='button' onclick='buttonMinus()'  /><label id='commande' for='commandeName'>";
//          commande.innerHTML += text + "</label><br></div> ";
//          //document.write(text);
for (i in data.Produit){
    var original = document.getElementById('commande');
    var clone = original.cloneNode(true); // clone
    clone.id = "Produit"+=i;
    document.getElementById(clone.id).value;
    
    original.appendChild(clone);

}
 //}