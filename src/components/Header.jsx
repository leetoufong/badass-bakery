import { Link, useLocation } from "react-router";

const Header = (props) => {
    const { title } = props;
    const location = useLocation();

    return (
        <header className="p-10">
            <h1 className={`font-display uppercase  text-pink-800 ${location.pathname === '/' ? 'text-8xl' : 'text-6xl'}`}>
                {location.pathname !== '/' ? (
                    <Link to="/">{title}</Link>
                ) : (
                    <>
                        {title}
                    </>
                )}
            </h1>
        </header>
    )
}

export default Header