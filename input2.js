// Fetch user details from session storage
let name = sessionStorage.getItem("name");
let rank = sessionStorage.getItem("rank");
let gender = sessionStorage.getItem("gender");
let caste = sessionStorage.getItem("caste");

// Display fetched details in the HTML
document.getElementById("welcome").innerHTML = name;
document.getElementById("_name").innerHTML = name;
document.getElementById("_rank").innerHTML = rank;
document.getElementById("_gender").innerHTML = gender;
document.getElementById("_caste").innerHTML = caste;

// Navigate to the previous page
function goback() {
    window.history.back();
}
