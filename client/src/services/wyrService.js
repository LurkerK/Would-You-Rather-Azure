export default {
    getRandomWYR() {  // returns a Promise
        return fetch('/wyr').then(response => {
            return response.json()
        })
    }
}