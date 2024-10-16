// Function to perform Bubble Sort on an array of numbers
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Event listener for the "Sort" button
document.getElementById('sortButton').addEventListener('click', function () {
    const input = document.getElementById('numberInput').value.trim();
    
    if (input === "") {
        displayMessage("Please enter some numbers!", "error");
        return;
    }

    const numArray = input.split(',').map(num => parseFloat(num.trim()));

    if (numArray.some(isNaN)) {
        displayMessage("Invalid input! Make sure all entries are numbers.", "error");
    } else {
        const sortedArray = bubbleSort(numArray);
        document.getElementById('sortedOutput').textContent = sortedArray.join(', ');
        displayMessage("Numbers sorted successfully!", "success");

        // Clear the input field after sorting
        document.getElementById('numberInput').value = "";
    }
});

// Function to display status messages
function displayMessage(message, type) {
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    messageElement.className = type === "error" ? "error-message" : "success-message";

    const main = document.querySelector('main');
    main.appendChild(messageElement);

    // Remove the message after 3 seconds
    setTimeout(() => {
        messageElement.remove();
    }, 3000);
}
