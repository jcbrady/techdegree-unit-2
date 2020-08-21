/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

// ***********************
// GLOBAL VARIABLES
// ***********************

// get students from html page as li elements
const studentList = document.querySelectorAll("li")
//results per page
const numberPerPage = 10

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

// ***********************
// CONTENT TO SHOW ON PAGE
// ***********************

// page represents the number of pages needed for pagination
// list represents the actual list of students
const showPage = (list, page) => {
  /* math formula 
takes the page parameter in this function and the numberPerPage global variable 
to figure out the beginning and end index of the list items to show on each page
*/
  let startIndex = page * numberPerPage - numberPerPage
  let endIndex = page * numberPerPage

  // hide all the list items
  for (let i = 0; i < list.length; i++) {
    list[i].style.display = "none"

    // show list items within the start and end range
    if (i >= startIndex && i < endIndex) {
      list[i].style.display = ""
    }
  }
  // return the list results to show and hide, based on the math formula
  return list
}

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

// ***********************
// PAGINATION
// ***********************

function appendPageLinks(list) {
  let pageTotal = list.length / numberPerPage
  pageTotal = Math.ceil(pageTotal)
  let pageCounter = "1"
  const pageDiv = document.getElementsByClassName("page")[0]

  // create pagination element containers
  const pDiv = document.createElement("div")
  const ul = document.createElement("ul")
  //const li = document.createElement("li")
  //const a = document.createElement("a")

  // structure and add pagination elements to DOM
  pDiv.className = "pagination"
  pageDiv.appendChild(pDiv)
  pDiv.appendChild(ul)

  // loop through the list to filter style.display results
  // for (i = 0; i < list.length; i++) {
  //   if (list[i].style.display == "") {
  //     theList = list[i]
  //   }
  // }

  // loop through the pageTotal variable to create an li link for each page
  for (i = 1; i <= pageTotal; i++) {
    const li = document.createElement("li")
    let a = document.createElement("a")
    //let func = showPage(studentList, [i])
    //console.log(func)

    a.href = "#" // link will call the showPage function
    a.textContent = pageCounter++
    a.className = ""
    ul.appendChild(li)
    li.appendChild(a)

    //console.log(showPage(theList, [i]))

    a.addEventListener("click", function (e) {
      e.target = a
      e.preventDefault()
      //a.href = showPage(studentList, pageCounter++)

      if ((a.className = "active")) {
        a.className = ""
      } else {
        a.className = "active"
      }
      console.log("pagination clicked " + a.innerHTML)
      showPage(list, a.innerHTML)
    })
  }

  console.log(pDiv)
}

// initial call of showPage function is passed as an argument
appendPageLinks(showPage(studentList, 1))

// Remember to delete the comments that came with this file, and replace them with your own code comments.

// HTML structure
/* <div class="pagination">
<ul>
<li>
  <a class="active" href="#">1</a>
</li>
 <li>
  <a href="#">2</a>
</li>
 <li>
  <a href="#">3</a>
</li> */
