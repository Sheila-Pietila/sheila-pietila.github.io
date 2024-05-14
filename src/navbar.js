import "./navbar.css"
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="nav"> 
            <Link to="/" className="site-title">Site Name</Link>
            <ul>
                <PageLink to="/example">React Example</PageLink>
                <PageLink to="/mealplan">Meal Planner</PageLink>
                <PageLink to="/about">About</PageLink>
            </ul>
        </nav>
    );
}

function PageLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to); // This says to use the full path, not relative parts if applicable
    const isActive = useMatch({path: resolvedPath.pathname }) // This is a partial match, e.g. /mealplan/ingredients will match /mealplan

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}> 
                {children}
            </Link>
        </li>
    );
}