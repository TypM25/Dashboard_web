import { Link } from "react-router-dom"

export default function DataTable({ bdata }) {

    if (!bdata || bdata.length === 0) {
        return <p> DataTable error </p>
    }

    return (
        <div>
            <table className='block overflow-auto h-80'>
                <thead >
                    <tr >
                        {bdata && bdata.length > 0 && Object.keys(bdata[0]).map((key, index) => (
                            <th key={index} className='px-2 py-2 bg-blue-900 text-white font-content'>
                                {key}
                            </th>
                        ))}

                    </tr>
                </thead>

                <tbody>
                    {bdata.slice(0, 100).map((item, index) => (
                        <tr key={index}>
                            {Object.values(item).map((value, index) => (
                                <td key={index} className='bg-gray-100 px-2 py-2 font-content'>
                                    {value}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-center">
                <Link className="p-2 my-4 rounded-md bg-amber-200 font-content font-bold text-rose-800
                 ease-in-out duration-200 hover:scale-110 hover:bg-amber-400" to="/addData">
                    ADD NEWS
                </Link>
            </div>
        </div>

    )
};

