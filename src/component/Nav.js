function Nav(){
    return(
        <div >
            <div className="menu">
                <div><img src="../images/logo.png"  className="img-logo"></img></div>
                <div>
                    <ul className="sous-menu">
                        <li><a>Home</a></li>
                        <li><a>TV Shows</a></li>
                        <li><a>Movies</a></li>
                        <li><a>New & Popular</a></li>
                        <li><a>My List</a></li>
                        <li><a>Browse By Language</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Nav ;