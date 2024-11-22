import avatar from "../../assets/avatars.svg"
function Home() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center py-5 bg-main min-vh-100">
            <div className="py-5 d-flex justify-content-center flex-column align-items-center">
                <img src={avatar} alt="" className="w-50" />
                <h2 className="text-light fw-bolder fs-1 mt-3">START FRAMEWORK</h2>
                <div className="d-flex align-items-center justify-content-center mb-3">
                    <div className="line me-3"></div>
                    <i className="fa-solid fa-star text-light"></i>
                    <div className="line ms-3"></div>
                </div>
                <div className="text-light">Graphic Artist - Web Designer - Illustrator</div>
            </div>
        </div>
    )
}

export default Home
