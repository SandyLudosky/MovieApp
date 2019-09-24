import * as service from './service'
import { Query } from './service' 
import { EndPoint, Languages } from './config'

async function fetchMovies(input: string) {
    const request = new Query(EndPoint.Search.Movie, '', { query: input, language: Languages.english })
    try {
        let response: any = await service.get(request)
        let movies = response['results']
        return movies
    } catch(err) { throw err }
}

async function fetchMovie(id: string) {
    const request = new Query(EndPoint.Find.Movie, id, {language: 'en-US' })
    try {
        return await service.get(request)
    } catch(err) { throw err }
}
export {
    fetchMovies,
    fetchMovie
}
