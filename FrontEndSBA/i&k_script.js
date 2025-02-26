//Here's an array of books to add to the website
const books = [
    {
        title: "Alice In Wonderland",
        imgSrc: "covers/alice_cover.jpg",
        description: "A fantastical adventure about a curious young girl who falls down a rabbit hole into a whimsical world filled with eccentric characters and surreal challenges",
        download: "https://www.gutenberg.org/ebooks/11.epub.images",
        onlineLink: "https://www.gutenberg.org/cache/epub/11/pg11-images.html"
    },
    {
        title: "Dracula",
        imgSrc: "covers/dracula_cover.jpg",
        description: "A gothic horror novel about a young English lawyer who battles the sinister Count Dracula, a vampire determined to spread his undead curse across England.",
        download: "https://www.gutenberg.org/ebooks/345.epub.images",
        onlineLink: "https://www.gutenberg.org/cache/epub/345/pg345-images.html"
    },
    {
        title: "Frankenstein",
        imgSrc: "covers/frankenstein_cover.png",
        description: "A dark tale of a scientist, Victor Frankenstein, who creates a monstrous creature, only to grapple with the consequences of his ambition and the creature’s quest for acceptance and revenge.",
        download: "https://www.gutenberg.org/ebooks/84.epub.images",
        onlineLink: "https://www.gutenberg.org/cache/epub/84/pg84-images.html"
    },
    {
        title: "The Great Gatsby",
        imgSrc: "covers/gatsby_cover.jpg",
        description: "A novel about the elusive Jay Gatsby, whose obsessive love for Daisy Buchanan leads to tragedy amidst the decadence and moral decay of the Jazz Age.",
        download: "https://www.gutenberg.org/ebooks/64317.epub.images",
        onlineLink: "https://www.gutenberg.org/cache/epub/64317/pg64317-images.html"
    },
    {
        title: "Les Misérables",
        imgSrc: "covers/lesmis_cover.png",
        description: "An epic tale of redemption, exploring the lives of several characters, including the ex-convict Jean Valjean, as they navigate love, justice, and societal struggles in 19th-century France.",
        download: "https://www.gutenberg.org/ebooks/135.epub.images",
        onlineLink: "https://www.gutenberg.org/cache/epub/135/pg135-images.html"
    },
    {
        title: "Little Women",
        imgSrc: "covers/littlewomen_cover.jpg",
        description: "Little Women follows the lives of the four March sisters—Jo, Meg, Beth, and Amy—as they grow up, face personal challenges, and navigate love, loss, and family bonds during and after the American Civil War.",
        download: "https://www.gutenberg.org/ebooks/37106.epub.images",
        onlineLink: "https://www.gutenberg.org/cache/epub/37106/pg37106-images.html"
    },
    {
        title: "The Count of Monte Cristo",
        imgSrc: "covers/montecristo_cover.jpg",
        description: "A gripping tale of betrayal, vengeance, and redemption, following Edmond Dantès as he escapes wrongful imprisonment, discovers a vast fortune, and seeks revenge on those who betrayed him.",
        download: "https://www.gutenberg.org/ebooks/1184.epub.images",
        onlineLink: "https://www.gutenberg.org/cache/epub/1184/pg1184-images.html"
    },
    {
        title: "The Adventures of Sherlock Holmes",
        imgSrc: "covers/sherlockholmes_cover.jpg",
        description: "Brilliant detective Sherlock Holmes and his loyal friend Dr. Watson as they solve complex mysteries through keen observation, deduction, and logical reasoning in 19th-century London.",
        download: "https://www.gutenberg.org/ebooks/1661.epub.images",
        onlineLink: "https://www.gutenberg.org/cache/epub/1661/pg1661-images.html"
    },
    {
        title: "Treasure Island",
        imgSrc: "covers/treasureisland_cover.jpg",
        description: "An adventurous tale of young Jim Hawkins, who embarks on a perilous journey to find buried treasure, facing mutiny, pirates, and the cunning Long John Silver along the way.",
        download: "https://www.gutenberg.org/ebooks/120.epub.images",
        onlineLink: "https://www.gutenberg.org/cache/epub/120/pg120-images.html"
    },
    {
        title: "The Wonderful Wizard Of Oz",
        imgSrc: "covers/wizard_cover.jpg",
        description: "The Wonderful Wizard of Oz follows Dorothy, a young girl who, after being swept away to the magical land of Oz, embarks on a journey to meet the Wizard and find her way home, making new friends and facing challenges along the way.",
        download: "https://www.gutenberg.org/ebooks/55.epub.images",
        onlineLink: "https://www.gutenberg.org/cache/epub/55/pg55-images.html"
    },
];

// Creation of the display container holding books
const bookListContainer = document.querySelector('.book-list');

// Loop through each book in the array, create divs and add details
books.forEach(book => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    const bookLink = document.createElement('a');
    bookLink.href = book.onlineLink;

    const bookImgDiv = document.createElement('div');
    bookImgDiv.classList.add('book-img');

    const bookImg = document.createElement('img');
    bookImg.src = book.imgSrc;
    bookImg.alt = book.title;

    bookImgDiv.appendChild(bookImg);

    const bookDetailDiv = document.createElement('div');
    bookDetailDiv.classList.add('book-detail');

    const bookTitle = document.createElement('h3');
    bookTitle.classList.add('book-title');
    bookTitle.textContent = book.title;

    const bookDescription = document.createElement('p');
    bookDescription.classList.add('book-description');
    bookDescription.textContent = book.description;

    const downloadButton = document.createElement('button');
    downloadButton.classList.add('button');
    downloadButton.textContent = "Download ePub";

    const downloadLink = document.createElement('a');
    downloadLink.href = book.download;
    downloadLink.download = book.title + ".epub";

    downloadButton.appendChild(downloadLink);

    downloadButton.addEventListener('click', function() {
        const userConfirm = window.confirm(`Are you sure you want to download the "${book.title}" epub?`);
        if (userConfirm) {
            downloadLink.click();
        }
    });

    bookDetailDiv.appendChild(bookTitle);
    bookDetailDiv.appendChild(bookDescription);
    bookDetailDiv.appendChild(downloadButton);

    bookDiv.appendChild(bookImgDiv);
    bookDiv.appendChild(bookDetailDiv);

    bookLink.appendChild(bookDiv);
    bookListContainer.appendChild(bookLink);
});
