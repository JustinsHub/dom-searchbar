const ANIME_BASE_URL = 'https://kitsu.io/api/edge/anime?filter[text]=one%20piece'

class Anime {
    static async getAnimeData(animeName){  
        try {
            const getAnimeResponse = await fetch(`${ANIME_BASE_URL}/edge/anime?filter[text]=${animeName}`)
            return getAnimeResponse.json()
        } catch (error) {
            return error
        }
    }
}

export default Anime