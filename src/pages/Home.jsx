import Catalog from "../components/Catalog";

const Home = (props) => {
    const { setCart, data } = props;

    return (
        <>
            <div className={`billboard bg-pink-light h-[85vh] flex items-center justify-center`}></div>
    
            <Catalog setCart={setCart} data={data}></Catalog>
        </>
    )
}

export default Home