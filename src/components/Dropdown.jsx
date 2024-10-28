import { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from './DataTable';



function Dropdown() {
    const [bdata, setBdata] = useState([]);
    let [item, setItem] = useState('id')
    const [sortType, setSortType] = useState('DESC');

    const url = `https://bankkie-555.netlify.app/api/sort/top100/${item}/${sortType}`

    async function fetchData() {
        try {
            const response = await axios.get(url);
            setBdata(response.data);
            // setLoading(false);
        } catch (error) {
            console.log(error, "Fetch error");
            // setLoading(false);
        }
    }

    function handleSelect(e) {
        setItem(e.target.value)
    }

    function handleSortType(e) {
        setSortType(e.target.value)
    }


    useEffect(() => {
        fetchData();
    }, [item, sortType]);

    return (
        <div>
            <label className='mr-3 font-content' htmlFor="sortItem">Sorting : </label>
            <select className='bg-blue-100 rounded-md px-2 py-1 font-content mb-5' name="sortItem" id="item" value={item} onChange={handleSelect}>
                <option className="font-content" value="id">ID</option>
                <option className="font-content" value="balance">Balances</option>
                <option className="font-content" value="age">Age</option>
                <option className="font-content" value="duration">Duration</option>
            </select>
            <form className="mb-2" onChange={handleSortType} value={sortType}>
                <label className="mr-4 font-content">
                    <input className="mr-2 " type="radio" name="sortOrder" value="DESC" defaultChecked />
                    Descending Order
                </label>
                <label className='font-content'>
                    <input className="mr-2" type="radio" name="sortOrder" value="ASC" />
                    Ascending Order
                </label>
            </form>
            <DataTable bdata={bdata} />
        </div>
    )
}

export default Dropdown