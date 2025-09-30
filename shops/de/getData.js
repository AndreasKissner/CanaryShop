window.cardsInfo = [];



async function getImgFomObject(imgJson){
  return Object.keys(imgJson.images);
}

async function imgToArray(cardEl){
  let imgKeyObj = await getImgFomObject(cardEl);
  let imgs = [];
  for (let i = 0; i < imgKeyObj.length; i++) {
    const imgIndex = imgKeyObj[i];
    let imgEl = cardEl.images[imgIndex];
    imgs.push(imgEl);
     console.log(imgEl);
  }
 
  return imgs;
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
      console.log("INDEX:",index);
      console.log("Elements", cardEl);

      window.cardsInfo.push({
        cardId: index,
        title: cardEl.title,
        description : cardEl.description,
          images: await imgToArray(cardEl),  
        price : cardEl.price,
        toArticle : cardEl.toArticle
      })
    }

    console.log(window.cardsInfo);
    renderCards();
}

window.addEventListener("load", async() => {
  await objToArray();
 
});