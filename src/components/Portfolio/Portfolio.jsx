import { useState } from "react"
import p1 from "../../assets/portfolio/port1.png"
import p2 from "../../assets/portfolio/port2.png"
import p3 from "../../assets/portfolio/port3.png"
import p from "./portfolio.module.css"

function Portfolio() {
    let [modalImage, setModalImage] = useState(null)
    function openImage(e) {
        const imageSrc = e.currentTarget.getAttribute("data-src");
        setModalImage(imageSrc);
    }
    function closeImage(e) {
        if (e.target.tagName !== "IMG") {
            setModalImage(null);
        }
    }
    return (
        <div className='py-5 min-vh-100 d-flex flex-column align-items-center'>
            <h2 className="secondary-c mt-5">PORTFOLIO COMPONENT</h2>
            <div className="d-flex align-items-center justify-content-center mb-3">
                <div className="line me-3 bg-secondary-c"></div>
                <i className="fa-solid fa-star secondary-c"></i>
                <div className="line ms-3 bg-secondary-c"></div>
            </div>
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-4 col-md-6">
                        <div className="rounded-3 overflow-hidden position-relative">
                            <img alt="" className="w-100 rounded-3" src={p1} />
                            <div data-src={p1} onClick={openImage} className={"opacity-0 position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center " + p.layer}>
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="rounded-3 overflow-hidden position-relative">
                            <img alt="" className="w-100 rounded-3" src={p2} />
                            <div data-src={p2} onClick={openImage} className={"opacity-0 position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center " + p.layer}>
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="rounded-3 overflow-hidden position-relative">
                            <img alt="" className="w-100 rounded-3" src={p3} />
                            <div data-src={p3} onClick={openImage} className={"opacity-0 position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center " + p.layer}>
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="rounded-3 overflow-hidden position-relative">
                            <img alt="" className="w-100 rounded-3" src={p1} />
                            <div data-src={p1} onClick={openImage} className={"opacity-0 position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center " + p.layer}>
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="rounded-3 overflow-hidden position-relative">
                            <img alt="" className="w-100 rounded-3" src={p2} />
                            <div data-src={p2} onClick={openImage} className={"opacity-0 position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center " + p.layer}>
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="rounded-3 overflow-hidden position-relative">
                            <img alt="" className="w-100 rounded-3" src={p3} />
                            <div data-src={p3} onClick={openImage} className={"opacity-0 position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center " + p.layer}>
                                <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={closeImage} className={"position-fixed z-3 start-0 end-0 top-0 bottom-0 bg-primary bg-opacity-25 justify-content-center align-items-center " + (modalImage ? "d-flex" : "d-none")}>
                <img alt="" src={modalImage} className="w-50" />
            </div>
        </div>
    )
}

export default Portfolio

