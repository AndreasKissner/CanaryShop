const BASE_URL = "https://apifortest-766c5-default-rtdb.europe-west1.firebasedatabase.app/";

async function getDatas(path =""){
    try{
        let response = await fetch(BASE_URL + path + ".json");
        if(!response.ok){
            throw new Error(`[HTTP ERROR!] Status:${response.status}`)
        } 
        console.log(`[Info:] All Data's load! Status: ${response.status}`);
        let responseToJson = await response.json();
        console.log(responseToJson);
    }catch(error){
        console.error("Requst Error", error.message);
    }
}

window.addEventListener("load", () => {
  getDatas();
});