const BASE_URL = "data/";

export async function getData(endpoint) {
    try {
        const response = await fetch(BASE_URL + endpoint, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error)
    }
}