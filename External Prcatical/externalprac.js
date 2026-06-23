function generateTable() {

    let number = document.getElementById("num").value;
    let output = "";

    if (number === "") {
        document.getElementById("result").innerHTML =
            "Please enter a number!";
        return;
    }

    for (let i = 1; i <= 10; i++) {
        output += number + " × " + i + " = " + (number * i) + "<br>";
    }

    document.getElementById("result").innerHTML = output;
}