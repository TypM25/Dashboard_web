import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const url = "https://dbbank123.netlify.app/api/users"

export default function Loginpage() {
    const [user, setUser] = useState([])
    const [usernameinput, setUsernameinput] = useState('')
    const [passwordinput, setPasswordinput] = useState('')

    const navigate = useNavigate();

    async function fetchUsers() {
        try {
            const response = await axios.get(url);
            setUser(response.data)
        }
        catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    function handleChange(e) {
        const id = e.target.id
        if (id === 'unInput') {
            setUsernameinput(e.target.value)

        }
        if (id === 'pwInput') {
            setPasswordinput(e.target.value)

        }
    }

    function handleLoginbutton(e) {
        e.preventDefault();
        if (user.some(us => us.username === usernameinput && us.password === passwordinput)) {
            alert("Login successful");
            navigate("/home");
        } else {
            alert("Your password or username is not found");
        }
    }

    return (
        <div className="flex justify-center items-center p-7 border-4 h-screen ">

            <form className="flex flex-col justify-center items-center h-[700px] w-1/2" action="">
                <img className="w-80 mb-14" src="./image/savings.png" alt="" />

                <div className="grid grid-cols-1 grid-rows-2 gap-4">
                    <div className="flex items-center mb-7">
                        <img className="h-7 mr-3" src="./image/user.png" alt="" />
                        <input id="unInput" className="h-6 bg-gray-200 rounded-lg p-2 py-4 text-sm w-56" type="username" onChange={handleChange} value={usernameinput} />
                    </div>
                    <div className="flex items-center mb-7">
                        <img className="h-7 mr-3" src="./image/password.png" alt="" />
                        <input id="pwInput" className="h-6 bg-gray-200 rounded-lg p-2 py-4 text-sm w-56" type="password" onChange={handleChange} value={passwordinput} />
                    </div>
                </div>

                <button className="flex items-center justify-center rounded-lg mt-5 p-1 w-20 text-white font-content font-bold bg-amber-500
        transition delay-80 duration-100 ease-in-out
        hover:bg-amber-300"
                    onClick={handleLoginbutton}>
                    Login
                </button>
            </form>
        </div>
    )
}