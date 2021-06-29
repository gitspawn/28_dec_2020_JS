// //  Вложенная навигация
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import tvAPI from "../services/tv-api.js";

// const Shows = ({ match }) => {
//   const shows = [
//     { id: "id-1", name: "Shows name 1" },
//     { id: "id-2", name: "Shows name 2" },
//     { id: "id-3", name: "Shows name 3" },
//     { id: "id-4", name: "Shows name 4" },
//   ];
//   return (
//     <>
//       <Navigation/>
//       {
//         <ul>
//           {
//             shows.map((show) => {
//               return (
//                 <li key={shows.id}><Link to={`${match.url}/${show.id}`}>{show.name}</Link></li>
//               )
//             })
//           }
//         </ul>
//       }
//     </>
//   );
// };

class Shows extends Component {
    state = {
        shows: [],
    };

    componentDidMount() {
        tvAPI.fetchShowWithQuery("cat").then((shows) => {
            return this.setState({ shows });
        });
    }

    render() {
        let { match } = this.props;
        let { shows } = this.state;

        return (
            <>
                <Navigation />
                {shows.length > 0 && (
                    <ul>
                        {shows.map((show) => {
                            return (
                                <li key={show.id}>
                                    <Link to={`${match.url}/${show.id}`}>
                                        {show.name}
                                        {/* <img src={show.image.medium}/> */}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </>
        );
    }
}

export default Shows;
