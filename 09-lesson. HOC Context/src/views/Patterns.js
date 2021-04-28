import React from "react";
import MyComponent from "../components/MyComponent";
import Toggler from '../components/Toggler'
import UserMenu from '../components/UserMenu'

const Patterns = () => (
  // <>
  //   <Toggler render={({isOpen, onToggle}) => <MyComponent a='a' b='b'/>}/>
  // </>

  <>
  {/* <UserMenu/> */}
  <Toggler>
      {({isOpen, onToggle}) => (
        <>
          <button type="button" onClick={onToggle}>
          {isOpen ? 'Hide' : 'Show'}
        </button>
           {isOpen &&  <MyComponent a='a' b='b'/>}
        </>
      )}
  </Toggler>

<Toggler>
      {({isOpen, onToggle}) => (
        <>
         <label>
           <input type="checkbox" checked={isOpen} onChange={onToggle}/>
           {isOpen ? 'Hide' : 'Show'}
         </label>
           {isOpen &&  <MyComponent a='a' b='b'/>}
        </>
      )}
  </Toggler>
  </>
)

export default Patterns;



