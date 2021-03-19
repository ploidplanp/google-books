import axios from 'axios'
import { key } from './key'

let yourAPIKey = key.API_KEY

// search
function fetchSearch(search) {
    if(search != '') {
        let result = axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${yourAPIKey}`).catch(error => { console.log(error)})
        return result
    }else {
        console.log('no data')
    }
}

// filter apply
function fetchFilter(search, filtertype, printtype) {
    if(search != '' && filtertype != '' && printtype != '') {
        // searh and select both # filtertype, printtype
        let result = axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&filter=${filtertype}&printtype=${printtype}&key=${yourAPIKey}`).catch(error => { console.log(error)})
        return result
    } else if (search != '' && filtertype != '') {
        // searh and select filtertype only
        let result = axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&filter=${filtertype}&key=${yourAPIKey}`).catch(error => { console.log(error)})
        return result
    } else if (search != printtype != '') {
        // search and select printtype only
        let result = axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&printtype=${printtype}&key=${yourAPIKey}`).catch(error => { console.log(error)})
        return result
    }
}

// view book detail
function fetchDetail(book_id) {
    console.log(book_id)
    let result = axios.get(`https://www.googleapis.com/books/v1/volumes/${book_id}`).catch(error => { console.log(error)})
    console.log('feth detail from api', result)
    return result
}

export { fetchSearch, fetchFilter, fetchDetail }