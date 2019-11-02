function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Your age must be filled out");
    } else if (x >= 25) {
        document.write('I am over 25 years old');
    } else {
        document.write('I am under 25')

    }
}