 function calculateResult() {
            let s1 = parseFloat(document.getElementById("s1").value);
            let s2 = parseFloat(document.getElementById("s2").value);
            let s3 = parseFloat(document.getElementById("s3").value);
            let s4 = parseFloat(document.getElementById("s4").value);
            let s5 = parseFloat(document.getElementById("s5").value);

            let total = s1 + s2 + s3 + s4 + s5;
            let percentage = total / 5;

            let grade = "";

            if (percentage >= 75) {
                grade = "Distinction";
            } else if (percentage >= 60) {
                grade = "First Class";
            } else if (percentage >= 50) {
                grade = "Second Class";
            } else {
                grade = "Fail";
            }

            document.getElementById("result").innerHTML =
                "Total Marks: " + total + "<br>" +
                "Percentage: " + percentage.toFixed(2) + "%<br>" +
                "Result: " + grade;
        }