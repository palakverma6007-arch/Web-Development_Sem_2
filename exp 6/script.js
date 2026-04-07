let fontSize = 16; 
let visible = true; 
function changeHeading() { 
const text = document.getElementById("inputText").value; 
const heading = document.getElementById("heading"); 
if (text.trim() !== "") { 
heading.innerText = text; 
} else { 
heading.innerText = "Welcome to JavaScript Lab"; 
} 
} 
function changeBackground() { 
const colors = ["#f2f2f2", "#ffcccc", "#ccffcc", "#cce5ff", "#fff0b3"]; 
const randomColor = colors[Math.floor(Math.random() * colors.length)]; 
document.body.style.backgroundColor = randomColor; 
} 
  
  
function increaseFont() { 
    fontSize += 2; 
    document.getElementById("para").style.fontSize = fontSize + "px"; 
} 
  
  
function toggleParagraph() { 
    const para = document.getElementById("para"); 
  
    if (visible) { 
        para.style.display = "none"; 
        visible = false; 
    } else { 
        para.style.display = "block"; 
        visible = true; 
    } 
} 
  
  
function resetPage() { 
    document.getElementById("heading").innerText = "Welcome to JavaScript Lab"; 
    document.body.style.backgroundColor = "#f2f2f2"; 
    document.getElementById("para").style.fontSize = "16px"; 
    document.getElementById("para").style.display = "block"; 
document.getElementById("inputText").value = ""; 
fontSize = 16; 
visible = true; 
}