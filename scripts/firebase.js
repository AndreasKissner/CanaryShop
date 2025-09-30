const BASE_URL = "https://apifortest-766c5-default-rtdb.europe-west1.firebasedatabase.app/anzeigen";

async function getDatas(path =""){
    try{
        let response = await fetch(BASE_URL + path + ".json");
        if(!response.ok){
            throw new Error(`[HTTP ERROR!] Status:${response.status}`)
        } 
        console.log(`[Info:] All Data's load! Status: ${response.status}`);
        let responseToJson = await response.json();
        console.log(responseToJson);
        return responseToJson
    }catch(error){
        console.error("Requst Error", error.message);
    }
}

async function postData(path = "", data = {}) {
    try {
        let response = await fetch(BASE_URL + path + ".json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`[HTTP ERROR!] Status: ${response.status}`);
        }

        let responseToJson = await response.json();
        console.log("[Info:] Data posted successfully!", responseToJson);
        return responseToJson;
    } catch (error) {
        console.error("Request Error", error.message);
    }
}

window.addEventListener("load", () => {
    getDatas();
    postData("", { name: "Andi" }); // Testeintrag
});

