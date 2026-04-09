'use client';

import React from 'react';

const Orders = () => {

    const viewOrder = (e: React.MouseEvent<HTMLButtonElement>) => {
        const itemId = (e.currentTarget as HTMLButtonElement).value;
        let url = '/admin/dashboard/orders/view-orders?id=' + itemId;
        window.history.pushState({}, '', url);
    }

    return (
        <>
        <div className="w-full h-max">
            {/* HEADER */}
            <div className="px-12 pb-10 w-full">
                <h2 className="text-3xl font-semibold">Orders</h2>
            </div>

            {/* EARNINGS CARD */}
            <div className="h-max w-full px-12">
                <div className="flex items-center gap-2 mb-2 text-gray-500">
                    <i className="fa-solid fa-coins"></i>
                    <p>Total Earnings</p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold">
                        ₦{Number(450000).toLocaleString()}
                    </h2>
                    <p className="text-gray-400 text-sm">
                        +{Number(5300).toLocaleString()} this week
                    </p>
                </div>
            </div>

            {/* CONTENT */}
            <div className="px-12 py-10">

                {/* TABS */}
                <div className="flex items-center gap-3 py-5 border-b border-gray-200">
                    <button className="text-black border-b-2 border-black font-semibold pb-1">
                        New
                    </button>
                    <button className="text-grey">Processed</button>
                    <button className="text-grey">Cancelled</button>
                    <button className="text-grey">Returned</button>
                    <button className="text-grey">Analytics</button>
                </div>

                {/* FILTER */}
                <form className="flex justify-between items-center py-5">

                    <div className="flex items-center gap-3">
                        <select title="customer" className="border border-gray-400 px-4 py-2 rounded-lg text-sm">
                            <option>Customer</option>
                        </select>

                        <select title="status" className="border border-gray-400 px-4 py-2 rounded-lg text-sm">
                            <option>Status</option>
                        </select>

                        <select title="today" className="border border-gray-400 px-4 py-2 rounded-lg text-sm">
                            <option>Today</option>
                        </select>

                        <select title="modify" className="border border-gray-400 px-4 py-2 rounded-lg text-sm">
                            <option>Modify</option>
                        </select>
                    </div>

                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            className="h-10 w-[300px] pl-12 pr-4 border border-gray-400 rounded-lg text-sm outline-none"
                        />
                        <i className="fa fa-search absolute top-2.5 left-4 text-gray-400"></i>
                    </div>

                </form>

                {/* TABLE */}
                <div>
                    <table className="w-full border-collapse text-center">
                        <thead className="bg-gray-100 border-t border-gray-400">
                            <tr>
                                <th>id</th>
                                <th>Customer</th>
                                <th>Item Type</th>
                                <th>Item Details</th>
                                <th>Order date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...Array(10)].map((_, i) => (
                                <tr key={i} className="border-b border-grey py-2">
                                    <td className="px-4 ">#1025</td>
                                    <td className="px-4 py-4">Chris Green</td>
                                    <td className="px-4 py-4">Scarf</td>
                                    <td className="px-4 py-4">Grey Wool Bl...</td>

                                    <td className="px-4 py-4">
                                        03 Mar. 24
                                        <span className="mx-2"></span>
                                        10:00 am
                                    </td>

                                    <td className="px-4 py-4">
                                        <span className="px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-600">
                                            Processing
                                        </span>
                                    </td>

                                    <td className="px-4 py-4">
                                        <button type="button" className="text-primary underline" value={"#854763"} onClick={viewOrder}>
                                            View
                                        </button>{" "}
                                        Report Issue
                                    </td>

                                </tr>
                            ))}

                        </tbody>

                    </table>

                    {/* PAGINATION */}
                    <div className="flex justify-between items-center py-3">

                        <div className="text-sm">
                            showing 1 - 10 of 25
                        </div>

                        <ul className="flex items-center gap-3">

                            <li>
                                <button type="button" title="button" className="w-5 h-5 border border-grey rounded flex items-center justify-center text-gray-400">
                                    <i className="fa fa-angle-left"></i>
                                </button>
                            </li>

                            <li>
                                <button className="w-5 h-5 bg-primary text-accent rounded-full flex items-center justify-center">
                                    1
                                </button>
                            </li>
                            <li><button>2</button></li>
                            <li><button>3</button></li>
                            <li>...</li>
                            <li><button>10</button></li>
                            <li>
                                <button type="button" title="button" className="w-5 h-5 border border-primary text-primary rounded flex items-center justify-center">
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

export default Orders;