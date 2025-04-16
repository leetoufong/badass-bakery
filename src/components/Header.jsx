import { Link, useLocation } from "react-router";

const Header = (props) => {
    const { title } = props;
    const location = useLocation();

    console.log(location.pathname)

    return (
        <header className={location.pathname === '/' ? 'billboard bg-pink-light h-[85vh] flex items-center justify-center' : ''}>
            <h1 className={`font-display uppercase  text-pink-800 ${location.pathname === '/' ? 'text-9xl' : 'text-6xl'}`}>
                <Link to="/">{title}</Link>
            </h1>
        </header>
    )
}

export default Header