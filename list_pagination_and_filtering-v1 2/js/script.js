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

const studentList = document.querySelectorAll("li")
//const studentList_QuerySelectorAll = document.querySelectorAll("li")
//const studentList_QuerySelector = document.querySelector("li")
//const studentList_TagName = document.getElementsByTagName("li")

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

// page is the number that you’ll pass in as an argument later when function is called
// list parameter represents the actual list of students that you’ll pass in as an argument later when function is called
const showPage = (list, page) => {
  let startIndex = page * numberPerPage - numberPerPage
  let endIndex = page * numberPerPage
  let ul = document.getElementsByClassName("student-list")[0]
  //console.log("Start and end Index:")
  //console.log(startIndex)
  //console.log(endIndex)

  // hide list items
  for (let i = 0; i < list.length; i++) {
    list[i].style.display = "none"
    //console.log("hide all")
    //console.log(list[i])

    // show list items within the range
    if (i >= startIndex && i < endIndex) {
      list[i].style.display = ""
      //console.log("... but show this one:")
      //console.log(list[i])
      //ul.appendChild(list)
    }
  }
  return list
}
//console.log("line before showPage is called ...")
//showPage(studentList, 1)
//console.log("call showPage:")
//console.log(showPage(studentList, 1))

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

// PAGINATION

function appendPageLinks(list) {
  let pageTotal = list.length / numberPerPage
  pageTotal = Math.ceil(pageTotal)
  let pageCounter = "1"
  let tList = ""
  const pageDiv = document.getElementsByClassName("page")[0]

  // create pagination elements
  const pDiv = document.createElement("div")
  const ul = document.createElement("ul")
  //const li = document.createElement("li")
  //const a = document.createElement("a")

  // structure and add pagination elements to DOM
  pDiv.className = "pagination"
  pageDiv.appendChild(pDiv)
  pDiv.appendChild(ul)

  // loop through the list show only the display results
  for (i = 0; i < list.length; i++) {
    if (list[i].style.display == "") {
      tList = list[i]
    }
  }
  // loop through the pageTotal variable to create an li link for each page
  for (i = 1; i <= pageTotal; i++) {
    const li = document.createElement("li")
    const a = document.createElement("a")
    //let func = showPage(studentList, [i])
    //console.log(func)

    a.href = showPage(tList, [i]) // link must be to call this function??? showPage(studentList, [i])
    a.textContent = pageCounter++
    a.className = ""
    ul.appendChild(li)
    li.appendChild(a)

    a.addEventListener("click", e => {
      e.target = a
      if ((a.className = "active")) {
        a.className = ""
      } else {
        a.className = "active"
      }

      console.log("clicked")
      // call function - what should page arguement be?
      console.log(pageCounter)
    })
  }

  console.log(pDiv)

  // can't use (below) yet since the element currently doesn't exist in the DOM
  // ul.firstElementChild.a.className = "active"
}

appendPageLinks(showPage(studentList, 1))
//appendPageLinks(studentList)

// let ul = document.getElementsByClassName("pageNumbers")[0]
// ul.firstElementChild.className = "active"

// Remember to delete the comments that came with this file, and replace them with your own code comments.

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
