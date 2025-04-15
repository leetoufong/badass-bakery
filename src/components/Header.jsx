const Header = (props) => {
    const { title } = props;

    return (
        <header className="billboard bg-pink-light h-[85vh] flex items-center justify-center">
            <h1 className="font-display uppercase text-8xl text-pink-800">{title}</h1>
        </header>
    )
}

export default Header