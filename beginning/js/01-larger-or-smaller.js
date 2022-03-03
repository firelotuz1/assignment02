


// Larger or Smaller?
// Usage: Use simple conditional statements
// Create an application that accepts two integers within two separate prompts. 
// Then, display only the larger of the two within the browser window. 
// Don’t forget to handle the fact that the two could be equal.


let n1 = prompt("Choose number between 1-20");
let n2 = prompt("Choose a second number between 1-20");
if (n1 > n2) {
    document.write(n1)
} else if (n2 > n1) {
    document.write(n2)
} else if (n1 == n2) {
    document.write(n1)
}

