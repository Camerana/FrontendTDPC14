$(document).ready(function () {

    // jQuery methods go here...

    $("#btn").click(function() {
        $("p").hide(1000);
    })
    $("#btn2").click(function() {
        $("p").show();  
    })
    $("#btn3").click(function() {
        $("p").toggle();  
    })
    $("#btn4").click(function() {
        $("p").addClass("rosso");  
        // $("p").toggleClass("rosso");  
    })
    $("#btn5").click(function() {
        $("p").css("padding-left", "50px");
    })

    $("#btn6").click(function(){
        alert($("#nome").val());
    })  


});


// esempio nascondere tutti i paragrafi con javascript puro
    // const btn = document.getElementById("btn");
    // const paragrafi = document.getElementsByTagName("p");

    // btn.onclick = function () {
    //     for(let i = 0; i < paragrafi.length; i++) {
    //         paragrafi[i].style.display = "none";
    //     }
    // }


    document.querySelector("p");
    document.querySelector("#pippo");
    document.querySelector(".test");

    document.querySelectorAll(".test");

    const persone = ["Pino", "Gino"];
    const libri = ["Pino", "Gino"];
 
    for(p of persone) {
        console.log(p);
    }

    libri.forEach(function(l){
        console.log(l);
    })

    
