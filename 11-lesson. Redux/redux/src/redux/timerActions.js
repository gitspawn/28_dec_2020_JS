// action creators
export const Type = {
  INCTREMENT: "INCREMENT",
  DECTREMENT: "DECREMENT",
  CHANGE_STEP: 'CHANGE_STEP'
}

export const increment = value => ({
    type: Type.INCTREMENT,
    payload: value
})

export const decrement = value => ({
  type: Type.DECTREMENT,
  payload: value
})

export const changeStep = value => ({
  type: Type.CHANGE_STEP,
    payload: value
})



// () => {increment(5)}

// {
//   type: Type.INCTREMENT,
//   payload: 5
// }


// const action = {
//   type: 'ADD_ARTICLE',
//   payload: {
//     text: "Redux is ovesome"
//   }
// }


// { type: 'ADD_TODO', payload: {text: 'Use Redux'} }
// { type: 'REMOVE_TODO', id: 42 }
// { type: 'LOAD_ARTICLE', response: { ... } }