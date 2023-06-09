 
    var fontSize = 55;
    if(window.screen.width < 800)  {
      fontSize = 33;
    }
    else {
      fontSize= 50;
  }
    var vara = new Vara(
      "#text-container",
      "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
      [
        {
          text: "Monman11.com",
          x: 0,
          y: 0,
          duration: 1700,
          color: '#f20aa9',
          class: "neon-glow"
        },
        {
          text: "Join Us Today",
          x: 0,
          y: 20,
          color: "#fff",
          id: "right",
          color: '#f51484',
        }
      ],
      {
        strokeWidth: 2.2,
        color: "#fff",
        fontSize: fontSize,
        textAlign: "center" 
                                                                                                                                                               
      }
    );
    vara.ready(function() {
      var erase = false;
     
      vara.animationEnd(function(i, o) {
        var join = document.querySelector(".joinbtn");
        setTimeout(function() {
            join.innerText = "Play Monman11";
            join.className="join-btn";
            document.querySelector(".release").style.display = "block";
          }, 2000);
        if (i == "no_erase") erase = false;
        if (erase) {
          o.container.style.transition = "opacity 1s 1s";
          o.container.style.opacity = 0;
        }
      });
      vara.get("github").container.style.cursor = "pointer";
      vara.get("github").container.onclick = function() {
        document.querySelector("#link").click();
      };
    });
    
        