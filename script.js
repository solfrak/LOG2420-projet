fetch("./data.json")
.then(response => {
    
    return response.json();
})
.then(data => {
    fTitre(data);
    fBottin(data);
    commandes(data);
});


function fTitre(data)
{
    document.getElementById("titre").innerHTML = data.donne[0].titre;
    document.getElementById("sous-titre").innerHTML = data.donne[1].titre;
    document.getElementById("fleche").innerHTML = data.donne[2].fleche;    
}

function fBottin(data)  
{   
    let text ="";
    let email="";
    let x;
   
    for (x in data.bottin){
        text = data.bottin[x].name +" "+ data.bottin[x].lastName + " - "+ data.bottin[x].poste + "<br>";
        email = '<p>'+data.bottin[x].email+ '</p>' + "<img class='copy_icon' id ='copy_icon' src='/picture/u205.svg'>" + "<br>";
        document.getElementById("bottin_liste").innerHTML += "<li><div class='nom'>" +  text +"</div>" + "<div class='email' onClick='copyToClipboard(this)'>" +  email + "</div>" + "</li>";
    }
}



function copyToClipboard(elem){

    let division1 = elem.innerHTML.split('<p>'); //divise le string aux endroits avec <p>
    let division2 = division1[1].split('</p>');  //divise le string aux endroits avec </p>
    
    let text = document.createElement('textarea');
    text.value = division2[0]; // le email clicke
    document.body.appendChild(text);
    text.select();
    document.execCommand('copy');
    text.remove(); //on veut pas afficher le textarea
}   


function buttonPlus(id){
    console.log('button plus');
    let input = document.getElementById("produit" + id + "input");
    input.value += parseInt(input.value,10)+1;
    }    


 function buttonMinus(id){
    input.value += parseInt(input.value,10)-1;
 }

 function popup(){
    document.getElementById("popup").style.visibility = "visible";
 }
 
 function popupButton(){
    document.getElementById("popup").style.visibility = "hidden";
 }

 function popup2(){
    document.getElementById("popup2").style.visibility = "visible";
 }

 function popupButton2(){
    document.getElementById("popup2").style.visibility = "hidden";
 }
 
 function popupExitButton(){
     document.getElementById("popupExit").style.visibility = "visible";
 }

 function popupExitAnnuler(){
    document.getElementById("popupExit").style.visibility = "hidden";
}

 function popupExitOk(){
    location.href = './index.html';
}

varPopupExitLoaded = document.getElementById("popupExit");
if(varPopupExitLoaded){
    document.getElementById("popupExitAnnuler").addEventListener("click", popupExitAnnuler);
    document.getElementById("popupExitOk").addEventListener("click", popupExitOk);

}

 document.getElementById("firstarticlecontainer").addEventListener("click", popup);
 document.getElementById("firstGuide").addEventListener("click", popup2);
 document.getElementById("xButton").addEventListener("click", popupButton);
 document.getElementById("xButton2").addEventListener("click", popupButton2);
 document.getElementById("u97_img").addEventListener("click", popupExitButton);


//Function pour les commandes
function up(InputTextId){
    let input = document.getElementById(InputTextId);
    let quantite = parseInt(input.value);
    quantite++;
    input.value = quantite;
}


function down(InputTextId){
    let input = document.getElementById(InputTextId);
    let quantite = parseInt(input.value);
    quantite--;
    input.value = quantite;
}

function commandes(data){
    let element  = document.getElementById("Potato");

    // for(x in data.Produit){

    //     //DIV parent
    //     let produit = document.createElement("div");
    //     produit.className = "grid-item";
    //     //DIV enfant 1
    //     let produit2 = document.createElement("div");
    //     produit2.className = "inner-grid-container";
    //     // NOM du PRODUIT
    //     let Nom = document.createElement("p");
    //     Nom.className ="product_name";
    //     Nom.innerHTML = data.Produit[x].NomProduit;
    //     //INPUT affichant le nombre
    //     let InputElement = document.createElement("input");
    //     InputElement.className = "commandElemInput";
    //     inputElement.id ="produit"+x+"Input";
    //     inputElement.value = 0;
    //     // ZONE DES BOUTTONS
    //     let ButtonElement = document.createElement("div");
    //     ButtonElement.className = "button-grid";
    //     //BOUTTONS +
    //     let buttonUp = document.createElement("img");
    //     buttonUp.className = "commandButtonUp";
    //     buttonUp.alt = "";
    //     buttonUp.src ="/picture/up_u345_a.svg";
    //     buttonUp.onClick() = up(inputElement.id);
    //     //BOUTTONS -
    //     let buttonDown = document.createElement("img");
    //     buttonDown.className = "commandButtonDown";
    //     buttonDown.alt = "";
    //     buttonDown.src ="/picture/down_u344_a.svg";
    //     buttonDown.onClick() = down(inputElement.id);

    //     //Ajouter les boutons a ButtonElement
    //     ButtonElement.appendChild(buttonUp);
    //     ButtonElement.appendChild(buttonDown);
    //     //Ajouter Input, les bouttons et le nom au  DIV enfant
    //     produit.appendChild(InputElement);
    //     produit2.appendChild(ButtonElement);
    //     produit2.appendChild(Nom);
    //     //Ajouter le tout aux DIV parent
    //     produit.appendChild(produit2);

    //     element.appendChild(produit);
    //}
    console.log(element);
    let test = document.createElement("p");
    test.innerHTML = "ketchup";
    element.appendChild(test);
}

