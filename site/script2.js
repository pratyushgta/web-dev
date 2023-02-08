// DOM Manipulation
console.log(document.getElementById("title"));
console.log(document instanceof Document);

function sayHello() {
    var name = document.getElementById("name").value;
    var message = "<h2>Hello " + name + "</h2>";

    document
        .getElementById("content")
        //.textContent = message;
        .innerHTML = message;

    if (name === "student") {
        var title = //retrieve title
            document
                .querySelector("#title") //takes selector instead of id name. basically css selector
                .textContent;

        title += " & lovin' it!";
        document
            .querySelector("#title") //takes selector instead of id name. basically css selector
            .textContent = title;
    }

} 

document.querySelector("button")
.addEventListener("click",sayHello);