import Image from 'next/image';

const Buyers = () => {
    return ( 
        <>
        <div className="w-full h-max">
            <div className="px-12 pb-10 w-full">
                <h2 className="text-3xl font-semibold">Buyers</h2>
            </div>
            <div className="px-12 pb-5">
                <form className="flex justify-between items-center py-5">
                    <div className="flex items-center gap-3">
                        <select title="id" className="border border-[var(--grey)] px-4 py-2 rounded-lg text-[15px] outline-none">
                            <option>ID</option>
                        </select>
                        <select title="location" className="border border-[var(--grey)] px-4 py-2 rounded-lg text-[15px] outline-none">
                            <option>Location</option>
                        </select>
                        <select title="name" className="border border-[var(--grey)] px-4 py-2 rounded-lg text-[15px] outline-none">
                            <option>Sort By Name</option>
                        </select>
                    </div>

                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="Search"
                            className="h-10 w-[300px] px-[50px] border border-[var(--grey)] rounded-lg outline-none text-base"
                        />
                        <i className="fa fa-search absolute left-4 top-3 text-[var(--grey)]"></i>
                    </div>
                </form>

                <div>
                    <table className="w-full">
                        <thead>
                            <tr className="text-left">
                                <th>Customer Name</th>
                                <th>id</th>
                                <th>Phone</th>
                                <th>Location</th>
                                <th>Order(s)</th>
                                <th>Total Spent</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {[...Array(11)].map((_, i) => (
                                <tr key={i} className="border-b border-[var(--grey)]">
                                    <td className="py-5">Chris Green</td>
                                    <td>#287</td>
                                    <td>09047589346</td>
                                    <td>Lugbe, Abuja</td>
                                    <td>354</td>
                                    <td>{Number(1000000)}</td>
                                    <td className="text-green-600">Active</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="flex justify-between items-center py-3">
                        <div className="text-base">
                            showing 1 - 10 of 25
                        </div>

                        <ul className="flex items-center gap-2 list-none">
                            <li>
                                <button title="prev" className="h-5 w-5 border border-[var(--grey)] rounded text-[var(--grey)] flex items-center justify-center">
                                    <i className="fa fa-angle-left"></i>
                                </button>
                            </li>

                            <li>
                                <button className="h-5 w-5 bg-[var(--primary)] text-[var(--background)] rounded-full flex items-center justify-center">
                                    1
                                </button>
                            </li>

                            <li>
                                <button>2</button>
                            </li>

                            <li>
                                <button>3</button>
                            </li>

                            <li>...</li>

                            <li>
                                <button>10</button>
                            </li>

                            <li>
                                <button title="next" className="h-5 w-5 border border-primary text-primary rounded flex items-center justify-center">
                                    <i className="fa fa-angle-right"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Buyers;