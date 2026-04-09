/* Pass the 'e' (event) into the function */
function myFunction(e) {
  // Prevent the link from jumping the page to the top
  if (e) e.preventDefault(); 
  
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  // We check if the click was NOT on the toggle link
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}