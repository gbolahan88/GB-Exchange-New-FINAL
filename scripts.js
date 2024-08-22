/* ==== typing animation ====*/
var typed = new Typed(".typing",{
  strings: ["Buy Gift Cards","Buy Bitcoin","Sell Bitcoin and get paid in Naira","Sell Paypal and Cashapp Funds and get paid in Naira"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop:true
})

function revealMessage() {
  document.getElementById ("hiddenMessage").style.display = 'block';
}

function countDown() {
  var currentVal = document.getElementById("countDownButton").innerHTML;
  var newVal = 0;
  if (currentVal > 0) {
    newVal = currentVal - 1;
  }
  document.getElementById("countDownButton").innerHTML = newVal;
}

let giftcards = ["Amazon", "Steamcards"];
let Amazon = ["USA amazon", "Nigeria Amazon"];
let Steamcards = ["USA Steam", "Nigeria Steam"];

let slct1 = document.getElementById("slct1");
let slct2 = document.getElementById("slct2");

giftcards.forEach(function addGiftcards(item) {
  let option = document.createElement("option");
  option.text = item;
  option.value = item;
  slct1.appendChild(option);
});

slct1.onchange = function () {
  slct2.innerHTML = "<option></option>";
    if (this.value == "Amazon") {
      addToslct2(Amazon);
    }
    if (this,value == "Steamcards") {
      addToslct2(Steamcards);
    }
  }

 function addToslct2(arr) {
  arr.forEach(function (item) {
    let option = document.createElement("option");
    option.text = item;
    option.value = item;
    slct2.appendChild(option);
   })
}
