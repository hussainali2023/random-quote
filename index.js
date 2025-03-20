const newQuoteBtn = document.getElementById("btn-quote");
const quoteView = document.getElementById("quote");
const author = document.getElementById("author");
const randomImage = document.getElementById("random-image");
const exportImage = document.getElementById("export-image");
const copyBtn = document.getElementById("copy")

newQuoteBtn.addEventListener("click", () => {
    fnImage();
    fnQuotes();
});


// fetch the api to get the quotes data 

const fnQuotes = async () => {
    try {
        let response = await fetch('https://api.freeapi.app/api/v1/public/quotes/quote/random');
        let data = await response.json();
        quoteView.textContent = data.data.content;
        author.textContent = data.data.author;
    } catch (error) {
        console.error('Error:', error);
    }
};

// Random image function 

const fnImage = () => {
    imageUrl = `https://random-image-pepebigotes.vercel.app/api/random-image?random=${new Date().getTime()}`; 
    randomImage.src = imageUrl;
};


// copy quotes function 

copyBtn.addEventListener("click", copyText)

function copyText(){
    navigator.clipboard.writeText(quoteView.textContent)
    alert("Copied the text")
    }


    // call the first time when load the page 
fnImage();
fnQuotes();


