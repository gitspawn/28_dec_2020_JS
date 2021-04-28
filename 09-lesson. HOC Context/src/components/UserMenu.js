import React from 'react';
import AuthContext from '../contexts/Auth';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};


const UserMenu = () => (
  <AuthContext.Consumer>
    { pizza  => (
      <>
        <div style={styles.container}>
          <img src={pizza.avatar} alt="" width="32" style={styles.avatar} />
          <span style={styles.name}>Welcome, {pizza.name}</span>
          <button type="button">Log Out</button>
        </div>
      </>
    )}
  </AuthContext.Consumer>
);


// const UserMenu = () => (
//   <AuthContext.Consumer>
//     {({ avatar, name }) => (
//       <>
//         {console.log(name)}
//         {console.log(avatar)}
//         <div style={styles.container}>
//           <img src={avatar} alt="" width="32" style={styles.avatar} />
//           <span style={styles.name}>Welcome, {name}</span>
//           <button type="button">Log Out</button>
//         </div>
//       </>
//     )}
//   </AuthContext.Consumer>
// );

export default UserMenu;
