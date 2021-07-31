$(document).ready(function(){
  $(window).on('scroll',function(){
var scroll = $(window).scrollTop();
 if(scroll>=50){
  $(".sticky").addClass("stickyadd");
 }else{
  $(".sticky").removeClass("stickyadd");
 }
  })
var typed = new Typed(".element",{
strings:["UI Designer.","Web Developer..","App Developer..."],
smartBackspace:true,
typeSpeed:100,
backSpeed:100,
loop:true,
loopCount:Infinity,
startDelay:1000
});
//progress bars//
var waypoint = new Waypoint({
    element: document.getElementById('skill-id'),
    handler: function() {
        var p = document.querySelectorAll('.progress-bar');
        p[0].setAttribute("style", "width:95%; transition:2s all");
        p[1].setAttribute("style", "width:85%; transition:2.5s all");
        p[2].setAttribute("style", "width:75%; transition:2.7s all");
        p[3].setAttribute("style", "width:70%; transition:3s all");
        p[4].setAttribute("style", "width:80%; transition:3.5s all");
        p[5].setAttribute("style", "width:50%; transition:3.7s all");
    },
    offset:'90%'
  });
  $('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

});

function sendmail(){
  
  var name = $('#Name').val();
  var email = $('#Sender').val();
  var subject = $('#Subject').val();
  var message = $('#Message').val();

  // var body = $('#body').val();

  var Body='Name: '+name+'<br>Email: '+email+'<br>Message: '+message;
  //console.log(name, phone, email, message);

  Email.send({
        SecureToken:"fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
    To: 'stechieweb@gmail.com',
    From: " S-Techieweb@gmail.com",
    Subject: "New message "+name,
    Body: Body
  }).then(
    message =>{
      //console.log (message);
      if(message=='OK'){
      alert('Your mail has been sent successfully.Thank you we will get back shortly.');
      }
      else{
        console.error (message);
        alert('There is error at sending message. ')    
      }
    }
  );
}

