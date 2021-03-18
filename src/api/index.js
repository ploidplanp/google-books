import axios from 'axios'
import { key } from './key'

let yourAPIKey = key.API_KEY

export function fetchSearch(search) {
    if(search != '') {
        let result = axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${yourAPIKey}`).catch(error => { console.log(error)})
        return result
    }else {
        console.log('no data')
    }
}