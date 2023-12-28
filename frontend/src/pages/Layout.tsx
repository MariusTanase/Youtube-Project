import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            {/* tailwind nav */}
            <nav className="flex justify-between items-center h-16 text-black relative font-mono max-w-[1280px] m-auto" role="navigation">

                <Link to="/" className="pl-8">Youtube API</Link>

                <div className="pr-8 md:block hidden">
                    <Link className="p-4" to="/">Home</Link>
                    <Link className="p-4" to="/about">About</Link>
                </div>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;