// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

// Create a test with describe, it, and three expects.
// Fail test

describe("codedMessage", () => {
    it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
        const secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        const secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
        const secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"
        expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

// RED
// FAIL  ./code-challenges.test.js
// codedMessage
//   ✕ takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. (1 ms)
// ● codedMessage › takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
//   ReferenceError: codedMessage is not defined

// b) Create the function that makes the test pass.

// Create a function named codedMessage that takes in a string as it's parameter
// Replace both lowercase and capital a with 4
 // Do the same for the other chars. e with 3, i with 1, o with 0
// Return the edited string
// Pass test

const codedMessage1 = (string) => {
    noA = string.replaceAll(/[aA]/g, '4')
    noE = noA.replaceAll(/[eE]/g, '3')
    noI = noE.replaceAll(/[iI]/g, '1')
    noO = noI.replaceAll(/[oO]/g, '0')
    return noO
}

// GREEN
// PASS  ./code-challenges.test.js
// codedMessage
//   ✓ takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. (2 ms)

// REFACTOR 

const codedMessage = (string) => {
    return string.replaceAll(/[Aa]/g, 4).replaceAll(/[Ee]/g, 3).replaceAll(/[Ii]/g, 1).replaceAll(/[Oo]/g, 0)
}

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

// Create a test with describe, it, and two expects.
// Fail test

describe("wordContaining", () => {
    it("takes in an array of words and a single letter and returns all the words that contain that particular letter.", () => {
        const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
        const letterA = "a"
        // Expected output: ["Apple", "Banana", "Orange"]
        const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
        const letterE = "e"
        // Expected output: ["Cherry", "Blueberry", "Peach"]
        expect(wordContaining(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
        expect(wordContaining(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

// RED 
// FAIL  ./code-challenges.test.js
// wordContaining
//   ✕ takes in an array of words and a single letter and returns all the words that contain that particular letter. (1 ms)
// ● wordContaining › takes in an array of words and a single letter and returns all the words that contain that particular letter.
//   ReferenceError: wordContaining is not defined

// b) Create the function that makes the test pass.

// Create a function named wordContaining that takes in array of strings and a letter as its parameters
// Iterate through the array filtering out anything that is false
// Search each string for a substring of letter
// do the same for capitals in string
// Pass test

const wordContaining = (array, letter) => {
    return array.filter(string => {
        return string.search(letter) != -1 || string.search(letter.toUpperCase()) != -1 
    })
}

// GREEN
// PASS  ./code-challenges.test.js
// wordContaining
//   ✓ takes in an array of words and a single letter and returns all the words that contain that particular letter. (1 ms)

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

// Create a test with describe, it, and three expects.
// Fail test

describe("fullHouse", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.", () => {
        const hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
        const hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
        const hand3 = [5, 5, 5, 5, 4]
        // Expected output: false
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
    })
})

// RED
// FAIL  ./code-challenges.test.js
//   ✕ takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind. (1 ms)
// ● fullHouse › takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.
//   ReferenceError: fullHouse is not defined

// b) Create the function that makes the test pass.

// Create a function fullHouse that takes in an array of numbers
// Sort the array and store it in a local variable 
// Create a conditional that checks if the array length is anything other than 5 and return false
// If your array is 5 numbers then check for the first index and last being the same, if true then return false, this will make sure someone doesn't enter 5 of the same number
// If index 0 and 1 are equal to eachother and index 2 and 4 are equal or index 3 and 4 are equal and index 0 and 2 are equal then return true else return false
// Pass test

const fullHouse = (array) => {
    sorted = array.sort((a, b) => a - b)
    return array.length != 5 ? false : sorted[0] === sorted[4] ? false : sorted[0] === sorted[1] && sorted[2] === sorted[4] || sorted[3] === sorted[4] && sorted[0] === sorted[2] ? true : false
} 

// GREEN 
// PASS  ./code-challenges.test.js
// fullHouse
//   ✓ takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind. (26 ms)

// This was my first big brain idea, but I got caught by the third test ;-;
// array.length != 5 ? false : dupeSet = new Set([...array])
// return [...dupeSet].length != 2 ? false : true