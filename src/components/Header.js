import React from 'react'
import logo from '../images/logo.svg'

const Header = () => {
    return(
        
        <header className="header">
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            
          <nav>
              <ul>
                  <li><button>About</button></li>
                  <li><button>Careers</button></li>
                  <li><button>Events</button></li>
                  <li><button>Products</button></li>
                  <li><button>Support</button></li>
              </ul>
          </nav>

        
        <div className="menu-btn" >
        <div className="bar bar1"></div>
        <div className="bar bar2"></div>
        <div className="bar bar3"></div>
        </div>
      </header>
    )
}

export default Header 