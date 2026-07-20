// // Document Object Model (DOM)
// console.log(document)
// // document.getElementByID

// const heading = document.getElementById("heading")
// const queryOutput = document.querySelector(".paragraph")
// const querySelectorId = document.querySelector("#heading")
// const querySelectorAllOutput = document.querySelectorAll(".paragraph")

// console.log(heading, queryOutput, querySelectorId)

// console.log(querySelectorAllOutput.length)

// // getElementByClassName()

// const classSelector = document.getElementsByClassName("paragraph")

// console.log(querySelectorAllOutput.keys())
// console.log(classSelector.item(1))
// console.log(Array.from(classSelector))

// const wrapperDiv = document.querySelectorAll(".wrapper")

// const wrapperDivClass = document.getElementsByClassName("wrapper")
// const wrapperDivWithClassSelector = document.getElementsByClassName("wrapper")

// const tagNameOutput = document.getElementsByTagName("a")

// console.log (tagNameOutput)

// console.log(wrapperDiv)
// console.log(wrapperDivWithClassSelector)

// console.log(wrapperDivClass[0].innerHTML)
// console.log(wrapperDiv[0].innerHTML)

// wrapperDiv[0].innerHTML = "<h1>This is a dynamic heading</h1>"

// queryOutput.textContent =" This is being changed"

// const wrapper = document.getElementById("wrapper")
// const img = document.getElementById("img-tag")

// // innerHTML()

// console.log(wrapper.innerHTML)

// // textContent()

// console.log(wrapper.textContent)

// // innerText()

// console.log(wrapper.innerText)

// // getAttribute()

// const imgAttributes = img.getAttribute("src")

// console.log(imgAttributes)

// // getAttributeNames() -> only keys

// const getAllAttributes = img.getAttributeNames()

// console.log(getAllAttributes)

// // getAttributeNames() -> for all data (both key & value)

// getAllAttributes.forEach((att) => {
//     console.log(`${att}:${img.getAttribute(att)}`)
// })

// // setAttribute()

// const imgTag = document.getElementById("img_Tag2")

// imgTag.setAttribute("src","https://placehold.co/100x200")
// imgTag.setAttribute("style","border:2px solid black")

// img.setAttribute("style","border:5px dotted purple")

// // removeAttribute()

// imgTag.removeAttribute("src","https://placehold.co/100x200")

// // classList.add()

// const heading = document.getElementById("heading")

// heading.classList.add("underline", "text-red-500")

// // classList.remove()

// heading.classList.remove("text-red-500")

// // EventListener

// const toggleButton = document.getElementById("toggle-Button")

// toggleButton.addEventListener("click",() => {

//     //  classList.toggle()


//     toggleButton.classList.toggle("bg-green-500")
//     toggleButton.classList.toggle("bg-red-500")
// })

// // classList.contains()

// console.log(toggleButton.classList.contains("bg-green-500"))

console.log("Hello world")







