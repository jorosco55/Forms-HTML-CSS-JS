

function idCard() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;

    var postFullName = firstName + " " + lastName;
    var postAddress = document.getElementById('address').value;

    var postAge = document.getElementById('age').value;
    var postPhoneNumber = document.getElementById('phoneNumber').value;

    var numberArray = [];
    numberArray.push(postAge);
    numberArray.push(postPhoneNumber);


    for(var i = 0; i <= numberArray.length; i++){
        if(numberArray[i] <= 100){
            document.getElementById('postAge').innerHTML = "Age: " + postAge;
        }
        if(numberArray[i] >= 100){
            document.getElementById('postPhoneNumber').innerHTML = "Phone Number: " + postPhoneNumber;
        }
    }
    document.getElementById("postFullName").innerHTML = postFullName;
    document.getElementById("postAddress").innerHTML = "Address: " + postAddress;


}




