import React from "react";
import Product from "./Product";
import Section from "./Section";
import BookList from "./BookList";
import favoriteBooks from "../books.json";

// const favoriteBooks = [
//   { id: "id-1", name: "JS for beginners" },
//   { id: "id-2", name: "React basics" },
//   { id: "id-3", name: "React Router overview" },
//   { id: "id-4", name: "Redux in depth" },
// ];

const App = () => {
  return (
    <>
      {/* Collection */}
      {/* {[1, 2, 3, 4, 5]} */}
      {/* {[<h1>1</h1>, <h1>2</h1>, <h1>3</h1>, 4, 5]} */}
      {/* <ul>
        {books.map((book) => (
          <li>{book.name}</li>
        ))}
      </ul> */}

      <BookList books={favoriteBooks}></BookList>

      {/* <h1>Well come!</h1> */}
      {/* Children */}
      {/* <Section title="Best selling"> */}
      {/* <Section>
        <Product
          // imageUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
          name="Tacos With Lime"
          price={32.99}
          qty={30}
        />
      </Section> */}
      {/* <Section title="Recomendet">
        <Product
          imageUrl="https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          name="Kebab"
          price={4.25}
          qty={100}
        />
      </Section> */}
    </>
  );
};

export default App;
