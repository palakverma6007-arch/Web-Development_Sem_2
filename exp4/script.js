function calculateresult() { 
    let n = document.getElementById("subjects").value; 
    let total = 0; 

    for (let i = 1; i <= n; i++) { 
        let marks = parseFloat(prompt("Enter marks for subject " + i)); 
        
        // Validation
        if (isNaN(marks)) {
            alert("Please enter valid numeric marks!");
            return;
        }

        total += marks; 
    } 

    let average = total / n; 
    let grade = "";
    let result = ""; 

    if (average >= 90) { 
        grade = "A+"; 
        result = "Pass"; 
    } 
    else if (average >= 75) { 
        grade = "A"; 
        result = "Pass"; 
    } 
    else if (average >= 60) { 
        grade = "B"; 
        result = "Pass"; 
    } 
    else if (average >= 50) { 
        grade = "C"; 
        result = "Pass"; 
    } 
    else if (average >= 40) { 
        grade = "D"; 
        result = "Pass"; 
    } 
    else { 
        grade = "F";   
        result = "Fail"; 
    } 

    document.getElementById("result").innerHTML =
        "Total Marks: " + total + "<br>" +
        "Average Marks: " + average.toFixed(2) + "<br>" +
        "Grade: " + grade + "<br>" +
        "Result: " + result;
}