//when the document is charged and ready
$(document).ready(function(){
  
  //submit form
  $("#idContactForm").submit(function() {
      
      if (confirm("Confirm your message?")) {
          alert("Your message has been sent. We will get back to you soon.");            
      }else{
          return false;
      }

  });
  
  
});
