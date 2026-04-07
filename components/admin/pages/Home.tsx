'use client';

import Image from 'next/image';
import Header from '../components/Header';
import DashboardLineGraph from '../components/graphs/DashboardLineGraph';
import DashboardLocationPie from '../components/graphs/DashboardLocationPie';

const Home = () => {
  return (
    <>
    <section className="flex w-full h-screen">
      <div className="w-full h-screen overflow-y-auto">
        <Header />
        <div className="flex flex-col gap-6 px-12 pb-10">
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
            <div className="flex gap-5">
                {/* LEFT */}
                <div className="w-[65%] border border-gray-300 rounded-xl">
                <div className="bg-gray-100 px-5 h-12 flex items-center rounded-t-xl">
                    <h3 className="text-lg">Sales Overview</h3>
                </div>

                <div className="grid grid-cols-4 h-[170px]">
                    {["Orders", "Revenue", "Customers", "Returns"].map((item, i) => (
                    <div
                        key={i}
                        className={`flex flex-col justify-center items-center gap-2 ${
                        i !== 3 ? "border-r border-gray-300" : ""
                        }`}
                    >
                        <h3 className="text-sm font-semibold text-gray-500">
                        {item}
                        </h3>
                        <p className="text-sm text-gray-400">+20%</p>
                    </div>
                    ))}
                </div>
                </div>
                {/* RIGHT */}
                <div className="w-[35%] border border-gray-300 rounded-xl">
                <div className="bg-gray-100 px-5 h-12 flex items-center rounded-t-xl">
                    <h3 className="text-lg">Quick Stats</h3>
                </div>
                <div className="flex flex-col gap-3 px-5 py-4">
                    {["Total Orders", "Inventory"].map((item, i) => (
                    <div
                        key={i}
                        className="flex justify-between items-center border-b border-gray-300 pb-2"
                    >
                        <h3 className="text-sm text-gray-500">{item}</h3>
                        <span className="font-semibold">950k</span>
                    </div>
                    ))}
                </div>
                </div>
            </div>
            {/*Line Graphs*/}
            <div className={`h-max w-full flex flex-col gap-10 pr-20`}>
                <div className="h-max w-full">
                    <DashboardLineGraph />
                </div>
            </div>
            {/* PRODUCTS */}
            <div className="flex gap-5">

            {/* LEFT */}
            <div className="w-[60%] border border-gray-300 rounded-xl">
                <div className="bg-gray-100 px-5 h-12 flex items-center rounded-t-xl">
                <h3 className="text-lg">Top Products</h3>
                </div>

                <div className="flex h-[170px]">

                <div className="w-[65%] flex flex-col gap-4 p-5 border-r border-gray-300">
                    {["Sofa", "HP 15", "Perfume"].map((item, i) => (
                    <div key={i} className="flex justify-between">
                        <h2 className="text-sm">{item}</h2>
                        <h3 className="font-semibold">{i + 1}st</h3>
                    </div>
                    ))}
                </div>

                <div className="w-[35%] flex items-center justify-center">
                    <div className="relative w-[100px] h-[100px]">
                    <Image src="/blender.png" alt="product" fill className="object-contain" />
                    </div>
                </div>

                </div>
            </div>

            {/* RIGHT */}
            <div className="w-[40%] border border-gray-300 rounded-xl">
                <div className="bg-gray-100 px-5 h-12 flex items-center rounded-t-xl">
                <h3 className="text-lg">Inventory</h3>
                </div>

                <div className="flex h-[170px]">
                <div className="w-1/2 flex flex-col justify-center items-center border-r border-gray-300">
                    <h3 className="text-gray-500">Products</h3>
                    <h2 className="font-semibold">5095k</h2>
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center">
                    <h3 className="text-gray-500">Orders</h3>
                    <h2 className="font-semibold">950k</h2>
                </div>
                </div>
            </div>

            </div>
            {/*Table and Location*/}
            <div className="h-max w-full flex box-shadow rounded px-5">
                <div className="w-[55%] h-max">
                    <div className="border border-gray-300 rounded-xl p-5">
                    <h3 className="mb-4 text-lg">Sales Orders</h3>

                    <table className="w-full text-center border-collapse">
                        <thead className="bg-gray-100 border-t border-gray-300">
                        <tr>
                            <th className="py-2">Type</th>
                            <th>Confirmed</th>
                            <th>Packed</th>
                            <th>Shipped</th>
                            <th>Invoiced</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="text-gray-500">
                            <td className="py-2">Direct Sale</td>
                            <td>1500</td>
                            <td>1450</td>
                            <td>1450</td>
                            <td>387</td>
                        </tr>
                        <tr className="text-gray-500">
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
                <div className="w-[45%] h-max box-shadow rounded px-5">
                    <header className="h-[50px] w-full flex items-center justify-center">
                        <h3 className='text-base font-bold'>Major Sales by Location</h3>
                    </header>
                    <div className="h-[300px] w-full">
                        <DashboardLocationPie />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Home;