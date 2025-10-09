window.cardsInfo = [];



async function getImgFomObject(imgJson){
  return Object.keys(imgJson.images);
}

async function imgToArray(cardEl){
  let imgKeyObj = await getImgFomObject(cardEl);
  let imgs = "";
  for (let i = 0; i < imgKeyObj.length; i++) {
    const imgIndex = imgKeyObj[i];
    let imgEl = cardEl.images[imgIndex];
    imgs += `<img src="${imgEl.src}" alt="${imgEl.alt}">`;
  }
  return imgs;   // jetzt ist es ein fertiger String mit allen <img>
}



async function getKeyFromObj(responseJson){
    return Object.keys(responseJson);
}

async function objToArray() {
    let responseJson = await getDatas();
    let keysInObject = await getKeyFromObj(responseJson)
  
    for (let i = 0; i < keysInObject.length; i++) {
      const index = keysInObject[i];
      let cardEl = responseJson[index];
      
      window.cardsInfo.push({
        cardId: index,
        udemy: cardEl.udemy,
        title: cardEl.title,
        description : cardEl.description,
        images: await imgToArray(cardEl),  
        price : cardEl.price,
        toArticle : cardEl.toArticle
      })
    }
    renderCards();
}

window.addEventListener("load", async() => {
  await objToArray();
 
});