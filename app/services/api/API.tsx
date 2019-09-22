import { Constants } from './config'

//returns a string to build the URL with parameters
function uriParams(parameters={} ) {
    return Object.keys(parameters)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent((parameters as any)[k] ))
        .join('&');
}
export class Query {
    endpoint: string
    options?: {}
    id?:string
    constructor(endpoint: string, id: string , options={}) {
      this.endpoint = endpoint;
      this.options = options;
      this.id = id;
    }
    url = () => {
        const id = this.id != '' ? `${this.id}` : ''
        return `${Constants.BASE_URL}${this.endpoint}${id}?api_key=${Constants.API_KEY}&${uriParams(this.options)}`
    }
} 
export const get = (withQuery: Query) => {
    return new Promise((resolve, reject) => {
        console.log(withQuery.url())
        fetch(withQuery.url())
            .then(response => {
                if (!response.ok) { return false }
                resolve(response.json())
            }).catch(e => { reject(e) })
    })
}
