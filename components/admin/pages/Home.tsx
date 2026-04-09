'use client';

import Image from 'next/image';
import Header from '../components/Header';
import DashboardLineGraph from '../components/graphs/DashboardLineGraph';
import DashboardLocationPie from '../components/graphs/DashboardLocationPie';

const Home = () => {
  return (
    <>
    <div className="px-4 sm:px-12 pb-10">
          <h2 className="text-3xl font-semibold">Dashboard</h2>
    </div>
    <div className="flex flex-col gap-6 px-4 sm:px-12 pb-10">
        {/* SUMMARY CARDS */}
        <div className="bg-accent rounded flex items-center px-3 h-max py-5">
            <div className="flex w-full">
            {[
                { title: "Total Transactions", value: "₦200M", icon: "fa fa-right-left" },
                { title: "Total Sales", value: "₦850k", icon: "fa fa-dollar-sign" },
                { title: "Total Users", value: "537k", icon: "fa fa-users" },
            ].map((item, i) => (
                <div
                key={i}
                className={`px-10 ${i !== 2 ? "border-r" : ""}`}
                >
                <div className="h-max w-full flex items-center gap-5">
                    <div className="h-[30px] w-[30px] text-orange rounded-full bg-grey flex items-center justify-center">
                        <i className={item.icon}></i>
                    </div>
                    <p className="text-header mb-2 font-bold">{item.title}</p>
                </div>
                <div className="h-max w-full pt-5">
                    <p className="text-sm text-text">Last 30 day</p>
                    <h3 className="text-lg font-semibold">{item.value}</h3>
                </div>
                </div>
            ))}
            </div>
        </div>
        {/* SALES + PRODUCTS */}
        <div className="flex sm:flex-row flex-col gap-5">
            {/* LEFT */}
            <div className="w-full sm:w-[65%] bg-accent rounded">
                <div className="bg-grey px-5 h-12 flex items-center justify-between rounded">
                    <h3 className="text-lg">Sales Overview</h3>
                    <p>+50.53%</p>
                </div>

                <div className="grid grid-cols-4 h-[170px]">
                    {[{name: "Purina Pro",
                        sold: 35
                    }, 
                    {name: "Purina Pro",
                        sold: 35
                    },
                    {name: "Purina Pro",
                        sold: 35
                    },
                    {name: "Purina Pro",
                        sold: 35
                    },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className={`flex flex-col justify-center items-center gap-2 ${
                            i !== 3 ? "border-r" : ""
                            }`}
                        >
                            <h3 className="text-sm font-semibold text-header">
                            {item.name}
                            </h3>
                            <p className="text-sm text-text">Sold: {item.sold}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* RIGHT */}
            <div className="w-full sm:w-[35%] bg-accent rounded">
            <div className="bg-grey px-5 h-12 flex items-center rounded">
                <h3 className="text-lg">Quick Stats</h3>
            </div>
            <div className="flex flex-col gap-3 px-5 py-4">
                {["Total Orders", "Inventory"].map((item, i) => (
                <div
                    key={i}
                    className="flex justify-between items-center border-b border-grey pb-2"
                >
                    <h3 className="text-sm text-header">{item}</h3>
                    <span className="font-semibold text-text">950k</span>
                </div>
                ))}
            </div>
            </div>
        </div>
        {/* PRODUCTS */}
        <div className="flex sm:flex-row flex-col gap-5">
            {/* LEFT */}
            <div className="w-full sm:w-[60%] bg-accent rounded">
                <div className="bg-grey px-5 h-12 flex items-center rounded">
                    <h3 className="text-lg">Top Products</h3>
                </div>
                <div className="flex h-[170px]">
                    <div className="w-full flex flex-col gap-4 p-5 border-r border-gray-300">
                        {["Sofa", "HP 15", "Perfume"].map((item, i) => (
                        <div key={i} className="flex justify-between">
                            <h2 className="text-sm">{item}</h2>
                            <h3 className="font-semibold">{i + 1}st</h3>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* RIGHT */}
            <div className="w-full sm:w-[40%] bg-accent rounded">
                <div className="bg-grey px-5 h-12 flex items-center rounded">
                    <h3 className="text-lg">Inventory</h3>
                </div>
                <div className="flex h-[170px]">
                    <div className="w-1/2 flex flex-col justify-center items-center border-r border-grey">
                        <h3 className="text-header">Products</h3>
                        <h2 className="font-semibold">5095k</h2>
                    </div>
                    <div className="w-1/2 flex flex-col justify-center items-center">
                        <h3 className="text-header">Orders</h3>
                        <h2 className="font-semibold">950k</h2>
                    </div>
                </div>
            </div>
        </div>
        {/*Table and Location*/}
        <div className="h-max w-full flex sm:flex-row flex-col gap-3 box-shadow rounded">
            <div className="w-full sm:w-[55%] h-max">
                <div className="bg-accent rounded py-5">
                    <h3 className="mb-4 text-lg ml-5 font-bold">Sales Orders</h3>
                    <table className="w-full text-center border-collapse">
                        <thead className="bg-grey border-t border-grey">
                        <tr>
                            <th className="py-2">Type</th>
                            <th>Confirmed</th>
                            <th>Packed</th>
                            <th>Shipped</th>
                            <th>Invoiced</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="text-text">
                            <td className="py-2">Direct Sale</td>
                            <td>1500</td>
                            <td>1450</td>
                            <td>1450</td>
                            <td>387</td>
                        </tr>
                        <tr className="text-text">
                            <td className="py-2">Promotion</td>
                            <td>1500</td>
                            <td>1450</td>
                            <td>1450</td>
                            <td>387</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="w-full sm:w-[45%] h-max box-shadow bg-accent rounded rounded-t">
                <header className="h-[50px] w-full rounded-t flex items-center justify-center bg-grey">
                    <h3 className='text-base font-bold'>Major Sales by Location</h3>
                </header>
                <div className="h-[300px] w-full">
                    <DashboardLocationPie />
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Home;