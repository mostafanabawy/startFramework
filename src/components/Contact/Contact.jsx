import { useState } from "react"

function Contact() {
    let [inputValue1 , setInput1] = useState(null)
    let [inputValue2 , setInput2] = useState(null)
    let [inputValue3 , setInput3] = useState(null)
    let [inputValue4 , setInput4] = useState(null)
    return (
        <div className='py-5 min-vh-100 d-flex flex-column align-items-center'>
            <h2 className="secondary-c mt-5">CONTACT SECTION</h2>
            <div className="d-flex align-items-center justify-content-center mb-3">
                <div className="line me-3 bg-secondary-c"></div>
                <i className="fa-solid fa-star secondary-c"></i>
                <div className="line ms-3 bg-secondary-c"></div>
            </div>
            <form action="" className="w-50 p-3 mx-auto mt-5">
                <label htmlFor="userName" className={"position-relative top-0 main-c " + (inputValue1? "" : "labl") }>userName : </label>
                <input onChange={(e)=>{setInput1(e.target.value)}} id="userName" type="text" placeholder="userName" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid" />
                <label htmlFor="userAge" className={"position-relative top-0 main-c " + (inputValue2? "" : "labl") }>userAge : </label>
                <input onChange={(e)=>{setInput2(e.target.value)}} id="userAge" type="text" placeholder="userAge" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid" />
                <label htmlFor="userEmail" className={"position-relative top-0 main-c " + (inputValue3? "" : "labl") }>userEmail : </label>
                <input onChange={(e)=>{setInput3(e.target.value)}} id="userEmail" type="text" placeholder="userEmail" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid" />
                <label htmlFor="userPassword" className={"position-relative top-0 main-c " + (inputValue4? "" : "labl") }>userPassword : </label>
                <input onChange={(e)=>{setInput4(e.target.value)}} id="userPassword" type="text" placeholder="userPassword" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid" />
                <button className="btn mt-4 text-white bg-main main-c"> send Message </button>
            </form>
        </div>
    )
}

export default Contact
