/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

// ***********************
// GLOBAL VARIABLES
// ***********************

// get students from html page as li elements
const studentList = document.querySelectorAll("li")
//results per page
const numberPerPage = 10

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

// ***********************
// PAGINATION
// ***********************

// appendPageLinks function - creates the pagination links
const appendPageLinks = list => {
  let pageTotal = list.length / numberPerPage
  pageTotal = Math.ceil(pageTotal)
  let pageCounter = "1"
  const pageDiv = document.getElementsByClassName("page")[0]

  // create pagination element containers
  const pDiv = document.createElement("div")
  const ul = document.createElement("ul")

  // structure and add pagination elements to DOM
  pDiv.className = "pagination"
  pageDiv.appendChild(pDiv)
  pDiv.appendChild(ul)

  // loop through the pageTotal variable to create an li link for each page
  for (let i = 1; i <= pageTotal; i++) {
    const li = document.createElement("li")
    let a = document.createElement("a")

    a.href = "#" // link will call the showPage function
    a.textContent = pageCounter++
    ul.appendChild(li)
    li.appendChild(a)

    // event listener added on link, calling the showPage function and setting an active state
    a.addEventListener("click", function (e) {
      e.target = a
      e.preventDefault()
      showPage(list, a.innerHTML)

      // loop over pagination links to remove active class from all links
      for (let i = 0; i < pageTotal; i++) {
        let lis = pDiv.getElementsByTagName("a")[i]
        lis.className = ""
      }

      // set classname to active
      a.className = "active"
    })
  }

  // activate first pagination link
  let lisFirst = pDiv.getElementsByTagName("a")[0]
  lisFirst.className = "active"
}

// initial call of showPage function is passed as an argument
appendPageLinks(showPage(studentList, 1))

// ***********************
// SEARCH
// ***********************

function search(list) {
  // Create and structure search elements
  const pageHeader = document.querySelector(".page-header")
  const divContainer = document.createElement("div")
  divContainer.className = "student-search"
  const input = document.createElement("input")
  input.type = "text"
  input.placeholder = "Search for students..."
  const button = document.createElement("button")
  button.innerText = "search"

  const ul = document.querySelector("ul")
  const noResults = document.createElement("li")
  noResults.innerHTML = "Sorry, no students by that name."

  // Append search to the page
  divContainer.appendChild(input)
  divContainer.appendChild(button)
  pageHeader.appendChild(divContainer)

  // Search functionality with button
  button.addEventListener("click", e => {
    let arr = []

    //let putList = document.getElementsByClassName("page")[0]
    //console.log(`${putList} is putList`)
    //putList = putList.children[1]
    let searchEntry = document.querySelector("input").value
    searchEntry = searchEntry.toLowerCase()
    //console.log(searchEntry)

    // console.log(`list is ${list} template literal outside of loop`)
    // console.log(list.innerHTML)
    // console.log(list.parentNode)
    // console.log(list.nextElementSibling)

    for (let i = 0; i < list.length; i++) {
      let namesList = document.getElementsByTagName("h3")[i]
      console.log(`searchEntry is ${searchEntry}`)

      // console.log(list[i].children)
      // console.log(list[i].parentNode)
      console.log(list[i].nextElementSibling)
      console.log(list[i])
      console.log(list[i].innerHTML)
      console.log(list[i].tagName == "h3")
      //console.log(namesList.textContent)

      // if results are found in namesList ...
      if (searchEntry === namesList.textContent) {
        // hide everything on the page in this loop ...
        for (let i = 0; i < list.length; i++) {
          list[i].style.display = "none"
        }
        //... then show only what was searched for by removing display "none"
        //namesList.parentNode.parentNode.style.display = ""
        let match = namesList.parentNode
        arr.push(match)
        console.log(arr)
      } // end if

      // 1. push search matches into the array
      // 2. then pass array to these functions
      // appendPagelinks(arr)
      // showPage(arr, 1)

      //
      // *** HAVING TROUBLE WITH ELSE IF ...
      // This shows the message, but over writes the search results from the if statement above.
      // Question: Since the 'if' block runs, why would the 'else if' run?
      //

      // else if there is a value typed in the search field and results are NOT found in namesList ...
      // else if (searchEntry.length !== 0 && searchEntry !== namesList.textContent) {
      //   console.log(namesList.textContent)
      //   for (let i = 0; i < list.length; i++) {
      //     list[i].style.display = "none"
      //   }
      //   // ... append the noResults HTML message
      //   putList.appendChild(noResults)
      // }
      // end else if
      //
      //
    }
  })
}

// call search and pass in studentList
search(studentList)
