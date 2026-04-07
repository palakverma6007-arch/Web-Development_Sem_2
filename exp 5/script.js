let employees = [];

function addEmployee() { 
    let name = document.getElementById("name").value.trim(); 
    let id = document.getElementById("id").value.trim(); 
    let salary = parseFloat(document.getElementById("salary").value); 
    let dept = document.getElementById("dept").value.trim(); 


    if (name === "" || id === "" || dept === "" || isNaN(salary)) {
        alert("Please fill all fields correctly!");
        return;
    }

    let emp = { 
        name: name, 
        id: id, 
        salary: salary, 
        dept: dept 
    }; 

    employees.push(emp); 
    alert("Employee Added ");


    document.getElementById("name").value = "";
    document.getElementById("id").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("dept").value = "";
} 

function displayEmployees() { 
    let text = ""; 

    if (employees.length === 0) {
        text = "No employees found!";
    } else {
        for (let e of employees) { 
            text += `Name: ${e.name} | ID: ${e.id} | Salary: ${e.salary} | Department: ${e.dept}<br>`;
        } 
    }

    document.getElementById("output").innerHTML = text; 
} 

function filterSalary() { 
    let text = ""; 

    for (let e of employees) { 
        if (e.salary > 50000) { 
            text += `${e.name} | ${e.salary}<br>`; 
        }
    } 

    document.getElementById("output").innerHTML =
        text || "No employees with salary > 50000";
} 

function totalSalary() { 
    let total = 0; 

    for (let e of employees) { 
        total += e.salary; 
    } 

    document.getElementById("output").innerHTML = "Total Salary = " + total; 
} 

function averageSalary() { 
    if (employees.length === 0) {
        document.getElementById("output").innerHTML = "No employees to calculate average!";
        return;
    }

    let total = 0; 

    for (let e of employees) { 
        total += e.salary; 
    } 

    let avg = total / employees.length; 

    document.getElementById("output").innerHTML = 
        "Average Salary = " + avg.toFixed(2); 
} 

function countDepartment() { 
    let d = prompt("Enter Department Name"); 
    let count = 0; 

    for (let e of employees) { 
        if (e.dept.toLowerCase() === d.toLowerCase()) { 
            count++; 
        }
    } 

    document.getElementById("output").innerHTML = 
        "Employees in " + d + " = " + count; 
}