import { Outlet, useLocation } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Cart from '../components/Cart'

const Layout = (props) => {
    const { data, cart } = props;
    const location = useLocation();

    return (
        <>
            <Header title={data?.title} />

            {cart.length > 0 && location.pathname !== '/checkout' && <Cart cart={ cart } />}

            <main className="w-full p-10 pt-0 ml-auto mr-auto" role="main">
                <Outlet />
            </main>

            <Footer />
        </>
    )
}

export default Layout