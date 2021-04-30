document.getElementById('changer').addEventListener('click', myFunction) // When the button with id 'changer' is clicked, the 'myFunction' function is triggered and the paragraph color and font are changed

function myFunction () {
  document.getElementById('cool').style.color = 'red' // Changes color of text to red
  document.getElementById('cool').style.fontFamily = 'Arial' // This changes the font family
  document.getElementById('cool').style.fontSize = '325%' // This changes the font size
}
