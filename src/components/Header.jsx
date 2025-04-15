import { useLocation } from "react-router";

const Header = (props) => {
    const { title } = props;
    const location = useLocation();

    console.log(location.pathname)

    return (
        <header className={location.pathname === '/' ? 'billboard bg-pink-light h-[85vh] flex items-center justify-center' : ''}>
            <h1 className={`font-display uppercase  text-pink-800 ${location.pathname === '/' ? 'text-8xl' : 'text-6xl'}`}>{title}</h1>
        </header>
    )
}

export default Header