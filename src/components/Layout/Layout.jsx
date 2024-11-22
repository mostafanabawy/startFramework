import { Link, NavLink, Outlet } from "react-router-dom"

function Layout() {
    return (<>

        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
                <Link to="/" className="navbar-brand text-light fw-bolder fs-2">START FRAMEWORK</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <NavLink to="/about" className="nav-link text-light fw-bold rounded-3" aria-current="page">ABOUT</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/portfolio" className="nav-link text-light fw-bold rounded-3">PORTFOLIO</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link text-light fw-bold rounded-3">CONTACT</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <main> 
            <Outlet />
        </main>
        <footer>
            <div className="container p-4">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="d-flex flex-column flex-wrap flex-1 align-items-center">
                        <h3 className="text-light">LOCATION</h3>
                        <p className="text-light">2215 John Daniel Drive</p>
                        <p className="text-light">Clark, MO 65243</p>
                    </div>
                    <div className="d-flex flex-column flex-wrap flex-1 align-items-center">
                        <h3 className="text-light">AROUND THE WEB</h3>
                        <div className="d-flex">
                            <i className="fa-brands fa-facebook mx-1 text-light border border-white rounded-circle p-2"></i>
                            <i className="fa-brands fa-twitter mx-1 text-light border border-white rounded-circle p-2"></i>
                            <i className="fa-brands fa-linkedin-in mx-1 text-light border border-white rounded-circle p-2"></i>
                            <i className="fa-solid fa-globe mx-1 text-light border border-white rounded-circle p-2"></i>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-wrap flex-1 align-items-center">
                        <h3 className="text-light">ABOUT FREELANCER</h3>
                        <p className="text-light">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
        </footer>
    </>

    )
}

export default Layout
