function ValidateContactForm() {
    var name = document.ContactForm.Name;
    var email = document.ContactForm.Email;
    var phone = document.ContactForm.Telephone;
    var nocall = document.ContactForm.DoNotCall;
    var what = document.ContactForm.Subject;
    var comment = document.ContactForm.Comment;

    if(name.value==""){
        window.alert("Please enter your name");
        name.focus();
        return false;
    }
    
  }