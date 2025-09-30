import { Link } from "react-router-dom"

function Navbar(){
    return(
        <>
            <div>
                <nav>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                    <Link to="/service"><li>Service</li></Link>
                </nav> 
            </div>
        </>
    )
}

export default Navbar