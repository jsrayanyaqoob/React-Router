import { NavLink } from "react-router-dom"

function Navbar(){
    return(
        <>
            <div>
                <nav>
                    <NavLink className={(e) => {return e.isActive ? "red" : ""}} to="/"><li>Home</li></NavLink>
                    <NavLink className={(e) => {return e.isActive ? "red" : ""}} to="/contact"><li>Contact</li></NavLink>
                    <NavLink className={(e) => {return e.isActive ? "red" : ""}} to="/service"><li>Service</li></NavLink>
                </nav> 
            </div>
        </>
    )
}

export default Navbar