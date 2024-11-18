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
const paper7 = document.querySelector("#p7");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 7;
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
                break;
            case 7:
                paper7.classList.add("flipped");
                paper7.style.zIndex = 7;
                closeBook(false);
                break;           
            
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
                paper1.style.zIndex = 7;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 6;
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 5;
                break;
            case 5:
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 4;
                break;
            case 6:
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 3;
                break;
            case 7:
                openBook()
                paper6.classList.remove("flipped");
                paper6.style.zIndex = 2;
                break;
            case 8:
                openBook()
                paper7.classList.remove("flipped");
                paper7.style.zIndex = 1;
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
    paper2.classList.add("flipped");
    paper2.style.zIndex = 2;

    //closeBook(false);
}

const backToc = document.querySelector("#back-to-toc");

backToc.addEventListener("click", backToToc);

function backToToc(event) {
    event.preventDefault();
    goPrevPage()
    

    

    //closeBook(false);
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
    let totalPages = 7;  // Total number of pages (adjust as necessary)
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
            // Once all pages have been flipped, close the book and return to the front cover
            closeBookAndReturnToCover();
        }
    }

    // Start flipping pages
    flipPage();
}

// Function to close the book and return to the front cover
function closeBookAndReturnToCover() {
    // Close the book (you can adjust to false to keep it in the "open" position, based on your needs)
    book.style.transform = "translateX(0%)";
    
    // Reset the page flips (optional, if you want to reset all pages)
    resetPages();

    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

// Function to reset all pages (remove "flipped" class and reset zIndex)
function resetPages() {
    for (let i = 1; i <= 7; i++) {
        const paper = document.querySelector(`#p${i}`);
        paper.classList.remove("flipped");
        paper.style.zIndex = 7 - i; // You can adjust the z-index reset logic if needed
    }
}

// Trigger the opening of the book and then flipping when the page has fully loaded
window.onload = function() {
    openBookAndFlip();
};
