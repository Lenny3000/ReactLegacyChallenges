import React, { Component } from 'react';
 
const CatList = () => {
 return (
   <div>
     {this.props.breeds.Map(cat => <li>cat</li> )}
   </div>
 )
}
 
export default CatList;
