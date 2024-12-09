function saveName() {
    let sname = document.getElementById("sname").value;
    let fname = document.getElementById("fname").value;
    let rank = document.getElementById("erank").value;
    let caste = document.getElementById("casteState").value;
    sessionStorage.setItem("sname", sname);
    sessionStorage.setItem("name", fname);
    sessionStorage.setItem("rank", rank);
    sessionStorage.setItem("caste", caste);
    window.location.href = "input2.html";
}

function male() {
    console.log("Male");
    let gender = document.getElementsByName('gridRadios')[0].value;
    sessionStorage.setItem("gender", gender);
}

function female() {
    console.log("Female");
    let gender = document.getElementsByName('gridRadios')[1].value;
    sessionStorage.setItem("gender", gender);
}
