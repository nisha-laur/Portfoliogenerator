function addNewWEField(){
//   console.log('adding new experience ') ; 
let newNode = document.createElement('textarea');
newNode.classList.add("form-control");
newNode.classList.add("weField");
newNode.classList.add("mt-2");
newNode.setAttribute("rows",3);
newNode.setAttribute("placeholder","Enter here");

let weOb = document.getElementById('we');
let weAddButtonOb = document.getElementById('weAddButton');

weOb.insertBefore(newNode, weAddButtonOb );

}

function addNewAQField(){
let newNode = document.createElement('textarea');
newNode.classList.add("form-control");
newNode.classList.add("eqField");
newNode.classList.add("mt-2");
newNode.setAttribute("rows",3);
newNode.setAttribute("placeholder","Enter here");

let aqOb = document.getElementById('aq');
let aqAddButtonOb = document.getElementById('aqAddButton');

aqOb.insertBefore(newNode, aqAddButtonOb );
}

// generating cv
function generateCV(){
    // console.log("generating CV")
    let nameField = document.getElementById('nameField').value;
    let nameT1 = document.getElementById('nameT1');
    nameT1.innerHTML = nameField;
 document.getElementById('nameT2').innerHTML = nameField;
 document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
 document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
 let link = document.getElementById("instaField").value;
 document.getElementById("fbT").href= 'link';
// console.log(document.getElementById("fbField").value);
//  document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;
 document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;
 document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;

}