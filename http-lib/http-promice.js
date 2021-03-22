/*
GET
POST
PUT
DELETE
*/

class HTTP {
  get(url) {
    return new Promise((resolve, reject) => {
      return fetch(url, {})
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    })
  }

  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url,
        {
          method: "POST",
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(data)
        }
      )
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    })
  }

  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url,
        {
          method: "PUT",
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(data)
        }
      )
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    })
  }

  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url,
        {
          method: "DELETE",
          headers: { 'Content-type': 'application/json' }
        }
      )
        .then(res => res.json())
        .then(data => resolve('Resourse deleted...'))
        .catch(err => reject(err));
    })
  }

}

let http = new HTTP();

// GET
// let url = 'http://localhost:3004/comments'
// http.get(url).then(data => console.log(data))

let url = 'http://localhost:3004/comments'
http.get(url).then(data => renderTempalte(data))
http.get(url).then(renderTempalte(data))

//=====================================================
// POST
// let comment = {
//   title: "Pizza news!!!!"
// }
// let url = 'http://localhost:3004/comments'
// http.post(url, comment).then(data => console.log(data))
// ====================================================
// PUT
// let postToUpdate = {
//   title: "Poland news!!!!"
// }
// let id = 2
// let url = `http://localhost:3004/posts/${id}`
// http.put(url, postToUpdate).then(data => console.log(data))
// ============================================
// Delete
// let userToDelete = 4

// let url = `http://localhost:3004/users/${userToDelete}`
// http.delete(url).then(data => console.log('Deleted...'))
// ============================================



