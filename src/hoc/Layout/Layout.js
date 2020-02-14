import React, {Component} from 'react';

import Auxi from '../Auxi/Auxi';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import './Layout.css';

class Layout extends Component {
  render(){
    return (
      <Auxi>
       <Toolbar />
         <main className="my-content">
            {this.props.children}
         </main>
      </Auxi>
    );
  }
}
//{this.state.isSideOpen ? <Sidedrawer /> : null}
//import Sidedrawer from '../../components/Navigation/Sidedrawer/Sidedrawer';

export default Layout;
