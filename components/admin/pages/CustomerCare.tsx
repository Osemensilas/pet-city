import Image from 'next/image';

const CustomerCare = () => {
    return ( 
        <>
        <div className="w-full">
            
            {/* Header */}
            <header className="w-full flex justify-between items-center px-20 py-5">
                <h2 className="font-semibold text-3xl">Customer Care Center</h2>
            </header>

            {/* Dashboard Cards */}
            <div className="px-20">
                <div className="flex gap-5">
                    
                    {[ 
                        { title: "Open Tickets", value: 5 },
                        { title: "Resolved Tickets", value: 5 },
                        { title: "Top Issue Category", value: 5 },
                    ].map((item, index) => (
                        <div key={index} className="flex-1 bg-[var(--background)] shadow-[0_0_30px_rgba(0,0,0,0.1)] rounded-[10px] p-5">
                            
                            <header className="flex items-center justify-between mb-4">
                                <i className="fa fa-right-left"></i>
                                <h3 className="text-[22px] font-semibold">{item.value}</h3>
                            </header>

                            <div>
                                <h2 className="text-[18px]">{item.title}</h2>
                            </div>

                        </div>
                    ))}

                </div>
            </div>

            {/* Content */}
            <div className="w-full px-20 py-5">
                
                {/* Tabs */}
                <div className="flex items-center gap-3 border-b border-grey py-5">
                    <button className="bg-transparent border-none text-grey font-semibold border-b-2 border-black pb-1">
                        Refunds
                    </button>
                    <button className="bg-transparent border-none text-grey">
                        Return Requests
                    </button>
                    <button className="bg-transparent border-none text-ggrey">
                        Others
                    </button>
                </div>

                {/* Filters */}
                <form className="flex justify-between items-center py-5">
                    <div className="flex items-center gap-3">
                        <select title="id" className="border border-grey px-4 py-2 rounded-[10px] text-[15px] outline-none">
                            <option value="">ID</option>
                        </select>
                        <select title="name" className="border border-grey px-4 py-2 rounded-[10px] text-[15px] outline-none">
                            <option value="">Sort By Name</option>
                        </select>
                    </div>

                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="Search"
                            className="h-[40px] w-[300px] px-12 border border-grey rounded-[10px] outline-none text-[16px]"
                        />
                        <i className="fa fa-search absolute top-[10px] left-[15px] text-grey"></i>
                    </div>
                </form>

                {/* Table */}
                <div>
                    <table className="w-full">
                        <thead>
                            <tr className="text-left">
                                <th><input type="checkbox" title="checkbox" /></th>
                                <th>Username</th>
                                <th>Ticket ID</th>
                                <th>Date Created</th>
                                <th>Subject</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody className="text-[15px]">
                            {[...Array(9)].map((_, index) => (
                                <tr key={index} className="border-b border-gray-300">
                                    <td className="py-5"><input type="checkbox" title="checkbox" /></td>
                                    <td>Chris Green</td>
                                    <td>#495790</td>
                                    <td>June 1st, 2024 | 1:00 PM</td>
                                    <td>Refund not Recieved</td>
                                    <td>
                                        <span className="text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full text-[14px]">
                                            Processing
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Pagination */}
                    <div className="flex justify-between items-center py-3">
                        <div className="text-[16px]">
                            showing 1 - 10 of 25
                        </div>

                        <ul className="flex items-center gap-3">
                            <li>
                                <button title="nav" type="button" className="h-[20px] w-[20px] border border-grey text-grey rounded-[5px] flex items-center justify-center">
                                    <i className="fa fa-angle-left"></i>
                                </button>
                            </li>

                            <li>
                                <button className="h-[20px] w-[20px] bg-[var(--primary)] text-[var(--background)] rounded-full flex items-center justify-center">
                                    1
                                </button>
                            </li>

                            <li>
                                <button className="text-[15px]">2</button>
                            </li>

                            <li>
                                <button className="text-[15px]">3</button>
                            </li>

                            <li>...</li>

                            <li>
                                <button className="text-[15px]">10</button>
                            </li>

                            <li>
                                <button title="nav" type="button" className="h-[20px] w-[20px] border border-primary text-primary rounded-[5px] flex items-center justify-center">
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
 
export default CustomerCare;