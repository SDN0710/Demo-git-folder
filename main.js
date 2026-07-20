// // Object

"use strict"

// const dotBracket ={
//     id: 147258,
//     userName: "SDN WheelJack",
//     password: "Qwerty@123",
//     address: "125 Netaji Subhas Road, Behala, Kolkata - 700060"
// }

// // // Dot Notation
// console.log ("Example of Dot Notation:", dotBracket.userName)

// // // Bracket Notation

// console.log("Example of Bracket Notation:", dotBracket["id"])

// // // live Example of Bracket Notation

// // //  Print only the key 

// for (let k in dotBracket) {
//     console.log(k)
// }

// // //  Print only the value

// for (let v in dotBracket) {
//     console.log(dotBracket[v])
// }

// // // CRUD Properties

// // //  Read properties

// console.log(dotBracket.userName)

// // // Create Properties

// dotBracket.phoneNumber = +919088025266

// console.log(dotBracket)

// // // Update Properties

// dotBracket.userName = "SDN BlackKnightKing"

// console.log(dotBracket)

// // // Delete Properties

// delete dotBracket.address 

// console.log(dotBracket)

// let del = delete dotBracket.phoneNumber // After property procecuted the result comes in Boolean format

// if (del = true) {
//     console.log("Hurray! Successfully Ph. No. deleted")
// } else {
//     console.log("Error: Phone Number not deleted its a bug")
// }

// //  checking presence of key in data

// console.log("userName" in dotBracket);

// // //  hasOwn()
// const obj = {}
// obj.name = "Bumble Bee"
// console.log(Object.hasOwn(obj,"name"))

// // Methods => function as Object properties

// const fun = {
//     personName : "Ratchet",
//     age : 31,

// //     // Setter Function ()
//     updateAge: function() {
//         this.age +=1;
//     },
//      updateAge1 () {
//         this.age +=1;
//     },

// //     // Getter Function()
//     printAge : function() {
//         console.log(this.age)
//     }
// }

// fun.updateAge()
// fun.updateAge()
// fun.printAge()

// // ShortHand Property

// fun.updateAge1()
// fun.printAge()

// let usersName = "Bulkhead"
// let age = 26
// const access =  {
//         usersName,
//         age,
//     }
// console.log (access)

// console.table({usersName, age})

// const key = "isMarried"
// const isMarriedVal = false
// const obj = {
//     id: 258963,
//     [key]: isMarriedVal,
// }

// const {id, isMarried} = obj
// console.log(id, isMarried)

// const key1 = "isMarried1"
// const isMArrieVal = true
// const obj1 = {
//     id1: 789456,
//     [key1]: isMArrieVal,
//     data:{
//         userName: "Optimus",
//         address: "Cybertron"
//     }
// }
// const {id1} = obj1
// const {userName, address} =  obj1.data
// console.log(id1,userName)

// const {id2, data:{userName, address}} = obj1
// console.log(id1,address)

// const {id3, data:{userName:user_Name, address}} = obj1
// console.log(id1,user_Name)

// const key2 = "isMarried2"
// const isMArrieVal2 = false
// const obj2 = {
//     id2: 456123,
//     [key2]: isMArrieVal2,
//     data:{
//         userName: "Bluesteak",
//         address: "Cybertron"
//     }
// }

// const copyobj = {...obj2}
// console.log(copyobj)

// const copyobj1 = {...obj2}
// console.log(Object.keys(obj2))

// const copyobj2 = {...obj2}
// console.log(Object.values(obj2))

// const copyobj3 = {...obj2}
// console.log(Object.entries(obj2))

// const copyobj4 = {...obj2}
// console.log(Object.entries(obj2).flat())

// const copyobj5 = {...obj2}
// const targetToObj = {}

// const assignedObj = Object.assign(targetToObj,obj2)
// console.log(targetToObj)

// const assignToObj = Object.freeze(obj2)

// obj2.isMarried2 = true
// console.log(assignToObj)

// const assign1ToObj = Object.seal(obj2)

// obj2.isMarried2 = true
// console.log(assign1ToObj)

// const newObj = Object.create(obj2)

// newObj.isHuman = false

// console.log ((newObj).data)





