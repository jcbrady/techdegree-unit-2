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
const pages = 2

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
function showPage(list, page) {
  let itemsPerPage = 10
  let startIndex = page * itemsPerPage - itemsPerPage
  let endIndex = page * itemsPerPage
  console.log(startIndex)
  console.log(endIndex)

  for (let i = 0; i < list.length; i++) {
    list[i].style.display = "none"
    //console.log(list[i])

    if (i < startIndex && i < endIndex) {
      list[i].style.display = ""
    }
  }
}

showPage(studentList, pages)

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

function appendPageLinks(links) {
  const pageDiv = document.getElementsByClassName("page")[0]
  const pDiv = document.createElement("div")
  const ul = document.createElement("ul")
  const li = document.createElement("li")
  const a = document.createElement("a")

  console.log(pDiv)

  pDiv.className = "pagination"
  //ul.className = "pageNumbers"
  pageDiv.appendChild(pDiv)
  pDiv.appendChild(ul)
  ul.appendChild(li)
  a.href = "#"
  li.appendChild(a)

  // can't use (below) yet since the element doesn't yet exist in the DOM
  //ul.firstElementChild.a.className = "active"
}

appendPageLinks()

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
