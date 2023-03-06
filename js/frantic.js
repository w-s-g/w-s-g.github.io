function animateH1(event, h1, letters) {
    let iteration = 0;
    let interval;
    let isHovering = false;
    let cardHover = false;

    const card = h1.closest(".card");
    card.addEventListener("mouseenter", function() {
        cardHover = true;
        h1.dispatchEvent(new Event("mouseleave"));
    });
  
    card.addEventListener("mouseleave", function() {
      setTimeout(function() {
          cardHover = false;
          setTimeout(function() {
              clearInterval(interval);
          }, 500);
      }, 500);
  });
  
    h1.addEventListener("mouseenter", function() {
      isHovering = true;
      h1.innerText = h1.dataset.value;
    });
  
    h1.addEventListener("mouseleave", function() {
      isHovering = false;
      iteration = 0;
      interval = setInterval(function() {
  
        h1.innerText = h1.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration && isHovering) {
              return h1.dataset.value[index];
            }
  
            return letters[Math.floor(Math.random() * 166)];
          })
          .join("");
  
        if (iteration >= h1.dataset.value.length && isHovering) {
          clearInterval(interval);
        }

        if (isHovering){
            iteration += 1 / 1.5;
        } else {
            iteration = 0;
        }

      }, 30);
    });
  
    h1.dispatchEvent(new Event("mouseleave"));
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const h1s = document.querySelectorAll("h1");
    const letters = "日本語中国語一二三四五六七八九十ABCDEFGHIJKLMNOPQRSTUVWXYZÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝßÄÖÜẞĀĂĄĆČĊĎĐĒĖĘĚĜĞĠĤĦĨĪĮİĴĶĹĻĽŁŃŅŇŊŌŐŔŘŚŜŞȘŠŢŤŦȚŨŪŬŮŰŲŴŶŸŹŻŽกขคฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮ";
  
    h1s.forEach(function(h1) {
      animateH1(event, h1, letters);
    });
  });
  