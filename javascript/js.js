// Récupérer l'élement
let button = document.querySelector("#button");

let taskInput = document.querySelector("#task");

let taskUL = document.querySelector(".taskList");



// Déclenchement d'un évenement au click sur mon button
button.addEventListener("click", function () {

 if (taskInput.value == "") {
  alert("Veuillez remplir le champs obligatoire");
 } else {
  // Créer ma balise LI
  let li = document.createElement("ol");

  //   Ajouter une valeur à ma balise LI
  li.innerText = taskInput.value;

  li.style.color = "#084298"
  li.style.fontSize = "20px"
  li.style.textAlign = "center"


  //   Ajout d'une classe à ma balise LI
  li.className = "ol";

  //   Apparaitre à l'intérieur du parent taskUL LI
  taskUL.appendChild(li);

  // rejouter un bouton rayer
  let btn = document.createElement("i");        // Créer un élément <button>
  // let s = document.createTextNode("supprimer");       // Créer un noeud textuel
  btn.className = "fa-solid fa-eraser"; // rappeler icon 

  // Créer un bouton pour motifier
  let btnModif = document.createElement("i");
  btnModif.className = "fa-solid fa-pen-to-square"; // rappeler icon 

  li.appendChild(btn); // pour metre dans list parent  ligne 13  
  li.appendChild(btnModif); // pour metre dans list parent  ligne 13  



  // Evenement modifier
  btnModif.addEventListener("click", function () {
   // Tranformer la li en input
   li.innerHTML = " <input type='text' class='form-control' id='inputModif' placeholder='motifier'></input>";

   // Création du bouton pour valider la modif
   let btnValid = document.createElement("btn");
   btnValid.innerHTML = "<button id='button' class='btn btn-outline-primary'>Valide </button>";
   li.appendChild(btnValid);
   let inputModif = document.querySelector("#inputModif");
   btnValid.addEventListener("click", function () {
    li.innerText = inputModif.value;
    li.appendChild(btn);
    li.appendChild(btnModif);
   })
  })



  // code pour gere  produit  rayer 
  btn.addEventListener("click", function () {
   // Créer un bouton pour supprimer
   let btnSuppr = document.createElement("i");
   // Mettre un innerText à notre btnSuppr "Supprimer"
   btnSuppr.className = "fa-solid fa-trash"; // rappeler icon 
   li.appendChild(btnSuppr); // pour metre dans list parent  ligne 13  

   let listSupprim = document.querySelector(".taskListSupprime");     // Récupérer l'élement
   li.style.textDecoration = "line-through";
   li.style.color = "	#B22222";
   li.style.textAlign = "center";
   listSupprim.appendChild(li);    // code pour deplacer 
   btn.remove();   // supprimer le bouton
   btnModif.remove();

   // SUpprimer la liste au click d'un button
   btnSuppr.addEventListener("click", function () {
    // Alerte de confirmation
    if (confirm("Voulez vous supprimer la liste ?")) {
     li.remove();
    }
   });

  })

  //   Vider l'input
  taskInput.value = "";
 }
});
