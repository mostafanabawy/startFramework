
function About() {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center gap-3 py-5 bg-main min-vh-100'>
            <h2 className="mt-5 text-light">about component</h2>
            <div className="d-flex align-items-center justify-content-center mb-3">
                <div className="line me-3"></div>
                <i className="fa-solid fa-star text-light"></i>
                <div className="line ms-3"></div>
            </div>
            <div className="container">
                <div className="row px-5">
                    <div className="col-md-6 ps-md-5">
                        <p className="text-light">
                            Freelancer is a free bootstrap theme created by Route. The download includes the complete source
                            files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy
                            customization.
                        </p>
                    </div>
                    <div className="col-md-6 pe-5">
                        <p className="text-light">
                            Freelancer is a free bootstrap theme created by Route.
                            The download includes the complete source files including HTML,
                            CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
