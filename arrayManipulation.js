function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            return num * num; 
        } else {
            return num * 3; 
        }
    });
}




/* Task 2 */


// Function to process the array of numbers
function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            return num * num; // Square the even numbers
        } else {
            return num * 3; // Triple the odd numbers
        }
    });
}

// Function to format strings based on processed numbers
function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        const num = numbers[index];
        if (num % 2 === 0) {
            return str.toUpperCase(); // Capitalize the entire string if the number is even
        } else {
            return str.toLowerCase(); // Convert the string to lowercase if the number is odd
        }
    });
}

// Example usage:
const strings = ["Hello", "I", "AM", "an", "IT", "student"];
const numbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(numbers);
const formattedStrings = formatArrayStrings(strings, processedNumbers);

console.log(formattedStrings);
