fetch("./data.json")
.then(response => {
    
    return response.json();
})
.then(data => {
    fTitre(data);
    fBottin(data);
    //fProduit(data);
});


function fTitre(data)
{
    document.getElementById("titre").innerHTML = data.donne[0].titre;
    document.getElementById("sous-titre").innerHTML = data.donne[1].titre;
    document.getElementById("fleche").innerHTML = data.donne[2].fleche;    
}

function fBottin(data)
{
//     var text ="";
//     var email="";
//     var i = 0
//     var x;
//     // img = document.createElement("img");
//     // img.src="https://d1icd6shlvmxi6.cloudfront.net/gsc/PYTPZI/ad/0f/42/ad0f4261607f4820a8707041ade94ff0/images/accueil_service/u205.svg?token=07c1b4bb307dcfd048f571e8a652f4ff63a7395c85661a1dc9bf0a217123e94f";
//     // img.id="copy_icon";
//     // img.class ="copy_icon";
    
//     for (x in data.bottin){
//         text = data.bottin[x].name +" "+ data.bottin[x].lastName + " - "+ data.bottin[x].poste + "<br>";
//         email = data.bottin[x].email + "<img class='copy_icon' id ='copy_icon' src='https://d1icd6shlvmxi6.cloudfront.net/gsc/PYTPZI/ad/0f/42/ad0f4261607f4820a8707041ade94ff0/images/accueil_service/u205.svg?token=07c1b4bb307dcfd048f571e8a652f4ff63a7395c85661a1dc9bf0a217123e94f'>" + "<br>";
//         document.getElementById("bottin_liste").innerHTML += "<li><div class='nom'>" +  text +"</div>" + "<div class='email'>" +  email + "</div>" + "</li>";
//         // document.getElementById("email").appendChild(img);
//     }
}
// function copyToClipboard(data){
//     //text = data.bottin[x].email;
//     text = "test";
//     document.execCommand("copy");
//     console.log("Copied to clipBoard");
// }
// document.getElementById("clipboard").addEventListener("click", function(data) {
//     copyToClipboard(data);
// });

function buttonPlus(id){
    console.log('button plus')
    var input = document.getElementById("produit" + id + "input")
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
 
 function popupExitButton(){
     document.getElementById("popupExit").style.visibility = "visible";
 }
 document.getElementById("firstarticle").addEventListener("click", popup);
 document.getElementById("xButton").addEventListener("click", popupButton);
 document.getElementById("u97_img").addEventListener("click", popupExitButton);
 



var buttonUpArray = document.getElementsByClassName("commandButtonUp");
buttonUpArray[0].addEventListener("click", function(){
    buttonPlus(1);
});
buttonUpArray[1].addEventListener("click", function(){
    buttonPlus(2);
});
buttonUpArray[2].addEventListener("click", function(){
    buttonPlus(3);
});
buttonUpArray[3].addEventListener("click", function(){
    buttonPlus(4);
});

/* <h1>Commande du matériel</h1>

<form class="commandElem" id="commandeElem" ></form>
    <input type="text" class="commandElemInput" id="number" value="0"/>

    </div>
        <input type="button" onclick="buttonPlus()"  /><br>
        <input type="button" onclick="buttonMinus()"  />
    </div>
    <label id="commande">Produit</label><br>
</form>
    <br><br><br>
<input type="text" id="autres"/>       */

//   function fProduit(data)
//  {
// //       var text ="";
// //       var commande = document.getElementById("commandElemList");

// // //      for (i in data.Produit){
// // //          text = data.Produit[x].Produit;
// // //          commande.innerHTML += "<div> <input type='text' class='commandElemInput' id='number' value='0'/>  <input type='button' onclick='buttonPlus()'  /><br><input type='button' onclick='buttonMinus()'  /><label id='commande' for='commandeName'>";
// // //          commande.innerHTML += text + "</label><br></div> ";
// // //          //document.write(text);

//     var original = document.getElementById("commandeElem");
    
//       for (prod in data.Produit){
//         var clone = original.cloneNode(true); // clone
//         var child_nodes =clone.childNodes;
        
//         var Elem = child_nodes[6];
//         Eleme.innerHTML =  data.Produit[prod].Produit;    
//         clone.appendChild(Elem);
//         original.appendChild(clone);

//      }
//   }

