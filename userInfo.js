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

// Function to create user profiles
function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => {
        return {
            id: index + 1, // Auto-incremented ID starting from 1
            originalName: name,
            modifiedName: modifiedNames[index]
        };
    });
}


const names = ["Yaw", "Akosua", "yaa", "Kofi", "Juvelyn"];
const numbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(numbers);
const modifiedNames = formatArrayStrings(names, processedNumbers);
const userProfiles = createUserProfiles(names, modifiedNames);

console.log(userProfiles);

