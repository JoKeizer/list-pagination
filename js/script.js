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

let totalItems = document.querySelector('ul');
const item = totalItems.children;

let currentPage = 1;
const pageSize = 10;
let totalPages = Math.ceil(item.length / pageSize);
const paginationDiv = document.querySelector('.pagination');
const paginationUL = paginationDiv.querySelector('ul');

const noResultDiv = document.querySelector('.no-result');


console.log(item.length);
console.log(totalPages);


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
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
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


paginationDiv.addEventListener('click', (e) => {
    noResultDiv.innerHTML = '';
    console.log("test",parseInt(e.target.textContent))
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



// Remember to delete the comments that came with this file, and replace them with your own code comments.