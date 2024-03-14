
function createCards() {
    const request = new XMLHttpRequest();
    request.open("GET", "how-it-works.txt");
    request.onload = function () {
      if (request.status === 200) {
        const data = request.responseText;
        const cardContainer = document.getElementById("card-container"); // Replace with your container element id
  
        const cardData = data.split("---"); // Split data based on separator
  
        for (const card of cardData) {
          const lines = card.trim().split("\n"); // Split each card data by line breaks and trim whitespace
          const title = lines[0].split(": ")[1]; // Extract title after "Title:"
          const instruction = lines[1].split(": ")[1]; // Extract instruction after "Instruction:"
  
          const newCard = document.createElement("div");
          newCard.classList.add("text-light", "col", "feature"); // Add a CSS class for styling (optional)
  
          const cardTitle = document.createElement("h3");
          cardTitle.textContent = title;
          newCard.appendChild(cardTitle);
  
          const cardInstruction = document.createElement("p");
          cardInstruction.textContent = instruction;
          newCard.appendChild(cardInstruction);
  
          cardContainer.appendChild(newCard);
        }
      } else {
        console.error("Error fetching data:", request.statusText);
      }
    };
    request.send();
  }
  
  // Call the function to create cards on page load
  window.onload = createCards;




/* const cards = document.querySelectorAll(".card");
const projectModal = document.querySelectorAll(".project-modal")

fetch('info.txt')
    .then(response => response.text())
    .then(data => {
        const lines = data.split('\n');
        let contentIndex = 0;

        cards.forEach((card, index) => {
            const heading = card.querySelector(".project");
            const paragraph = card.querySelector(".projectInfo");

            const identifier = `card_${index + 1}_`;

            if (lines[contentIndex].startsWith(identifier + "heading")) {
                heading.textContent = lines[contentIndex].split("=")[1];
                contentIndex++;
            }
            if (lines[contentIndex].startsWith(identifier + "paragraph")) {
                paragraph.textContent = lines[contentIndex].split("=")[1]; 
                contentIndex++;
            }
        });
    })
    .catch(error => console.error(error));

    fetch('modal.txt')
    .then(response => response.text())
    .then(data => {
        const lines = data.split('\n');
        let contentIndex = 0;

        projectModal.forEach((modal, index) => {
            const heading = modal.querySelector(".modal-title");
            const paragraph = modal.querySelector(".modal-info");

            const identifier = `modal${index + 1}_`;

            if (lines[contentIndex].startsWith(identifier + "heading")) {
                heading.textContent = lines[contentIndex].split("=")[1]; 
                contentIndex++;
            }
            if (lines[contentIndex].startsWith(identifier + "paragraph")) {
                paragraph.textContent = lines[contentIndex].split("=")[1];
                contentIndex++;
            }
        });
    })
    .catch(error => console.error(error)); */

