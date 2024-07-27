const input=document.getElementById("strinp");
const button=document.getElementById("check-btn");
const res=document.getElementById("result");
function check(){
    if(input.value.length==0){
        alert("Invalid Input");
        return;
    }
    else if(input.value.length==1){
        res.innerHTML+=`${input.value} is a palindrome`;
        res.style.display="block";
        return;
    }
    else{
        let j=input.value.length-1;
        for(let i=0;i<input.value.length;i++,j--){
            if(input.value[i]===' '){
                continue;
            }
            if(input.value[i]!==input.value[j]){
                res.innerHTML+=`${input.value} is not a palindrome`;
                res.style.display="block";
                return;
            }
        }
        res.innerHTML+=`${input.value} is a palindrome`;
                res.style.display="block";
    }
    
}
function clear_input(){
    res.innerHTML=" ";
}
button.addEventListener("click",clear_input);
button.addEventListener("click",check);