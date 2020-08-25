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
      //  e.target = a
      //  e.preventDefault()
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
    //console.log(arr)
    let searchEntry = document.querySelector("input").value
    searchEntry = searchEntry.toLowerCase()

    for (let i = 0; i < list.length; i++) {
      console.log(`searchEntry is ${searchEntry}`)
      let name = list[i].querySelector("h3").innerHTML

      // if searchEnrty results are found in name ...
      if (searchEntry === name) {
        console.log(`BOOYA! Your match is ${name}`)
        // hide everything on the page in this loop ...
        for (let i = 0; i < list.length; i++) {
          list[i].style.display = "none"
        }
        //... but push the match that was found into the arr[] array
        // with display set to ""

        console.log("============")

        let match = (list[i].style.display = "")
        arr.push(match + "Yo!")
        // Yo! get's pushed to the array but not the list item?
        // Also, I noticed that list[i] becomes an [object HTMLLIelement] unless style.display is included. Why is that?
        console.log("arr-----")
        console.log(arr[0])
        //ul.appendChild(arr[0])
        //showPage(arr[0], 1)
        //appendPageLinks(showPage(arr[0], 1))

        // this appendChild method works, but not really
        ul.appendChild(list[i])
        console.log(list[i])

        //ul.innerHTML = "Yes, your match is ... " + arr[0]
        break
      } else {
        ul.innerHTML = "Sorry, your search didn't have any matches ... "
      }

      // *** NOTE: ShowPage() and appendPageLinks() functions are supposed to be included somehow)
      //showPage(list[i], 1)
      //appendPageLinks(arr[i])
      // 1. push search matches into the array
      // 2. then pass array to these functions
      // appendPagelinks(arr)
      // showPage(arr, 1)
    }
    console.log("=-=-=-=-=-=-=")
    console.log(arr)
  })
}

// call search and pass in studentList
search(studentList)
