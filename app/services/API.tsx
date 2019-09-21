import { Constants } from './config'

//returns a string to build the URL with parameters
const urlQueryItems = (parameters: {} | undefined) => {
    let params = ''
    for (let [key, value] of Object.entries(parameters)) { params += `&${key}=${value}` }
    return params
}
export class Query {
    endpoint: string 
    parameters?: {}
    id?:string
    constructor(endpoint: any, id: string | undefined, parameters: {} | undefined) {
      this.endpoint = endpoint;
      this.parameters = parameters;
      this.id = id;
    }
    url = () => {
        const id = this.id != '' ? `${this.id}` : ''
        return `${Constants.BASE_URL}${this.endpoint}${id}?api_key=${Constants.API_KEY}${urlQueryItems(this.parameters)}`
    }
} 
export const get = (withQuery: Query) => {
    return new Promise((resolve, reject) => {
        console.log(withQuery.url())
        fetch(withQuery.url())
            .then(response => {
                if (!response.ok) { return false }
                resolve(response.json())
            }).catch(e => {
                reject(e)
            })
    })
}
