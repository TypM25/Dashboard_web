import Navbar from '../components/Navbar';
import { useState } from 'react';
import axios from 'axios';

const add_url = 'http://localhost:5000/api/add/new_data'

function AddDatapage() {
    const [formData, setFormData] = useState({
        age: '',
        job: '',
        marital: '',
        education: '',
        default: '',
        balance: '',
        housing: '',
        loan: '',
        contact: '',
        day: '',
        month: '',
        duration: '',
        campaign: '',
        pdays: '',
        previous: '',
        poutcome: '',
        y: ''
    });


    function handleChange(e) {
        const { id, value, type, name } = e.target;
        if (type === 'radio') {
            setFormData((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [id]: value,
            }));
        }

    }


    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const isFormValid = Object.values(formData).every(value => value !== '' && value !== null);

            if (isFormValid) {
                const result = await axios.post(add_url, formData);
                console.log('New Data:', result.data);
            } else {
                alert("Please fill all data.");
            }
        } catch (error) {
            console.log("Error ", error);
        }
    }



    return (
        <div className='min-h-screen'>
            <nav className="sticky top-0">
                <Navbar />
            </nav>

            <div className='flex flex-col justify-center items-center m-6'>
                <label className='font-content font-bold mb-6 text-lg text-blue-600'>Add new information</label>
                <form className="grid grid-cols-3 gap-x-28" action="" onSubmit={handleSubmit}>
                    <label htmlFor="age" className="flex flex-col font-content">
                        Age :
                        <input id="age" className="bg-gray-200 h-9 w-25 mb-8 p-2 rounded-md text-sky-700" onChange={handleChange} type="number" min="0" max="120" />
                    </label>
                    <label htmlFor="job" className="flex flex-col font-content">
                        Job :
                        <input id="job" className="bg-gray-200 h-9 w-25 mb-8 p-2 rounded-md text-sky-700" onChange={handleChange} type="text" />
                    </label>
                    <label htmlFor="marital" className="flex flex-col font-content">
                        Marital Status :
                        <select id="marital" className="bg-gray-200 h-9 w-25 mb-8 p-2 rounded-md text-sky-700" onChange={handleChange} value={formData.marital}>
                            <option value="" disabled>Select marital</option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                            <option value="divorced">Divorced</option>
                            <option value="unknown">Unknown</option>
                        </select>
                    </label>
                    <label htmlFor="education" className="flex flex-col font-content">
                        Education :
                        <select id="education" className="bg-gray-200 h-9 w-25 mb-8 p-2 rounded-md text-sky-700" onChange={handleChange} value={formData.education}>
                            <option value="" disabled>Select Education</option>
                            <option value="primary">Primary</option>
                            <option value="secondary">Secondary</option>
                            <option value="tertiary">Tertiary</option>
                            <option value="unknown">Unknown</option>
                        </select>
                    </label>
                    <label className="flex flex-col font-content">
                        Default :
                        <div className="flex items-center space-x-4 mt-2">
                            <input id="default-yes" name="default" className="bg-gray-200 h-4 w-4" type="radio" value="yes" onChange={handleChange} />
                            <label htmlFor="default-yes">Yes</label>
                            <input id="default-no" name="default" className="bg-gray-200 h-4 w-4" type="radio" value="no" onChange={handleChange} />
                            <label htmlFor="default-no">No</label>
                        </div>
                    </label>
                    <label htmlFor="balance" className="flex flex-col font-content">
                        Balance :
                        <input id="balance" className="bg-gray-200 h-9 w-25 mb-8 p-2 rounded-md text-sky-700" onChange={handleChange} type="number" />
                    </label>
                    <label className="flex flex-col font-content">
                        Housing Loan :
                        <div className="flex items-center space-x-4 mt-2">
                            <input id="housing-yes" name="housing" className="bg-gray-200 h-4 w-4" type="radio" value="yes" onChange={handleChange} />
                            <label htmlFor="housing-yes">Yes</label>
                            <input id="housing-no" name="housing" className="bg-gray-200 h-4 w-4" type="radio" value="no" onChange={handleChange} />
                            <label htmlFor="housing-no">No</label>
                        </div>
                    </label>
                    <label className="flex flex-col font-content">
                        Personal Loan :
                        <div className="flex items-center space-x-4 mt-2">
                            <input id="loan-yes" name="loan" className="bg-gray-200 h-4 w-4" type="radio" value="yes" onChange={handleChange} />
                            <label htmlFor="loan-yes">Yes</label>
                            <input id="loan-no" name="loan" className="bg-gray-200 h-4 w-4" type="radio" value="no" onChange={handleChange} />
                            <label htmlFor="loan-no">No</label>
                        </div>
                    </label>
                    <label htmlFor="contact" className="flex flex-col font-content">
                        Contact :
                        <select id="contact" className="bg-gray-200 h-9 w-25 mb-8 p-2 rounded-md text-sky-700" onChange={handleChange} value={formData.contact}>
                            <option value="" disabled>Select Contact</option>
                            <option value="telephone">Telephone</option>
                            <option value="cellular">Cellular</option>
                            <option value="unknown">Unknown</option>
                        </select>
                    </label>
                    <label htmlFor="day" className="flex flex-col font-content">
                        Day :
                        <input id="day" className="bg-gray-200 h-9 w-25 mb-8 p-2 rounded-md text-sky-700" onChange={handleChange} type="number" min="1" max="31" />
                    </label>
                    <label htmlFor="month" className="flex flex-col font-content">
                        Month :
                        <select id="month" className="bg-gray-200 h-9 w-25 mb-8 p-2 rounded-md text-sky-700" onChange={handleChange} value={formData.month}>
                            <option value="" disabled>Select Month</option>
                            <option value="jan">January</option>
                            <option value="feb">February</option>
                            <option value="mar">March</option>
                            <option value="apr">April</option>
                            <option value="may">May</option>
                            <option value="jun">June</option>
                            <option value="jul">July</option>
                            <option value="aug">August</option>
                            <option value="sep">September</option>
                            <option value="oct">October</option>
                            <option value="nov">November</option>
                            <option value="dec">December</option>
                        </select>
                    </label>
                    <label htmlFor="duration" className="flex flex-col font-content">
                        Duration (seconds) :
                        <input id="duration" className="bg-gray-200 h-9 w-25 mb-8 p-2 rounded-md text-sky-700" onChange={handleChange} type="number" min="0" />
                    </label>
                    <label htmlFor="campaign" className="flex flex-col font-content">
                        Campaign :
                        <input id="campaign" className="bg-gray-200 h-9 w-25 mb-8 p-2 rounded-md text-sky-700" onChange={handleChange} type="number" min="1" />
                    </label>
                    <label htmlFor="pdays" className="flex flex-col font-content">
                        Pdays :
                        <input id="pdays" className="bg-gray-200 h-9 w-25 mb-8 p-2 rounded-md text-sky-700" onChange={handleChange} type="number" />
                    </label>
                    <label htmlFor="previous" className="flex flex-col font-content">
                        Previous :
                        <input id="previous" className="bg-gray-200 h-9 w-25 mb-8 p-2 rounded-md text-sky-700" onChange={handleChange} type="number" min="0" />
                    </label>
                    <label htmlFor="poutcome" className="flex flex-col font-content">
                        Poutcome :
                        <select id="poutcome" className="bg-gray-200 h-9 w-25 mb-8 p-2 rounded-md text-sky-700" onChange={handleChange} value={formData.poutcome}>
                            <option value="" disabled>Select pOutcome</option>
                            <option value="success">Success</option>
                            <option value="failure">Failure</option>
                            <option value="other">Other</option>
                            <option value="unknown">Unknown</option>
                        </select>
                    </label>
                    <label className="flex flex-col font-content">
                        Target Variable :
                        <div className="flex items-center space-x-4 mt-2">
                            <input id="y-yes" name="y" className="bg-gray-200 h-4 w-4" type="radio" value="yes" onChange={handleChange} />
                            <label htmlFor="y-yes">Yes</label>
                            <input id="y-no" name="y" className="bg-gray-200 h-4 w-4" type="radio" value="no" onChange={handleChange} />
                            <label htmlFor="y-no">No</label>
                        </div>
                    </label>
                    <div className="col-span-3 flex justify-center mt-4">
                        <button type="submit" className="py-2 px-10 rounded-xl bg-amber-500 text-amber-900 font-bold font-content
                        transition duration-100 ease-out hover:duration-150 hover:scale-110 hover:bg-amber-700 hover:text-white">
                            Submit</button>
                    </div>
                </form>
            </div>

            <footer className='bottom-0 left-0 right-0 flex justify-center items-center mt-10 bg-blue-700 h-14'>
                <h4 className='text-white font-content'>@Bank</h4>
            </footer>
        </div>
    );
}

export default AddDatapage;
