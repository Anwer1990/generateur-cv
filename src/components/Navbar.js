import React,{Component} from 'react';

class Navbar extends Component
{
    render()
    {
        return(
            <nav className="navbar">
                <div className="container">
                    <span className="navbar-brand mb-0 h1">
                        <img src="logo.png" alt='logo' />
                    </span>
                    <ul className="social-links float-right">
                        <li><a href=""><i class="fab fa-facebook"></i></a></li>
                        <li><a href=""><i class="fab fa-linkedin"></i></a></li>
                        <li><a href=""><i class="fab fa-github"></i></a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Navbar;