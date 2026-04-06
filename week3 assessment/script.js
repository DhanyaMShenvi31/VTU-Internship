function calculateGrade(){

    let name = document.getElementById("studentName").value;

    let marks = [
        Number(document.getElementById("m1").value),
        Number(document.getElementById("m2").value),
        Number(document.getElementById("m3").value),
        Number(document.getElementById("m4").value),
        Number(document.getElementById("m5").value)
    ];

    let total = 0;

    for(let i=0;i<marks.length;i++){
        total += marks[i];
    }

    let average = total / marks.length;

    let grade;

    if(average >= 90) grade = "A+";
    else if(average >= 75) grade = "A";
    else if(average >= 60) grade = "B";
    else if(average >= 50) grade = "C";
    else grade = "Fail";

    document.getElementById("gradeResult").innerHTML =
        "Name: " + name +
        "<br>Total: " + total +
        "<br>Average: " + average.toFixed(2) +
        "<br>Grade: " + grade;
}









function checkPalindrome(){

    let word = document.getElementById("palindromeInput").value;
    let reversed = "";

    for(let i = word.length - 1; i >= 0; i--){
        reversed += word[i];
    }

    if(word === reversed){
        document.getElementById("palindromeResult").innerHTML = "Palindrome";
    } else {
        document.getElementById("palindromeResult").innerHTML = "Not Palindrome";
    }
}






function analyzeNumber(){

    let num = Number(document.getElementById("numberInput").value);

    let result = "";

    if(num % 2 === 0){
        result += "Even<br>";
    } else {
        result += "Odd<br>";
    }

    if(num > 0){
        result += "Positive<br>";
    } else if(num < 0){
        result += "Negative<br>";
    } else {
        result += "Zero<br>";
    }

    result += "Numbers from 1 to " + num + ":<br>";

    for(let i=1;i<=num;i++){
        result += i + " ";
    }

    document.getElementById("numberResult").innerHTML = result;
}





function login(){

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user === "admin" && pass === "12345"){
        document.getElementById("loginResult").innerHTML = "Login Successful";
    } else {
        document.getElementById("loginResult").innerHTML = "Invalid Credentials";
    }
}