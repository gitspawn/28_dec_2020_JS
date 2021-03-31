import React from 'react'
import Product from './Product'
import Section from './Section'
import BookList from './BookList'
import favoriteBooks from '../books.json';



// let favoriteBooks = [
//   { id: 'id-1', name: 'React' },
//   { id: 'id-2', name: 'Angular' },
//   { id: 'id-3', name: 'Vue' },
//   { id: 'id-4', name: 'PHP' },
// ]`

let App = () => {
  // return (
  //   <>
  //     <h1>Wellcome!</h1>
  //     <Section>
  //       <Product imageUrl='https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' name='Kebab in lavash' price={20} qty={30} />
  //       {/* <Product name='Kebab in lavash' /> */}
  //     </Section>
  //     <Section title="Recomendet products">
  //       <Product imageUrl='https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' name='Pizza time' price={15} qty={100} />
  //     </Section>
  //   </>
  // )


  // Collections
  return (
    <>
      {/* [1,2,3,4,5] */}
      {/* {[1, 2, 3, 4, 5]} */}
      {/* {[<h1>1</h1>, <h1>2</h1>, <h1>3</h1>]} */}
      <h1>Collections</h1>

      {/* <ul>
        {favoriteBooks.map((book) => (
          <li>{book.name}</li>
        ))}
      </ul> */}
      <BookList books={favoriteBooks} />
    </>
  )
}

export default App;