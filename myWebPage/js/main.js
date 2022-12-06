function welcome(){
   alert("Hello")
}

welcome();

function login(){
   var firstname = document.getElementById("fname").value;
   var lastname = document.getElementById("lname").value;

   
   window.location = "main1.html";
   
}

var activies = ["Swimming", "Hiking", "Cycling", "Fishing", "Running"];

function ngForFunctionality() {
   var value = "";
   var header = document.getElementById("items").innerHTML;
   
   if(header == "") {
      activies.forEach((post) => {
         value += `<button style="background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(145,145,145,1) 50%, rgba(0,212,255,1) 100%);font-size: 30px; 
  margin-top: 10px;">${post}</button>&nbsp;`;
     });
     document.getElementById("items").innerHTML = value;
   }
   else {
      document.getElementById("items").innerHTML = "";
   }
   console.log(header);
}