let PinRegex = RegExp('^[a-z][0-9a-z_+-]*\\.?[0-9a-z_+-]+@\\w+(\\.[a-z]{2,}){1,2}$');
let email_2 = "abc@bridgelab";
check_validity(email_2);


function check_validity(sample) {
    let output = PinRegex.test(sample);
    console.log(sample + " \nEmail is Valid: " + output);
}