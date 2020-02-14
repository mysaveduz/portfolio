import React, { useState } from 'react';

import './Main.css';
import IamBox from '../../components/UI/Iam/Iam';
import Auxi from '../../hoc/Auxi/Auxi';
import { Button } from 'react-bootstrap';
import Bottom from '../../components/Navigation/Bottom/Bottom';

const main = () => {
  const [isOpen, setIsOpen] = useState(false);
     return (
       <Auxi>
       <div className="Main-Section" >

         <div className="Blog-Textbox">
             <h1>This is<br /> my Personal Blog</h1>
             <Button

                variant="outline-primary"
                onClick={() => setIsOpen(!isOpen)}
             >
               {isOpen ? "-Wow, nice guy !-" : "-Who is this guy?-"}
            </Button>
          </div>
        <div className="Iam-div">
              <IamBox show={isOpen}/>
        </div>
       </div>

       <Bottom />
       </Auxi>
     );
}


export default main;
