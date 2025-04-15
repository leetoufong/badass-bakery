import { Outlet } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Cart from '../components/Cart'

const Layout = (props) => {
    const { data, cart } = props;

    return (
        <>
            <Header title={data.title} />
            <Cart cart={ cart } />

            <main className="p-4" role="main">
                <Outlet />
            </main>

            <Footer />
        </>
    )
}

export default Layout