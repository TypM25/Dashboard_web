import { Link } from 'react-router-dom'; 
export default function Navbar() {
    return (
        <nav className="flex py-3 px-9 h-13 w-full justify-between items-center bg-blue-900">
            <Link to="/home">
              <img className="h-10" src="./image/dashboardicon.png" alt="Debit Card" />
            </Link>
            

            <ul className="flex text-white">
                <li>
                    <Link to="/member"> 
                        <img className="h-10" src="./image/member.png" alt="Dashboard Icon" />
                    </Link>
                </li>
                <li>
                    <Link to="/"> 
                        <img className="h-10 ml-9" src="./image/logouticon.png" alt="Logout Icon" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
