/*
GET
POST
PUT
DELETE
*/

class HTTP {
  async get(url) {
    try {
      let response = await fetch(url, {});
      let responseData = await response.json();
      return responseData;
    } catch (error) {
      return error
    }
  }

  async post(url, data) {
    try {
      let response = await fetch(url,
        {
          method: "POST",
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(data)
        }
      )
      let responseData = await response.json();
      return responseData;
    } catch (error) {
      return error
    }
  }

  async put(url, data) {
    try {
      let response = await fetch(url,
        {
          method: "PUT",
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(data)
        }
      )
      let responseData = await response.json();
      return responseData;
    } catch (error) {
      return error
    }
  }

  async delete(url) {
    try {
      let response = await fetch(url,
        {
          method: "DELETE",
          headers: { 'Content-type': 'application/json' }
        }
      )
      let responseData = await response.json();
      return responseData = `${responseData}, Resource deleted...`;
    } catch (error) {
      return error
    }
  }

}

let http = new HTTP();

// GET
// let url = 'http://localhost:3004/posts'
// http.get(url).then(data => console.log(data))
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
//   title: "China news!!!!"
// }
// let id = 2
// let url = `http://localhost:3004/posts/${id}`
// http.put(url, postToUpdate).then(data => console.log(data))
// ============================================
// Delete
// let userToDelete = 3

// let url = `http://localhost:3004/users/${userToDelete}`
// http.delete(url).then(data => console.log('Deleted...'))
// ============================================



