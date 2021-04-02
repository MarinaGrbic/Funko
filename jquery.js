
  $(document).ready(function() {
 
  $(".dugme4").click(function() {
        $("#polje1").css("backgroundColor", "black");
        $("#p1").css("color", " #39FF14");
        });
      
  $("#myInput").on("keyup", function() {
     var value = $(this).val().toLowerCase();
        $("#myList li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
        });
     
  $("#flip").click(function() {
        $("#panel").slideDown("slow");
        });
  
  $(".dugme4").click(function() {
        $("h1, h2, p ").addClass("black");
        $("div").addClass("promeni");
        $("body").addClass("promeni");
        $("th").addClass("promeni");
        $("td").addClass("promeni");
        $("input").addClass("promeni");
        
         });
    });

    $(document).ready(function() {
   $("#stranger").click(function(){
      $("#div1").fadeToggle();
      $("#div2").fadeToggle("slow");
      $("#div3").fadeToggle(3000);
    });
});

