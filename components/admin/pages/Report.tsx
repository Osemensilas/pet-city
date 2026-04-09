'use client';

import Image from 'next/image';
import { useState } from 'react';
import LineGraph from '../components/graphs/LineGraph';
import MonthlyChart from '../components/graphs/MonthlyChart';
import ReportsPie from '../components/graphs/ReportPie';

const Reports = () => {

    const [viewMore, setViewMore] = useState(false);
    const [viewMoreText, setViewMoreText] = useState('View More');

    const viewMoreClicked = () => {
        if (viewMore){
            setViewMore(false);
            setViewMoreText("View More");
        }else{
            setViewMore(true);
            setViewMoreText("View Less");
        }
    }

    return ( 
        <>
        <div className="w-full">
            {/* Top Section */}
            <div className="flex gap-5 px-12 py-5">

                {/* Right */}
                <div className="flex-1 bg-accent px-5 py-5 rounded">
                    <header className="flex justify-between items-center mb-4">
                        <h2 className="text-[22px] font-semibold">Sales Summary</h2>
                        <div className="flex gap-3">
                            <button className="px-3 py-1 border rounded">Export</button>
                            <button className="px-3 py-1 border rounded">Refresh</button>
                        </div>
                    </header>

                    <div className="flex gap-5">

                        <div className="flex-1 p-5 rounded shadow bg-blue-100">
                            <i className="fa fa-file mb-2"></i>
                            <h2 className="text-xl font-bold">120</h2>
                            <h3>Total Revenue</h3>
                        </div>

                        <div className="flex-1 p-5 rounded shadow bg-green-100">
                            <i className="fa fa-file mb-2"></i>
                            <h2 className="text-xl font-bold">₦{Number(12046370).toLocaleString()}</h2>
                            <h3>Total Revenue</h3>
                        </div>

                        <div className="flex-1 p-5 rounded shadow bg-orange-100">
                            <i className="fa fa-file mb-2"></i>
                            <h2 className="text-lg font-bold">Best Selling Product</h2>
                            <h3>Luis Veton</h3>
                        </div>

                    </div>
                </div>

                {/* Left */}
                <div className="w-[30%] bg-accent shadow rounded p-5">
                    <h3 className="mb-4">Top Performing Categories</h3>

                    {[65,24,12].map((val, i) => (
                        <div key={i} className="mb-5">
                            <div className="flex justify-between mb-1">
                                <p>Women:</p>
                                <p>{val}%</p>
                            </div>
                            <div className="h-2 bg-grey rounded">
                                <div className="h-full bg-primary rounded" style={{width: `${val}%`}}></div>
                            </div>
                            <p className="text-sm mt-1">500 Units Sold</p>
                        </div>
                    ))}
                </div>

            </div>

            {/* Bottom Charts */}
            <div className="flex gap-5 px-12 py-5">

                <div className="flex-1 bg-accent shadow rounded p-5">
                    <header className="flex justify-between mb-3">
                        <h3 className="text-header font-semibold">Sales Summary</h3>
                        <div className="flex gap-2">
                            <button>Print</button>
                            <button>View More</button>
                        </div>
                    </header>
                    <LineGraph />
                </div>

                <div className="w-[45%] bg-accent shadow rounded p-5">
                    <h3 className="mb-3 font-semibold text-header">Major Sales by Location</h3>
                    <ReportsPie />
                </div>

            </div>

            {/* View More Section */}
            <div className={`${viewMore ? 'flex flex-col' : 'hidden'} gap-5 px-12`}>

                <div className="flex gap-5">

                    <div className="flex-1 bg-white shadow rounded p-5">
                        <h3>Sales Summary</h3>
                        <MonthlyChart />
                    </div>

                    <div className="w-[35%] bg-white shadow rounded p-5">
                        <h3>Revenue Tracking</h3>
                        <table className="w-full mt-3">
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Revenue</th>
                                    <th>%</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Shoes</td><td>₦{Number(38759).toLocaleString()}</td><td>93.6%</td></tr>
                                <tr><td>Jewry</td><td>₦{Number(35648).toLocaleString()}</td><td>74.8%</td></tr>
                                <tr><td>Clothes</td><td>₦{Number(74638).toLocaleString()}</td><td>86.8%</td></tr>
                            </tbody>
                        </table>
                    </div>

                </div>

                <div className="flex gap-5">

                    <div className="flex-1 bg-white shadow rounded p-5">
                        <h3>Financial Summaries</h3>
                        <table className="w-full mt-3">
                            <tbody>
                                <tr><td>Gross Revenue</td><td>₦{Number(38759).toLocaleString()}</td></tr>
                                <tr><td>Net Revenue</td><td>₦{Number(35648).toLocaleString()}</td></tr>
                                <tr><td>Commission</td><td>₦{Number(74638).toLocaleString()}</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="w-[35%] bg-white shadow rounded p-5">
                        <h3>Expenses</h3>
                        <table className="w-full mt-3">
                            <tbody>
                                {[1,2,3,4].map(i => (
                                    <tr key={i}>
                                        <td>Marketing</td>
                                        <td>₦{Number(38759).toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>

            {/* Button */}
            <div className="flex justify-center py-5">
                <button onClick={viewMoreClicked}
                    className="px-6 py-3 bg-[var(--primary)] text-white rounded">
                    {viewMoreText}
                </button>
            </div>

        </div>
        </>
     );
}
 
export default Reports;