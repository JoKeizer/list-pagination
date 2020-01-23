/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/***
    global variables that store the DOM elements
***/

let totalItems = document.querySelector('ul');
const item = totalItems.children;

let currentPage = 1;
const pageSize = 10;
let totalPages = Math.ceil(item.length / pageSize);
const paginationDiv = document.querySelector('.pagination');
const paginationUL = paginationDiv.querySelector('ul');
const searchDiv = document.querySelector('.item-search');
const noResultDiv = document.querySelector('.no-result');
const noResultContainer = document.querySelector('.no-result-container')
let searchInput = document.createElement('input');
let searchButton = document.createElement('button');

noResultContainer.classList.remove("no-result-container");


/*** 
    ShowPage show only the first 10 items and hide the rest of all items
***/

function showPage() {
    for(let i = 0; i < item.length; i++) {
        if( i < pageSize) {
            item[i].style.display = ' ';
        } else {
            item[i].style.display = 'none';
        }
    }
}

showPage();

/***
    appendPageLinks create dynamically pagination based on total items
***/

function appendPageLinks () {
    for(let i = 1; i <= totalPages; i++) {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.className = 'active';
        a.href = '#';
        a.textContent = i;
        paginationUL.appendChild(li);
        li.appendChild(a);
    }
}

appendPageLinks();

/***
   AddEventListener on pagination buttons. Every button loads max 10 items
 ***/


paginationDiv.addEventListener('click', (e) => {
    noResultDiv.innerHTML = '';
    let buttonNumber = parseInt(e.target.textContent);
    let max = buttonNumber * 10;
    let min = max - 10;

    for(let i = 0; i < item.length; i++) {
        if (i >= min && i < max) {
            item[i].style.display = '';
        }  else {
            item[i].style.display = 'none';
        }
    }

});

/***
    Search function to search in all items on all pages
 ***/


function showSearch() {
    searchInput.placeholder = 'Search...';
    searchButton.className = "searchButton";
    searchButton.textContent = 'Search';
    searchDiv.appendChild(searchInput);
    searchDiv.appendChild(searchButton);
}

showSearch();


/***
    EventListener on search inputField
 ***/

const searchResults = [];
searchButton.addEventListener('click', () => {
    let filter = searchInput.value.toLowerCase();
    searchResults.length = 0;
    for (let i = 0; i < item.length; i++) {
        if (item[i].innerHTML.indexOf(filter) > -1) {
            item[i].style.display = '';

        } else {
            item[i].style.display = 'none';
            searchResults.push(i);
        }
    }
    // If all items are hidden, a 'no results' message is displayed
    if (searchResults.length === item.length) {
        noResultContainer.className = 'no-result-container';
        noResultDiv.innerHTML = '<h1>No Results</h1>';

    } else {
        noResultDiv.innerHTML = '';
        noResultContainer.classList.remove("no-result-container");

    }
});