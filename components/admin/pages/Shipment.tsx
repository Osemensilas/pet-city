'use client';

import Image from 'next/image';

const Shipment = () => {

    const actionClicked = (e: any) => {
        const trackingId = e.currentTarget.parentElement.parentElement.children[2].innerText;
        console.log(trackingId);
        window.history.pushState({}, '', '/admin/track-shipment?trackingId=' + trackingId);
    }

    const shipment = () => {
        const el = document.querySelector('.addShipmentForm');
        el?.classList.remove('hidden');
        el?.classList.add('flex');
    }

    const removeShipment = () => {
        const el = document.querySelector('.addShipmentForm');
        el?.classList.add('hidden');
        el?.classList.remove('flex');
    }

    return ( 
        <>
        <div className="w-full">
            {/* HEADER */}
            <header className="flex justify-between items-center px-[80px] py-5">
                <h2 className="text-[35px] font-semibold">Shipments</h2>
                <button 
                    onClick={shipment}
                    className="bg-[var(--primary)] text-[var(--background)] px-6 py-3 rounded-lg text-[17px] flex items-center gap-2"
                >
                    <i className="fa fa-plus"></i> New Shipment
                </button>
            </header>

            {/* CONTENT */}
            <div className="px-[80px]">

                {/* TABS */}
                <div className="flex items-center gap-3 border-b border-[var(--lightGrey)] py-5">
                    <button className="text-[var(--text)] font-semibold border-b-2 border-[var(--text)] pb-1">
                        Active 10
                    </button>
                    <button className="text-[var(--lighterText)]">
                        Complete 28
                    </button>
                </div>

                {/* FILTER */}
                <form className="flex justify-between items-center py-5">
                    <div className="flex items-center gap-3">
                        <select className="border border-[var(--grey)] px-4 py-2 rounded-lg text-[15px] outline-none">
                            <option>Customer</option>
                        </select>
                        <select className="border border-[var(--grey)] px-4 py-2 rounded-lg text-[15px] outline-none">
                            <option>Status</option>
                        </select>
                        <select className="border border-[var(--grey)] px-4 py-2 rounded-lg text-[15px] outline-none">
                            <option>Today</option>
                        </select>
                        <select className="border border-[var(--grey)] px-4 py-2 rounded-lg text-[15px] outline-none">
                            <option>Modified</option>
                        </select>
                    </div>

                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="Search Orders"
                            className="h-10 w-[300px] px-[50px] border border-[var(--grey)] rounded-lg outline-none text-base"
                        />
                        <i className="fa fa-search absolute left-4 top-3 text-[var(--grey)]"></i>
                    </div>
                </form>

                {/* TABLE */}
                <table className="w-full">
                    <thead>
                        <tr className="text-left">
                            <th>No</th>
                            <th>Item</th>
                            <th>Tracking Number</th>
                            <th>Shipping Carrier</th>
                            <th>Status</th>
                            <th>E.D.D</th>
                            <th>Delivery Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {[...Array(10)].map((_, i) => (
                            <tr key={i} className="border-b border-[var(--grey)]">
                                <td className="py-5">{i + 1}</td>
                                <td>Woven Luxery</td>
                                <td>45452TEHGDB</td>
                                <td>DHL</td>
                                <td>In Transit</td>
                                <td>June 20, 2025.</td>
                                <td>No 10, Lord Shepherd Str...</td>
                                <td>
                                    <i 
                                        onClick={actionClicked}
                                        className="fa-solid fa-eye cursor-pointer"
                                    ></i>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* MODAL */}
            <div className="addShipmentForm fixed top-0 left-0 w-screen h-screen hidden justify-center items-center bg-[var(--background)]">
                <form className="w-[500px] bg-[var(--background)] shadow-lg rounded-lg p-5">

                    {/* HEADER */}
                    <header className="flex justify-between items-center border-b border-[var(--lightGrey)] pb-3 mb-4">
                        <h2 className="text-xl font-semibold">Create Shipment</h2>
                        <i onClick={removeShipment} className="fa fa-times cursor-pointer"></i>
                    </header>

                    {/* FORM */}
                    <div className="flex flex-col gap-4">
                        {[
                            "Customer Name",
                            "Phone",
                            "Address",
                            "Product",
                            "Shipping Carrier",
                            "Tracking Number",
                            "E.D.D"
                        ].map((label, i) => (
                            <div key={i} className="flex flex-col gap-1">
                                <label className="text-sm">{label}:</label>
                                <input className="border border-[var(--grey)] rounded px-3 py-2 outline-none" />
                            </div>
                        ))}

                        <div className="flex flex-col gap-1">
                            <label className="text-sm">Product Description:</label>
                            <textarea className="border border-[var(--grey)] rounded px-3 py-2 outline-none"></textarea>
                        </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="flex justify-end gap-3 mt-5">
                        <button 
                            type="button" 
                            onClick={removeShipment}
                            className="px-5 py-2 rounded border border-[var(--grey)]"
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit"
                            className="px-5 py-2 rounded bg-[var(--primary)] text-[var(--background)]"
                        >
                            Create
                        </button>
                    </div>

                </form>
            </div>

        </div>
        </>
     );
}
 
export default Shipment;