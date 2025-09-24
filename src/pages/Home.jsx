import Billboard from "../components/Billboard";
import Catalog from "../components/Catalog";

const Home = (props) => {
    const { setCart, data } = props;

    return (
        <>
            <Billboard />
    
            <Catalog setCart={setCart} data={data} />
        </>
    )
}

export default Home