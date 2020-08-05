import * as React from 'react';
import {Link} from 'react-router-dom';

import './componentStyles/NavBar.css';

class NavBar extends React.Component{

render(){
  return(
    <div>
      <div className="logo">
        <Link to='/'>
          <img id="logo" src="https://simplemind.eu/wp-content/themes/simpleapps_2017/resources/images/img-placeholder.png"/>
        </Link>
            <ul id="navigationList">
              <Link to='/'>
                <li>Home</li>
              </Link>
              <Link to='/HappinessForm'>
                <li>Assessment</li>
              </Link>

                <li>Reminders</li>


                <li>About</li>


                <li>Login</li>


                <li>Signup</li>

            </ul>

        </div>

    </div>
  )
}


}

export default NavBar;