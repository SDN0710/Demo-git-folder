// const ar = [2, 4, 6, 8, 10]
// console.log (ar)

// // alphaNumeric Type Array

// const array = [3, 5, 7, 9, "Subhajit".split("")]
// console.log(array)

// // Empty Array COnstructor

// const arConstructor = new Array (10)
// console.log(arConstructor)

// // Numeric Array Constructor

// const numConstructor = new Array(1, 3, 5)
// console.log(numConstructor)

// // mutating Method
//     // push() => to add element on right/ end

//     const fruits = ["apple", "banana", "Guava"]

//     fruits.push("watermelon")

//     console.log(fruits)

//     // pop() => to remove element from right/ end

//     fruits.pop()

//     console.log(fruits)

//     // shift() => to remove element from left/ front

//     fruits.shift()

//     console.log(fruits)

//     // unshift() => to add element on left/ front

//     fruits.unshift("Pineapple")

//     console.log(fruits)

//     // splice() => add any element in between the elements / remove multiple element and add

//     fruits.splice(1, 1, "Papaya")

//     console.log(fruits)

//     // reverse the placement of elements

//     console.log(fruits.reverse())

//     // sort() => to sort in ascending / decenting order in array

//     fruits.splice(1,0, "apple", "watermelon")

//     console.log(fruits)

//     // ascending order

//     console.log(fruits.sort())

//     // decending order (* not working )

//     console.log(fruits.sort((a,b) => b-a))  

// // Non - Mutating Method
//     // slice() 

//     const arr = [1, 2, 4, 6, 5]
//     const arr2 = ['Dog', 'Cat', 'Hamstar']

//     const slicedArr = arr.slice(0,2)

//     console.log(slicedArr)

//     const fantaArr = arr.slice(-3)

//     console.log(fantaArr)

//     //concat()

//     const mazzaArr = arr.concat(arr2)

//     console.log(mazzaArr)

//     // flat()

//     const ar2D = [[2,4,6,8],[3,5,7,9]]

//     console.log(ar2D.flat())

//     // map()

//         //by for loop

//     const mapping = ["LEO", "SAGITTARIUS", "LIBRA", "SPICES","VIRGO" ]

//     const convertToLowerCase = new Array ()

//     for(let zodiac of mapping) {
//         convertToLowerCase.push(zodiac.toLowerCase())
//     }

//     console.log(convertToLowerCase)

//         // by map()

//     const changeCase = mapping.map((zodc) => zodc.toLowerCase())

//     console.log(changeCase)

    // Search Method

    const arAnimal = ["TIGER", "LION", "ELEPHANT", "DEAR", "LION", "LION"]

    //indexOf()
    
    console.log(arAnimal.indexOf("LION"))

    console.log(arAnimal.indexOf("LION",2))

    //latIndexOf()

    console.log(arAnimal.lastIndexOf("LION"))

    //includes()

    console.log(arAnimal.includes("PEACOCK"))



    const findEli = arAnimal.find((val, index, obj) => {
        console.log(index, val, obj)
    })

    const animal = "DEAR";

    const findUser = arAnimal.find((animalName) => animalName === animal)

    console.log(findUser)

    const arr = [5, 8, 12, 76, 98];

    const found = arr.find((element) => element >20)

    console.log (found)

    const searchIndex = arr.findIndex((elem) => elem >20);

    console.log(searchIndex);

    // for each() does not return any array

    const ar = [1,3, 5, 7, 9]
    const iteratedArray = ar.forEach(()=>{})

    ar.forEach((element,index) => {
        console.log(index, element)

    })

    // map() return a new array

    const mappingArray = ar.map((element)=> element +5)
    console.log(mappingArray)

    const numberRange = [0,1,2,3,4,5,6,7,8,9]

    const onlyEvenNumberArray = numberRange.filter((element) => element %2 ===0)

    console.log(onlyEvenNumberArray)

    const oddNumberArray = numberRange.filter((element) => element %2 != 0)

    console.log(oddNumberArray)

    const bags = [1000, 2000, 3000, 5000, 10000, 50000, 100000]

    const rangeOfBags = bags.filter(bags => {
        if (bags > 2999 && bags <= 50000) 
            return bags
    })
    console.log(rangeOfBags)

    const inventoryValue = bags.reduce((acc,curr) => acc + curr , 500)
        console.log(inventoryValue)

        //H/W - reduceRight()

    const inventoryRange = bags.reduceRight((acc, curr) => {
            console.log(acc, curr)
    } ,0)

    const totalinventoryRange = bags.reduceRight((acc, curr) => acc + curr, 0)
        
        console.log (totalinventoryRange)

    const numeric = [0,1,2,3,4,5,6,7,8,9]
    console.log(numeric.every(num => num % 2 === 0))
    console.log(numeric.some(num => num % 2 ==0))

    // Array.from() - String value

    console.log (Array.from("Subhajit"))

    // Array.from() => number to array to reduce value

    const numberToArray = (Array.from(numeric))

    const convertionValue = numberToArray.reduce((acc,curr) => acc + curr , 0)
        console.log(convertionValue)

    //  Array.isArray() to verify boolean value

    console.log(Array.isArray(numeric))

    // to differenciate between Array.of() & new Array() - single digit & multilple digit

    console.log(Array.of(2), new Array (2))
    console.log(Array.of(2,4,8), new Array(3,6,9))

// Spread Operator

const numericValue = [2,4,6,8,10,12,14,16,18,20]

console.log(...numericValue)

console.log(...numericValue,"new array")

console.log([...numericValue,"new array"])

function sum(a,b,c){
    return a+b+c

}

const actualNum = [20, 40, 60]
console.log(sum(...actualNum))

const array = ["Optimus", "Prime", "Bumble", "Bee"]

console.log(array[0], array[1])

const fName = array[0]
const lName = array[1]

console.log(fName, lName)

// Array destructuring

const [fnm, lnm] = ["Optimus", "Prime", "Bumble", "Bee"]

console.log(fnm, lnm)

//Skippable Destructuring

const [ , ,fnm1, lnm1] = ["Optimus", "Prime", "Bumble", "Bee"]

console.log(fnm1, lnm1)





    
    















