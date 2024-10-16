// Simple bubble sort function to sort numbers in ascending order
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements if they are out of order
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Add click event listener to the "Sort" button
document.getElementById('sortButton').addEventListener('click', () => {
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
        document.getElementById('numberInput').value = ""; // Clear input after sorting
    }
});

// Display messages (success or error) below the content
function displayMessage(message, type) {
    const msg = document.createElement('p');
    msg.textContent = message;
    msg.className = type === "error" ? "error-message" : "success-message";

    const main = document.querySelector('main');
    main.appendChild(msg);

    // Remove the message after 3 seconds
    setTimeout(() => msg.remove(), 3000);
}
