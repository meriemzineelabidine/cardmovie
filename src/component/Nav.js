import { Link } from "react-router-dom";

function Nav(){
    return(
        <div >
            <div className="menu">
                <div><img src="../images/logo.png"  className="img-logo"></img></div>
                <div>
                    <ul className="sous-menu">
                      <Link to="/"> <li>Home</li></Link> 
                        <Link><li>TV Shows</li></Link>
                        <Link><li>Movies</li></Link>
                        <Link><li>New & Popular</li></Link>
                        <Link><li>My List</li></Link>
                        <Link><li>Browse By Language</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Nav ;