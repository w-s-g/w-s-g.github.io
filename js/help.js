document.addEventListener("DOMContentLoaded", function() {
  const cardContents = document.querySelectorAll(".card-content");
  const helpMeArray = ["help me", "hilf mir", "助けて", "βοήθεια", 
  "ayuda me", "עזרה לי", "socorro", 
  "ช่วยด้วย", "hjälp mig", "yardım et", "pomoći", "ajută-mă", "ma aitäh"];
  
  cardContents.forEach(function(cardContent) {
      for (let i = 0; i < 28; i++) {
          let h1 = document.createElement("h1");
          let phrase = Math.random() < 0.5 ? "help me" : helpMeArray[Math.floor(Math.random() * helpMeArray.length)];
          h1.setAttribute("data-value", phrase);
          h1.textContent = phrase;
          cardContent.appendChild(h1.cloneNode(true));
      }
  });
});
