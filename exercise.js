// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
//    - Select the second button by using an "id"
// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
//    - Output the second button WITHOUT using the variable in which it's stored
// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue
// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!

// 01-------------------------------------------------------------------------------------------------------------------------
let firstButton = document.body.children[2].children[4];

let secondButton = document.getElementById("second-button");

// 03-------------------------------------------------------------------------------------------------------------------------

let firstParagraph = document.body.children[2].children[1];

let thirdParagraph = document.body.children[2].children[3];

// let thirdParagraph = firstParagraph.nextElementSibling.nextElementSibling;
// this is another way of selecting the 3rd paragraph

// 02-------------------------------------------------------------------------------------------------------------------------
// 04-------------------------------------------------------------------------------------------------------------------------
// 05-------------------------------------------------------------------------------------------------------------------------

function firstFunction() {
  console.dir(firstButton);
  thirdParagraph.remove();
}

firstButton.addEventListener("click", firstFunction);
// Make sure you don't add () after firstFunction in the above line.
// I added those accidentally and it took me a lot of time to figure out what's wrong in my code.

function secondFunction(eventParameter) {
  console.dir(eventParameter.target);
  // firstParagraph.style.backgroundColor = "blue";
  firstParagraph.classList.add("bg-color");
  // This means the "bg-color" class is added to the first paragraph element when the 2nd button is clicked
  // The css rules defined on the .bg-color will get executed once the class is added to the paragraph like this.
}

secondButton.addEventListener("click", secondFunction);

