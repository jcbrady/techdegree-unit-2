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

  // Append search to the page
  divContainer.appendChild(input)
  divContainer.appendChild(button)
  pageHeader.appendChild(divContainer)

  // Search Functionality
  // mystery - why does searchEntry declared as below console.log as no value, unless it's declared in the eventListener?
  //let searchEntry = document.querySelector("input").value

  button.addEventListener("click", e => {
    let searchEntry = document.querySelector("input").value
    searchEntry = searchEntry.toLowerCase()
    console.log(searchEntry)
    for (let i = 0; i < list.length; i++) {
      //list[i]
      let namesList = document.getElementsByTagName("h3")[i]
      //console.log(namesList.textContent)
      if (searchEntry !== 0 && searchEntry == namesList.textContent) {
        // console.log(list[i])
        namesList.parentNode.parentNode.style.backgroundColor = "blue"
        //namesList.parentNode.parentNode.style.display = "none"
      }
    }
  })

  input.addEventListener("keyup", e => {
    // e.target is the input box in this case
    let searchEntry = document.querySelector("input").value
    searchEntry = searchEntry.toLowerCase()

    console.log("searchEntry is ...")
    console.log(searchEntry)

    for (let i = 0; i < list.length; i++) {
      //console.log(list[i])
      let namesList = document.getElementsByTagName("h3")[i]

      // use of indexOf() is interesting but not quite what I'm after:
      //console.log("indexOf test: ")
      //console.log(namesList.textContent.indexOf(searchEntry))

      // if (searchEntry == namesList.textContent.indexOf(searchEntry)) {
      //   namesList.parentNode.parentNode.style.display = ""
      //   list[i].style.display = "none"
      // }

      if (searchEntry !== 0 && searchEntry == namesList.textContent) {
        // hide everything on the page
        for (let i = 0; i < list.length; i++) {
          list[i].style.display = "none"
        }

        //show only what was searched for
        namesList.parentNode.parentNode.style.display = ""

        //console.log(namesList.parentNode.parentNode)
        //console.log(searchEntry)
        //.style.display = "none"
        //e.target.parentNode.parentNode.className = "active"
        //e.target.style.backgroundColor = "blue"
        //e.target.parentNode.parentNode.style.display = "none"
        //console.log(e.target.value) // iboya vat
      }
    }
    searchEntry = ""
    //console.log("keyup was triggered")
  })
}

search(studentList)
