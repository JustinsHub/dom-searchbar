import Anime from "./src/api/getAnime.js"
//get api
//fetch request based on input
//get value from input
//render data from api
//put the data innerHtml and render it 

const searchBtn = document.querySelector('.search__bar-btn')

const getAnimeData = async() => {
    const animeData = await Anime.getAnimeData()
    return animeData
}


searchBtn.addEventListener('click',async(e) => {
    e.preventDefault()
    console.log(await getAnimeData())
})