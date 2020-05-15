import React, { Component } from "react";
import { Link} from 'react-router-dom'

export class Home extends Component {
  render() {
    return (
      <div>
        <h1>Unit conversion Application </h1>
          <li>
            <Link to="/temperature">Temperature</Link>
          </li>
          <li>
            <Link to="/volume">Volume</Link>
          </li>
      </div>
    );
  }
}


export default Home;
