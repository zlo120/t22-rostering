import { Outlet, useLocation } from 'react-router-dom'
import NavbarComponent from './Nav';

const Layout = () => {
    const location = useLocation();
    if (location.pathname === "/login" || location.pathname === "/register") {
        return (
            <Outlet />
        )
    }

    return (
        <>
            <NavbarComponent />
            <div className='container'>
                <Outlet />
            </div>
        </>
    )
}

export default Layout;