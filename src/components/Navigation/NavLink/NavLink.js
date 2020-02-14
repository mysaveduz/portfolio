import React from 'react';
import { Nav } from 'react-bootstrap';

const navLink =(props)=>{
  const middle = props.name ? props.name : props.children;
   return(
     <Nav.Item>
       <Nav.Link href={props.link}>{middle}</Nav.Link>
     </Nav.Item>
   );
}

export default navLink;
