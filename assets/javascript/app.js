// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
  //document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  //captionText.innerHTML = element.alt;
}
var link = "";

$(document).on('click', '.myapp', function() {
  link = "";
  link = $(this).attr('data-link');
  $('#myiframe').attr('src', link);

});

function validateForm()
{
    var validation = true;
   if(!validateEmail(document.contactform.semail.value))
   {
     alert( "invalide sender email!" );
     $("#semail").css("border-color", "red");
     validation=false;
   }
   if(!validateEmail(document.contactform.remail.value))
   {
     alert( "invalide recipient email" );
     $("#remail").css("border-color", "red");
     validation=false;
   }
   return validation;
}
function validateEmail(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
}
