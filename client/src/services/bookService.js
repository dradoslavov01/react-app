export function getAll() {
   return fetch('http://localhost:3000/books')
        .then(res => res.json())
        .catch(err => alert(err))
}
