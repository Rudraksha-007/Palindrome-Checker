const input = document.getElementById("strinp");
const button = document.getElementById("check-btn");
const res = document.getElementById("result");
function check() {
    if (input.value.length == 0) {
        alert("Invalid Input");
        return;
    }
    else if (input.value.length == 1) {
        res.innerHTML += `${input.value} is a palindrome`;
        res.style.display = "block";
        return;
    }
    else {
        let j = input.value.length - 1, i = 0;
        const cleaned_str = input.value.replace(/\s+/g, '').toLowerCase();
        while (i <= j) {
            if (cleaned_str[i] !== cleaned_str[j]) {
                res.innerHTML += `"${input.value}" is not a palindrome`;
                res.style.display = "block";
                return;
            }
            i++;
            j--;
        }
        res.innerHTML += `"${input.value}" is a palindrome`;
        res.style.display = "block";
    }
}
function clear_input() {
    res.innerHTML = " ";
}
button.addEventListener("click", clear_input);
button.addEventListener("click", check);
