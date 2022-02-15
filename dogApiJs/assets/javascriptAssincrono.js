const BASE_URL = "https://dog.ceo/api/breeds/image/random"
const catBtn = document.getElementById("btnPrincipal")
const catImg = document.getElementById("img_cat")

const getCats = async () => {
    // try{
        const data = await fetch(BASE_URL)
        .then(response => response.json())
        .catch(erro => console.log(erro.message))
        // console.log(json)
        console.log(data)
        // return json.message
        return data.message
    // }catch (erro) {
    //     console.log(erro.message)
    // }
    
}

const loaImg = async () => {
   catImg.src = await getCats()
}

catBtn.addEventListener("click", loaImg)

loaImg()