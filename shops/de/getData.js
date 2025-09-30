let cardsInfo = [];

async function getKeyFromObj(responseJson){
    return Object.keys(responseJson);
}

async function objToArray() {
    let responseJson = await getDatas();
    let keysInObject = await getKeyFromObj(responseJson)
    

    console.log(keysInObject);
}
window.addEventListener("load", async() => {
  await objToArray();
});