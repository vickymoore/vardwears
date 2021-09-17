$(document).ready(function(){
    $(".fa-bars").click(function(){
     $(".flex").slideToggle();
     setTimeout(() => $(".text").fadeToggle(), 500);

    })
})