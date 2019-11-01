

$(document).ready(function(){
  $(".automating_name").mouseover(function(){
   $(".automating_text").stop().slideDown();

  });
  $(".automating_text").mouseout(function(){
   $(".automating_text").slideUp();
  });
 });

 $(document).ready(function(){
   $(".ticketing_name").mouseover(function(){
    $(".ticketing_text").stop().slideDown();

   });
   $(".ticketing_text").mouseout(function(){
    $(".ticketing_text").slideUp();
   });
  });
