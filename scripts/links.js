const baseURL = "https://auzfest.github.io/wdd230/";

const linksURL = "https://auzfest.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data);
}

async function displayLinks(data){
    const lessonContainer = document.getElementById('lesson-container'); // Assuming you have an element with id 'lesson-container' to display the links


    data.lessons.forEach(lessonData => {
        const lessonDiv = document.createElement('div'); // Create a div for each lesson
        lessonDiv.classList.add('lesson'); // Add a class to the div for styling (optional)

        // Create a header for the lesson
        const lessonHeader = document.createElement('p');
        lessonHeader.textContent = `Lesson ${lessonData.lesson}`;
        lessonDiv.appendChild(lessonHeader);

        // Create an unordered list to hold the links for the lesson
        const linkList = document.createElement('ul');

        // Iterate over each link in the lesson
        lessonData.links.forEach(link => {
            // Create list item and anchor element for each link
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = baseURL + link.url; // Construct the full URL using the baseURL and link URL
            anchor.textContent = link.title;
            listItem.appendChild(anchor);
            linkList.appendChild(listItem);
        });

        // Append the link list to the lesson div
        lessonDiv.appendChild(linkList);

        // Append the lesson div to the container
        lessonContainer.appendChild(lessonDiv);
    });
}
  
  getLinks();