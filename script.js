
var searchBox = document.getElementById("searchBox");

searchBox.addEventListener("input", handleSearch);

function handleSearch() {
    var search = searchBox.value.toLowerCase();
    var matchs = document.getElementsByClassName("match");

    for (var i = 0; i < matchs.length; i++) {
        var result = matchs[i].innerText;
        if (result.toLowerCase().indexOf(search) > -1) {
            matchs[i].style.display = "";
        } else {
            matchs[i].style.display = "none";
        }
    }
}

function handleChange(e) {
    let choice = document.getElementById("tournament");
    let league = document.getElementById("League");
    let cup = document.getElementById("Cup");
    let champions = document.getElementById("Champions");

    if (choice.value === "League") {
        league.classList.remove("hidden");
        cup.classList.add("hidden");
        champions.classList.add("hidden");
    } else if (choice.value === "Cup") {
        cup.classList.remove("hidden");
        league.classList.add("hidden");
        champions.classList.add("hidden");
    } else if (choice.value === "Champions") {
        champions.classList.remove("hidden");
        league.classList.add("hidden");
        cup.classList.add("hidden");
    } else {
        league.classList.remove("hidden");
        cup.classList.remove("hidden");
        champions.classList.remove("hidden");
    }
}
