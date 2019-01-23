// let outputEl = document.getElementById("output-target")

// /*
//     You can get a reference to DOM elements and
//     directly attach an event handler. In this
//     example, we get every element with a class of
//     "article-section" and listen for when the
//     user clicks on the element. When that event
//     fires, the attached "handleSectionClick"
//     function gets executed.
//  */
// let articleEl = document.getElementsByClassName("article-section")
// let header = document.querySelector("#page-header")

// /*
//     JavaScript, in the browser, automatically send the source
//     event to the handler function for the event.
// */
// function handleSectionClick (event) {
//     console.log(event)
// }

// for (let i = 0; i < articleEl.length; i++) {
//     articleEl.item(i).addEventListener("click", handleSectionClick)
// }

// /*
//     Define functions that hold logic to be performed when mouse
//     events are triggered by the browser.
// */
// function handleHeaderMouseOver (event) {
//     outputEl.innerHTML = "You moved your mouse over me"
// }

// function handleHeaderMouseOut(event) {
//     outputEl.innerHTML = "Why u leave me?"
// }

// /*
//     Get a reference to the DOM element with an id of
//     "page-header", and attach an event handler for the
//     mouseover, and mouseout, events.
//  */
// header.addEventListener("mouseover", handleHeaderMouseOver)
// header.addEventListener("mouseout", handleHeaderMouseOut)



// /*
//     We can also write an anonymous function (lamba expression)
//     in the addEventListener declaration instead of using a
//     function reference.
//  */
// let fieldEl = document.getElementById("keypress-input")

// fieldEl.addEventListener("keyup", function (event) {
//     outputEl.innerHTML = event.target.value
// })


// /*
//   Now we can start making a truly interactive experience
//   combining HTML, JavaScript and CSS. When a user clicks
//   on a button in the DOM, we can listen for that event in
//   JavaScript, and then add, or remove, CSS classes.

//   In this example, I simply use the `toggle()` method on
//   the `classList` property of a DOM element to automatically
//   add and remove a class.
//  */
// let guineaPig = document.getElementById("guinea-pig")

// function toggleClass (newClass) {
//   guineaPig.classList.toggle(newClass)
//   console.log("guineaPig.classList", guineaPig.classList)
// }

// document.getElementById("add-color").addEventListener("click", function() {
//     toggleClass("blue")
// })

// document.getElementById("make-large").addEventListener("click", function() {
//     toggleClass("large")
// })

// document.getElementById("add-border").addEventListener("click", function() {
//     toggleClass("bordered")
// })

// document.getElementById("add-rounding").addEventListener("click", function() {
//     toggleClass("rounded")
// })


// /*
//   EVENT BUBBLING:

//   You can add an event handler on the body tag, and since all
//   browser events bubble up to the body, you can then put in
//   conditional logic to handle the click event on many different
//   elements in one function.
//  */
// document.querySelector("body").addEventListener("click", function(event) {
//     console.log("You clicked on the body of the DOM")
// })







// // **********Practice Exercise Mirror Mirror In The Code********************
// let mirrorEl = document.querySelector("#message");

// mirrorText = function (event) {
//     let mirrorOutputs = document.querySelectorAll(".messageArticle");
//     mirrorOutputs.forEach(element => {
//         element.textContent = event.target.value;
//     });
// }

// mirrorEl.addEventListener("keyup", mirrorText);








// // ******************Practice Exercise Scrolling and Scaling *************************
// const audrey = document.getElementById("audrey")

// const resize = function (event) {
//     console.log(window.scrollY)
//     if (window.scrollY > 50) {
//         let width = window.scrollY / 3;
//         audrey.style.width = `${width}px`
//     }
//     if (window.scrollX > 100) {
//         let height = window.scrollX / 4;
//         audrey.style.height = `${height}px`
//     }
// }

// window.addEventListener("scroll", resize);







// ***************** Wonder Powers Activate**********************************

// const powerHandlerFunction = function (event) {
//     let power = event.target.id.replace("activate-", "")
//     let classesToSwitch = ["disabled", "enabled"];
//     classesToSwitch.forEach(className => {
//         document.querySelector(`#${power}`).classList.toggle(className)
//     });
// }

// const activateAllPowers = function (event) {
//     let powers = document.querySelectorAll(".power")
//     powers.forEach(power => {
//         power.classList.remove("disabled")
//         power.classList.add("enabled")
//     });
    
// }

// const deactivateAllPowers = function (event) {
//     let powers = document.querySelectorAll(".power")
//     powers.forEach(power => {
//         power.classList.remove("enabled")
//         power.classList.add("disabled")
//     });

// }

// document.querySelector("#activate-flight").addEventListener("click", powerHandlerFunction)

// document.querySelector("#activate-mindreading").addEventListener("click", powerHandlerFunction)

// document.querySelector("#activate-xray").addEventListener("click", powerHandlerFunction)

// document.querySelector("#activate-all").addEventListener("click", activateAllPowers)

// document.querySelector("#deactivate-all").addEventListener("click", deactivateAllPowers)











// *****************************One Function to Rule Them All**********************************

// answered above in wonder powers activate









// *********************Dynamic Cards ***********************************
let cardCounter = 0;

const makeCardHTML = function (cardText, cardCounter ) {
    return `
    <article class="card" id="card--${cardCounter}">
        <div>${cardText}</div>
        <div>
            <button id="delete--${cardCounter}">Delete This Card</button>
        </div>
    </article>
    `
}

const removeCardHTML = function () {
    let id = event.target.id.replace("delete--" ,"");
    let cardToBeDeleted = document.querySelector(`#card--${id}`);
    let bucket = document.querySelector("#cardBucket");
    bucket.removeChild(cardToBeDeleted);
}

const makeCard = function () {
    let bucket = document.querySelector("#cardBucket")
    cardCounter ++;
    bucket.innerHTML += makeCardHTML(document.querySelector("#cardInput").value, cardCounter)
    let newCardButton = document.querySelector(`#delete--${cardCounter}`);
    newCardButton.addEventListener("click", removeCardHTML)
}

document.querySelector("#cardCreate").addEventListener("click", makeCard)
