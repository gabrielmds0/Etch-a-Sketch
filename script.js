const container = document.querySelector('.container');
const button = document.getElementById('createGridButton');

// Function to create a grid based on the specified size
function createGrid(size) {
    // Clear the existing grid
    container.innerHTML = '';

    // Calculate the new size for each square based on the total area
    const totalWidth = 960; // Total width in pixels
    const squareSize = totalWidth / size; // Size of each square

    // Create new squares
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        // Add mouse event listeners for hover effect
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'lightgreen'; // Change to your desired hover color
        });

        square.addEventListener('mouseleave', () => {
            square.style.backgroundColor = ''; // Reset the background color
        });

        container.appendChild(square);
        square.style.width = `${squareSize}px`; // Set square width
        square.style.height = `${squareSize}px`; // Set square height
    }
}

// Initial grid setup
createGrid(16); // Default grid size

// Button click event listener
button.addEventListener('click', () => {
    const userInput = prompt("Enter the number of squares per side (max 100):");

    if (userInput !== null) { // Check if user clicked 'Cancel'
        const size = parseInt(userInput);

        if (!isNaN(size) && size > 0 && size <= 100) {
            createGrid(size); // Create a new grid with the specified size
        } else {
            alert("Please enter a valid number between 1 and 100.");
        }
    }
});
