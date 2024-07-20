//Ryan Hutchings
//Unit 12.1 Exercise: Using foreach, map, and filter

/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr) {
    const doubleArr = []; //new array
    //forEach() iterates through an array
    arr.forEach(function (value, idx, arr) {
        doubleArr.push(value * 2); //makes all values double
    });
    return doubleArr; //return doubled array 
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr) {
    const evenNumbers = [];
    arr.forEach(function (number, idx, arr) {
        if (number % 2 === 0) evenNumbers.push(number); //adds even numbers to array
    });
    return evenNumbers;
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr) {
    const firstAndLastChar = [];//new array

    //Save first and last character
    let firstChar;
    let lastChar;
    arr.forEach(function (word, idx, arr) {
        //goes through each letter
        for (let char = 0; char < word.length; char++) {
            //first letter
            if (char === 0) firstChar = word[char];
            //last letter
            else if (char === word.length - 1) lastChar = word[char];
        }
        firstAndLastChar.push(firstChar + lastChar);//add letters to new array
    });
    return firstAndLastChar;
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr, key, value) {
    //goes through the array 
    arr.forEach(function (person, idx, arr) {
        person[key] = value; //adds title to the person
    });
    return arr; //return array with titles in it 
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str) {
    totalVowels = {}; //total of all vowels of word
    //convert str to lowercase and make it an array
    Array.from(str.toLowerCase()).forEach(function (char, idx, arr) {
        //checks each character for vowel
        if ('aeiou'.indexOf(char) !== -1) {
            //adds to vowel count
            if (!totalVowels[char]) totalVowels[char] = 1;
            else totalVowels[char] += 1;
        };
    });
    return totalVowels;
}

/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {
    //map makes a new array and doubles the value,but have to save to a variable
    const doubleArrMap = arr.map(function (number, idx, arr) {
        return number * 2; //double the values
    });
    return doubleArrMap;
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr) {
    const multiplyIndex = arr.map(function (value, idx, arr) {
        return value * idx; //multiplies by the index
    });
    return multiplyIndex;
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key) {
    const noKeyArr = arr.map(function (person, idx, arr) {
        return person[key]; //gets person's name to new array without adding key
    });
    return noKeyArr;
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr) {
    const fullName = arr.map(function (obj, idx, arr) {
        return `${obj.first} ${obj.last}`; //get first and last name
    });
    return fullName;
}

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
    const containsKey = arr.filter(function (person, idx, arr) {
        return person[key]; //will return the object only if there is a certain key
    });
    return containsKey;
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
    const searchedArray = arr.filter(function (value, idx, arr) {
        return value === searchValue; //returns value to new array only if it matches the search value
    });
    return searchedArray[0];//shows the first one found
}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
    const findKeyAndValue = arr.filter(function (personObj, idx, arr) {
        return personObj[key] === searchValue;
        //puts result of objects found in new array
    });
    return findKeyAndValue[0]; //shows only the first one found
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
    let noVowelsStr = ''; //new string
    Array.from(str.toLowerCase()).filter(function (char, idx, arr) {
        //checks for non-vowels
        if ('aeiou'.indexOf(char) === -1) {
            noVowelsStr += char; //adds the non-vowels to the new string
            return noVowelsStr;
        }
    });

    return noVowelsStr;
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
    const doubledOddNums = arr.filter(function (num, idx, arr) {
        return num % 2 !== 0; //getting only the odd numbers
    })
        .map(function (odd, idx2, arr2) {
            return odd * 2; //doubling the odd numbers
        });
    return doubledOddNums;
}
