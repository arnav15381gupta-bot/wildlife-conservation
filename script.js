// Simple alert function taught in basic JS classes
function showPopup() {
    alert("Thank you for your interest in protecting wildlife!");
}

// Basic form handling function
function submitForm(event) {
    event.preventDefault(); // Prevents page from refreshing
    
    var userName = document.getElementById("nameBox").value;
    
    // Display a simple confirmation message on the screen
    document.getElementById("successMessage").innerHTML = "Thank you, " + userName + "! Yo
