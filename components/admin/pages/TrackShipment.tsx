'use client';

import Image from 'next/image';

const TrackShipment = () => {

    const goBack = () => {
        window.history.pushState({}, '', '/admin/dashboard/shipments');
    }

    return ( 
        <>
        <div className="w-full">
            <div className="py-5 px-20">
                <button onClick={goBack} className="flex items-center gap-2 text-[16px]">
                    <i className="fa fa-arrow-left"></i> Back to Shipment
                </button>
            </div>

            <div className="w-full h-max px-20 py-10">
                <div className="w-[65%] border border-grey rounded-[10px] p-5">

                    {/* Header */}
                    <header className="flex justify-between items-center">
                        <div>
                            <h2 className="text-[20px] mb-1">Shipment</h2>
                            <div>
                                <p className="text-[15px] mb-1">June 2, 2025</p>
                                <h4 className="text-[14px] font-normal">In transit</h4>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <button className="px-6 py-2 text-[15px] rounded-[10px] bg-[var(--primary)] text-[var(--background)] border-none">
                                Track
                            </button>
                            <button className="px-6 py-2 text-[15px] rounded-[10px] border border-[var(--primary)] text-[var(--primary)] bg-transparent">
                                Contact Courier
                            </button>
                        </div>
                    </header>

                    {/* Content */}
                    <div className="pt-5">
                        <h3 className="mb-4 text-[16px]">Shipment Information</h3>

                        {[
                            ['Client Account Number:', '1274860433'],
                            ['Customer Name:', 'Andrew Emmanuel'],
                            ['Item:', 'Wooven Luxery'],
                            ['Tracking Number:', '394hbf7tg4yh'],
                            ['Shipping Courier:', 'FedEx'],
                            ['Status:', 'In Transit'],
                            ['E.D.D:', 'June 20, 2025'],
                            ['Delivery Address:', 'FCT, Abuja'],
                            ['Phone:', '+234915 3929 336'],
                        ].map((item, index) => (
                            <div key={index} className="flex items-center border-b border-gray-400 py-2">
                                <div className="w-1/2">
                                    <h4 className="text-[15px] text-gray-500 font-normal">{item[0]}</h4>
                                </div>
                                <div className="w-1/2">
                                    <h4 className="text-[15px] text-gray-500 font-normal">{item[1]}</h4>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
        </>
     );
}
 
export default TrackShipment;