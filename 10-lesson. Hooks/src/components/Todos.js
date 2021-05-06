import React, { useState, useReducer, useMemo } from 'react';
import { LoremIpsum } from 'lorem-ipsum';
import shortid from 'shortid';

const lorem = new LoremIpsum();


// const [state, dispatch] = useReducer(reducer, initialArg, init);


let todoReducer = (state, action) => {
  switch(action.type) {
    case 'addTodo': 
    return [state, action.payload.todo];

    case 'removeTodo':
      return state.filter(todo => todo.id !== action.payload.todo)
  }
}

const Todos = () => {
  let [todos, dispatch] = useReducer(todoReducer, [])


  let addTodo = ()=>{
    const todo = {
      id: shortid.generate(),
      text: lorem.generateWords(3),
      };

      dispatch({type: 'addTodo', payload: {todo}})
  }


  let [filter, setFilter] = useState('')
  let changeFilter = (event)=>{
    setFilter(event.target.value)
  }

  let filteredTodos = useMemo(()=>{
    let data = todos.filter(todo => todo.text.includes(filter))
    console.log(data)
    return data
  }, [todos, filter])

let removeTodo = todoId =>{
  dispatch({type: 'removeTodo', payload: {todoId}}) 
}

  return (
    <>
      <input
        type="text"
        onChange={changeFilter}
        value={filter}
      />

      <br />
      <button onClick={addTodo}>Add todo</button>
    


      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );

}




// const Todos = () => {
//   let [todos, setTodos] = useState([])


//   let addTodo = ()=>{
//     const todo = {
//       id: shortid.generate(),
//       text: lorem.generateWords(3),
//       };

//       setTodos(prevTodos => [...todos, todo])
//   }


//   let [filter, setFilter] = useState('')
//   let changeFilter = (event)=>{
//     setFilter(event.target.value)
//   }

//   let filteredTodos = useMemo(()=>{
//     let data = todos.filter(todo => todo.text.includes(filter))
//     console.log(data)
//     return data
//   }, [todos, filter])

// let removeTodo = todoId =>{
//   return setTodos(todos.filter(todo => todo.id !== todoId))
// }

//   return (
//     <>
//       <input
//         type="text"
//         onChange={changeFilter}
//         value={filter}
//       />

//       <br />
//       <button onClick={addTodo}>Add todo</button>
    


//       <ul>
//         {filteredTodos.map((todo) => (
//           <li key={todo.id}>
//             <span>{todo.text}</span>
//             <button onClick={() => removeTodo(todo.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );

// }


export default Todos

// export default class Todos extends Component {
//   state = {
//     todos: [],
//     filter: '',
//   };

//   addTodo = () => {
// const todo = {
//   id: shortid.generate(),
//   text: lorem.generateWords(3),
// };

//     this.setState(state => ({
//       todos: [...state.todos, todo],
//     }));
//   };

//   removeTodo = todoId => {
// this.setState(state => ({
//   todos: state.todos.filter(todo => todo.id !== todoId),
// }));
//   };

//   changeFilter = evt => {
//     this.setState({ filter: evt.target.value });
//   };

//   render() {
// const filteredTodos = this.state.todos.filter(todo =>
//   todo.text.includes(this.state.filter),
// );

//     return (
//       <>
//         <input
//           type="text"
//           onChange={this.changeFilter}
//           value={this.state.filter}
//         />

//         <br />
//         <button onClick={this.addTodo}>Add todo</button>

//         <ul>
//           {filteredTodos.map(todo => (
//             <li key={todo.id}>
//               <span>{todo.text}</span>
//               <button onClick={() => this.removeTodo(todo.id)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       </>
//     );
//   }
// }
