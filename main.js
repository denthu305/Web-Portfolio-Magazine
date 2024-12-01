// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");
const paper6 = document.querySelector("#p6");
//const back6 = document.querySelector("#b6");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 6;
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                break;
       
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                break;
            case 5:
                paper5.classList.add("flipped");
                paper5.style.zIndex = 5;
                break;
            case 6:
                paper6.classList.add("flipped");
                paper6.style.zIndex = 6;
                closeBook(false);
                break;  
            //case 7:
                //openBook();
            
            default:
                throw new Error("unkown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 6;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 5;
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 4;
                break;
            case 5:
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 3;
                break;
            case 6:
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 2;
                break;
            case 7:
                openBook();
                paper6.classList.remove("flipped");
                paper6.style.zIndex = 1;
                break;
            default:
                throw new Error("unkown state");
        }

        currentLocation--;
    }
}

// Reference to "ABOUT ME" button
const aboutMeBtn = document.querySelector("#about-me-btn");

aboutMeBtn.addEventListener("click", goToAboutMePage);


function goToAboutMePage(event) {
    currentLocation = 2;
    goNextPage();
}


const projBtn = document.querySelector("#projects-btn");

projBtn.addEventListener("click", goToProj);

function goToProj(event) {
    currentLocation = 2;
    goNextPage()
    goNextPage()
}

const backToc = document.querySelector("#back-to-toc");

backToc.addEventListener("click", backToToc);

function backToToc(event) {
// Check if we're already on page 2
    if (currentLocation > 2) {
        while (currentLocation > 2) {
            goPrevPage(); // Move one page back until we reach page 2
        }
    }
}

const btt = document.querySelector("#btt-btn");

btt.addEventListener("click", backToTents);

function backToTents(event) {
//Check if we're already on page 2
    if (currentLocation > 2) {
        while (currentLocation > 2) {
          goPrevPage(); // Move one page back until we reach page 2
       }
    }
}



// Function to open the book and flip through pages quickly
function openBookAndFlip() {
    // Step 1: Open the book (make it appear as if the cover page is opened)
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
    
    // Step 2: Wait for a moment before flipping through pages
    setTimeout(flipThroughPagesQuickly, 500);  // 500ms delay to let the book "open"
}

// Function to flip through all pages quickly
function flipThroughPagesQuickly() {
    let currentPage = 1; // Start at the first page
    let totalPages = 6;  // Total number of pages (adjust as necessary)
    let flipInterval = 100; // Time interval in milliseconds between each flip (adjust for speed)

    function flipPage() {
        if (currentPage <= totalPages) {
            // Flip the current page
            const currentPaper = document.querySelector(`#p${currentPage}`);
            currentPaper.classList.add("flipped");
            currentPaper.style.zIndex = currentPage;

            currentPage++; // Move to the next page

            // If there are more pages to flip, call the function again after a delay
            setTimeout(flipPage, flipInterval);
        } else {
              // Once all pages have been flipped, initiate the backward flip
              setTimeout(flipBackPages, flipInterval);
        }
    }

    // Start flipping pages
    flipPage();
}


// Function to flip through all pages quickly
function flipThroughPagesQuickly() {
    let currentPage = 1; // Start at the first page
    let totalPages = 6;  // Total number of pages (adjust as necessary)
    let flipInterval = 100; // Time interval in milliseconds between each flip (adjust for speed)

    function flipPage() {
        if (currentPage <= totalPages) {
            // Flip the current page
            const currentPaper = document.querySelector(`#p${currentPage}`);
            currentPaper.classList.add("flipped");
            currentPaper.style.zIndex = currentPage;

            currentPage++; // Move to the next page

            // If there are more pages to flip, call the function again after a delay
            setTimeout(flipPage, flipInterval);
        } else {
            // Once all pages have been flipped, initiate the backward flip
            closeBook(false);
            setTimeout(flipBackPages, flipInterval);
        }
    }

    // Start flipping pages
    flipPage();
}

// Function to flip the pages back (reverse order)
function flipBackPages() {
    let currentPage = 6;  // Start from the last page
    let totalPages = 6;   // Total number of pages (adjust as necessary)
    let flipInterval = 100; // Time interval in milliseconds between each flip (adjust for speed)

    function flipPageBack() {
        if (currentPage >= 1) {
            // Flip the current page back
            const currentPaper = document.querySelector(`#p${currentPage}`);
            currentPaper.classList.remove("flipped");
            currentPaper.style.zIndex = totalPages - currentPage + 1;

            currentPage--; // Move to the previous page

            // If there are more pages to flip back, call the function again after a delay
            setTimeout(flipPageBack, flipInterval);
        } else {
            // After flipping back all pages, close the book (optional)
            closeBook(true);
        }
    }

    // Start flipping pages back
    flipPageBack();
}

// Function to close the book and return to the front cover
function closeBookAndReturnToCover() {
    // Close the book (you can adjust to false to keep it in the "open" position, based on your needs)
    book.style.transform = "translateX(0%)";
    


    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

//// Function to reset all pages (remove "flipped" class and reset zIndex)
//function resetPages() {
    //for (let i = 1; i <= 6; i++) {
        //const paper = document.querySelector(#p${i});
        //paper.classList.remove("flipped");
        //paper.style.zIndex = 6 - i; // You can adjust the z-index reset logic if needed
    //}
//}

// Trigger the opening of the book and then flipping when the page has fully loaded
window.onload = function() {
    openBookAndFlip();
};

