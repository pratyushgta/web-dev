function validate(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var uname = document.getElementById("uname").value;
    var pass = document.getElementById("pass").value;
    var repass = document.getElementById("repass").value;
    var cbox1 = document.getElementById("cbox1");
    var cbox2 = document.getElementById("cbox2");
    var radio1 = document.getElementById("radio1");
    var radio2 = document.getElementById("radio2");
    var menu = document.getElementById("menu");
    var email = document.getElementById("email");


    if(fname.length < 2){
        var error="Name should be >2 char long!"
        document.getElementById("fname_error").innerHTML=error;
        return false;
    }

    if(fname=="" || fname==null){
        window.alert("Name cannot be empty!");
        return false;
    }

    if(!/[A-Z]/.test(fname[0])){ 
        window.alert("[First Name] First char should be uppercase!")
        return false;
    }

    if(lname=="" || lname==null){
        window.alert("Last name cannot be empty!");
        return false;
    }

    if(!/^[A-Z][A-Za-z]*$/.test(uname)){
        window.alert("Username should have first char in uppercase!");
        return false;
    }

    if(uname=="" || uname==null){
        window.alert("Username cannot be empty!");
        return false;
    }

    if(!/^[A-Za-z0-9]{5,15}$/.test(pass)){
        window.alert("Password should contain 5-15 alphanumerics")
        return false;
    }

    if(pass!=repass){
        window.alert("Passwords must be same!");
        return false;
    }

    if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
        window.alert("Enter valid email address!!")
        return false;
    }

    if(!cbox1.checked || !cbox2.checked){
        window.alert("Please check a checkbox!");
        return false;
    }

    if(!radio1.checked && !radio2.checked){
        window.alert("Please select a radio button!");
        return false;
    }

    radio1.addEventListener('click', function() {
        radio2.disabled = true;
    });

    radio2.addEventListener('click', function() {
        radio1.disabled = true;
    });


    if (menu.value == "Select") {
        window.alert("Please select an option from the menu.");
        return false;
    }
    return true;
}