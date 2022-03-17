import React, { Component } from 'react';
 
class Catlist extends Component {
  render() { 
    return ( 
      <div>
        {this.props.cats.map((cat) => (
          <li>{cat}</li>
        ))}
      </div>
     );
  }
}
 
export default Catlist;
