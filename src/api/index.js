import axios from 'axios'
import { key } from './key'

let yourAPIKey = key.API_KEY

function fetchSearch(search) {
    if(search != '') {
        let result = axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${yourAPIKey}`).catch(error => { console.log(error)})
        return result
    }else {
        console.log('no data')
    }
}

function fetchDetail(book_id) {
    console.log(book_id)
    let result = axios.get(`https://www.googleapis.com/books/v1/volumes/${book_id}`).catch(error => { console.log(error)})
    console.log(result)
    return result
}

export { fetchSearch, fetchDetail }