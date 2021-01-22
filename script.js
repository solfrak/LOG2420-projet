fetch("./data.json")
.then(response => {
    
    return response.json();
})
.then(data => {
    test(data);
    
});


function test(data)
{
    document.getElementById("titre").innerHTML = data.titre;
    document.getElementById("sous-titre").innerHTML = data.sousTitre;
}