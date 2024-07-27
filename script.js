const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
let res="";
function checkpalindrome(event){
    event.preventDefault();
    const s=input.value;
    if(s.length==0){
        alert("Please enter a valid string");
        return;
    }
    if(s.length==1){
        res+=" is a palindrome.";
    }
}
button.addEventListener("submit",checkpalindrome);