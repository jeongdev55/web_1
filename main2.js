const toggleBtn=document.querySelector('.barBtn');
const nav=document.querySelector('.navbar__menu');
const icon=document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click',()=>{
    nav.classList.toggle('active');
    icon.classList.toggle('active');
});

/*
$(window).scroll(function(evt) {
    var y = $(this).scrollTop();
    if (y < 1) {
       $('.navbar').addClass('.background_change');
 
    } else{
       $('.navbar').removeClass('.background_change');
    }
 });
 */

 $(window).scroll(function(){
     var scroll=$(window).scrollTop();
     console.log(scroll);

     if(scroll >=2){
         $(".navbar").css("background","white");
         $("a").css("color","black");
         $(".navbar__logo").css("color","black");
         $(".navbar__icons").css("color","black");
         $(".barBtn").css("color","black");
     }
 });

 $(window).scroll(function(){
    var scroll2=$(window).scrollTop();
    console.log(scroll2);

    if(scroll2==0){
        $(".navbar").css("background","rgba(47, 47, 49, 100)");
        $("a").css("color","white");
        $(".navbar__logo").css("color","white");
        $(".navbar__icons").css("color","white");
        $(".barBtn").css("color","white");

    }
});


$(".slider input[type=radio]:nth-child(1)").click(function(){
    $(".change__text>p").text("Beautiful").css("color","white").css("transition","2s");
});

$(".slider input[type=radio]:nth-child(2)").click(function(){
    $(".change__text>p").text("Pretty").css("color","black").css("transition","2s");
});

$(".slider input[type=radio]:nth-child(3)").click(function(){
    $(".change__text>p").text("Joyful").css("color","white").css("transition","2s");  
});

$(".slider input[type=radio]:nth-child(4)").click(function(){
    $(".change__text>p").text("Forever").css("color","black").css("transition","2s");
});