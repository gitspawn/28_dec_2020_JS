import React from "react";
import withHigherOrderComponent from './hoc/withHigherOrderComponent';
import withLog from './hoc/withLog'
import withFetch from './hoc/withFetch'
import withToggle from './hoc/withToggle'


const MyComponent = props => <div>{JSON.stringify(props, null, 2)}</div>

// export default withHigherOrderComponent(MyComponent)
// export default withLog(MyComponent)


let url = 'https://jsonplaceholder.typicode.com/todos'

// export default withFetch(url, MyComponent)
// export default withFetch(url)(MyComponent)

// export default withHigherOrderComponent(withLog(MyComponent))

// export default withToggle(MyComponent)


export default MyComponent

