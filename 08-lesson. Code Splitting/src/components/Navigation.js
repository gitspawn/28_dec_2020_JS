import React from 'react'

import { NavLink} from 'react-router-dom'
import routes from '../routes.js'


export default function Navigation() {
  return (
    // <>
    //   <ul>
    //     <li>
    //       <NavLink
    //         to="/"
    //         exact
    //         className="Navigation-link"
    //         activeClassName="Navigation-link-active"
    //       >
    //         Home
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         to="/shows"
    //         className="Navigation-link"
    //         activeClassName="Navigation-link-active"
    //       >
    //         Shows
    //       </NavLink>
    //     </li>
    //   </ul>
    //   <hr />
    // </>


    <>
    <ul>
      <li>
        <NavLink
          to={routes.home}
          exact
          className="Navigation-link"
          activeClassName="Navigation-link-active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.shows}
          className="Navigation-link"
          activeClassName="Navigation-link-active"
        >
          Shows
        </NavLink>
      </li>
    </ul>
    <hr />
  </>
  );
}
