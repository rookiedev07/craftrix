import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'


const Enquiry = () => {

const navigate = useNavigate();

const handleOnclick= () => {
    navigate("/contact");
};
    return (
        <div>
            <div className="h-[200px] w-[70em] flex items-center ml-[100px] mb-20 mt-20 ">
                <p className="font-bold text-3xl ml-[100px]">
                    Are you ready to take the next step <br /> toward your future career?
                </p>

                <button onClick = {handleOnclick}className="font-bold bg-white px-6 py-3 ml-[200px] flex items-center gap-2 rounded-lg shadow-md 
            transform duration-300 transition-all hover:bg-[#0A2540] hover:text-white">
                    Enquire Now
                    <FaArrowRight className=" transition-colors duration-300 group-hover:text-white hover:text-white" />
                </button>

            </div>
        </div>
    )
}

export default Enquiry