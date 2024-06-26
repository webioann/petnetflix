import type { IServerResponseType, Full_Media_Types } from '@/types/movies.types'

export default async function fetchBillboardData(media_type: Full_Media_Types) {
    // random page number for more variants of posters in Billboard bg image
    const page_number = await Math.floor(Math.random() * 3) + 1;

    const serverResponse = await fetch(`https://api.themoviedb.org/3/trending/${media_type}/week?language=en-US&page=${page_number}`, {
        // next: { revalidate: 30 },
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: process.env.TMDB_KEY as string
        },
        cache: 'no-store'
    })
    if(!serverResponse.ok) throw new Error('Failed to fetch data for Billboard')
    let result: Promise<IServerResponseType> = serverResponse.json()
    const results = (await result).results
    // select only one random results
    const media_exists = results.filter((item) => item.media_type === 'movie' || item.media_type === 'tv')
    const image_exists = media_exists.filter((item) => item.backdrop_path !== null || item.poster_path !== null)
    const resultsLength = image_exists.length
    let randomIndex = Math.floor(Math.random() *  resultsLength)
    const filtered = results.filter((item, index) => index == randomIndex)
    const oneRandomMovie = filtered.splice(0, 1)[0]

    return oneRandomMovie
};
