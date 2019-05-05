// validation script here
const inputs = document.querySelectorAll("input");
const patterns = {
    telephone: /^\d{11}$/,
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\d\w@-]{8,20}$/i,
    slug: /^[a-z\d-]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
        //             yourname @ domain   .  com          ( .uk )
};

//validation function
function validate(field, regex) {
    if (regex.test(field.value)) {
        field.className = 'valid'
        regex.lastIndex = 0;
    } else {
        field.className = 'invalid'
        regex.lastIndex = 0;
    }
}


inputs.forEach(input => {
    input.addEventListener('input', (e) => {

        //console.log(e.target.attributes.name.value + " -- ");
        validate(e.target, patterns[e.target.attributes.name.value])
    })
});
document.getElementById('pattern_button').addEventListener('click', () => {

    if (document.getElementById('pattern').style.display == "block") {
        document.getElementById('pattern').style.display = "none"
        document.getElementById('pattern_button').className = ""
    } else {
        document.getElementById('pattern').style.display = "block";
        document.getElementById('pattern_button').className = "active"
    }

});