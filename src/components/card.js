import axios from 'axios';

const Card = (article) => {
  
  // Destructuring the object passed
  console.log(article.headline);
  
  //Creating elements
  const cardDiv = document.createElement('div');
  const cardHeadline = document.createElement('div');
  const cardAuthorContainer = document.createElement('div');
  const cardImgContainer = document.createElement('div');
  const cardImage = document.createElement('img');
  const cardAuthorName = document.createElement('span');

  // Adding class names
  cardDiv.classList.add('card');
  cardHeadline.classList.add('headline');
  cardAuthorContainer.classList.add('author');
  cardImgContainer.classList.add('img-container');

    //adding content
    cardHeadline.textContent = article.headline;
    cardImage.src = article.authorPhoto;
    cardAuthorName.textContent = "By: " + article.authorName;
    
  //appending elements
  cardDiv.appendChild(cardHeadline);
  cardDiv.appendChild(cardAuthorContainer);
  cardAuthorContainer.appendChild(cardImgContainer);
  cardAuthorContainer.appendChild(cardAuthorName);
  cardImgContainer.appendChild(cardImage);



  cardDiv.addEventListener('click', () => {
    console.log(cardHeadline.textContent);
  })
  
  return cardDiv;
}


const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get('http://localhost:5000/api/articles')
    .then(results => {
      
      const javascriptArray = results.data.articles.javascript;
      const bootstrapArray = results.data.articles.bootstrap;
      const technologyArray = results.data.articles.technology;
      
      //console.log("javascript: ", javascriptArray);
      javascriptArray.forEach(object => {
        //console.log(object);
        const newCard = Card(object);
        
        document.querySelector(selector).appendChild(newCard);

      });
      bootstrapArray.forEach(object => {
        //console.log(object);
        const newCard = Card(object);
        
        document.querySelector(selector).appendChild(newCard);

      });
      technologyArray.forEach(object => {
        //console.log(object);
        const newCard = Card(object);
        
        document.querySelector(selector).appendChild(newCard);

      });
      
    })

}

export { Card, cardAppender }
