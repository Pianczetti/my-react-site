import './styles.css'
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
    return(
        <nav className="nav">
            <Link to="/" className="site-title">
                My React Site
            </Link>
            <ul>
                    <CustomLink to="/card">Credit Card</CustomLink>
                    <CustomLink to="/checkers">Checkers Game</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink ({to, children, ...props}){
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: false })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}