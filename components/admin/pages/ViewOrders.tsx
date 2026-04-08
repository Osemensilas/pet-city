'use client';

import Image from 'next/image';
import React from 'react';

const ViewOrders = () => {
  const orderPage = () => {
    window.history.pushState({}, '', '/admin/dashboard/orders');
  };

  const shipmentClicked = () => {
    const shipmentDetails = document.querySelector('.shipmentView') as HTMLDivElement | null;
    if (shipmentDetails) {
      shipmentDetails.classList.add('flex');
      shipmentDetails.classList.remove('hidden');
    }
  };

  const goBack = () => {
    const shipmentDetails = document.querySelector('.shipmentView') as HTMLDivElement | null;
    if (shipmentDetails) {
      shipmentDetails.classList.add('hidden');
      shipmentDetails.classList.remove('flex');
    }
  };

  return (
    <>
      <div className="w-full h-max">

        {/* Main Product View */}
        <div className="flex gap-5 items-start px-10 adminViewProuct">

          {/* Left Section */}
          <div className="w-[60%] h-max adminViewProuctLeft">

            {/* Product Info */}
            <div className="shadow-[0_0_30px_rgba(0,0,0,0.1)] bg-white rounded-lg px-5 mb-5 adminViewProuctLeftTop">
              <form className="w-full adminViewProuctLeftTopForm">
                <header className="py-5 border-b border-gray-200">
                  <h2 className="text-[25px]">Product ID: #1011</h2>
                </header>
                <div className="flex items-center justify-evenly py-5 adminViewProuctLeftTopContent">
                  <h4 className="font-light text-gray-500">Apple MacBook Air</h4>
                  <h4 className="font-light text-gray-500">₦{Number(2500000).toLocaleString()} x 1</h4>
                  <h4 className="font-light text-gray-500">₦{Number(2500000).toLocaleString()}</h4>
                </div>
              </form>
            </div>

            {/* Payment Info */}
            <div className="shadow-[0_0_30px_rgba(0,0,0,0.1)] bg-white rounded-lg px-7 py-5 mb-12 adminViewProuctLeftBottom">
              <div className="w-full adminViewProuctLeftBottomTop">

                <header className="flex items-center gap-5 border-b border-gray-200 pb-5 mb-5">
                  <h2 className="text-xl">#1011</h2>
                  <p className="text-green-500 px-3 py-1 rounded-full bg-green-100 text-sm">Published - OCT 10, 2025 at 9:35AM</p>
                </header>

                {/* Payment Breakdown */}
                {[
                  ["Subtotal", "1 item", 2500000],
                  ["Discount", "No Discount", 0],
                  ["Delivery", "Rosemary Sunday", 100000],
                  ["Reference Number", "", "28364758595038470"]
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center mb-2">
                    <h4 className="text-[15px]">{item[0]}</h4>
                    <p className="text-gray-400 text-[15px]">{item[1]}</p>
                    <p className="text-[15px]">{typeof item[2] === 'number' ? `₦${Number(item[2]).toLocaleString()}` : item[2]}</p>
                  </div>
                ))}

                <div className="flex justify-between items-center border-t border-gray-200 mt-5 pt-2">
                  <h4 className="text-[15px] font-semibold">Total</h4>
                  <h4 className="text-[15px] font-semibold">₦{Number(2500000).toLocaleString()}</h4>
                </div>

              </div>
            </div>

          </div>

          {/* Right Section */}
          <div className="w-[40%] h-max flex flex-col gap-5 adminViewProuctRight">

            {/* Customer Details */}
            <div className="shadow-[0_0_30px_rgba(0,0,0,0.1)] bg-white rounded-lg px-5 py-5 adminViewProuctRightTop">
              <header className="border-b border-gray-200 pb-5 mb-3">
                <h2 className="text-xl">Customer Details</h2>
              </header>
              <div className="adminViewProuctRightTopContent pb-10">
                {[
                  ["Customer", "Boss Silas"],
                  ["Email", "mail@gmail.com"],
                  ["Phone", "08040463335"],
                  ["Order Placed", "OCT 10, 2025 at 9:35AM"],
                ].map((item, idx) => (
                  <div key={idx} className="mt-10">
                    <h4 className="text-[15px] mb-2">{item[0]}</h4>
                    <p className="text-[15px]">{item[1]}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Details */}
            <div className="shadow-[0_0_30px_rgba(0,0,0,0.1)] bg-white rounded-lg px-5 py-5 adminViewProuctRightBottom mb-12">
              <header className="border-b border-gray-200 pb-5 mb-3">
                <h2 className="text-xl">Delivery Details</h2>
              </header>
              <div className="adminViewProuctRightBottomCont">
                <div className="mb-10">
                  <h3 className="text-[15px] mb-5">Delivery Address</h3>
                  <p className="text-[15px] mt-2">No 10 Lord Shepherd Street, off Utako Abuja.</p>
                </div>
                <div className="mb-10">
                  <h3 className="text-[15px] mb-5">Delivery Agent</h3>
                  <p className="text-[15px] mt-2">FedEx</p>
                </div>
                <div className="pb-5 adminViewProuctRightBottomContShip">
                  <button onClick={shipmentClicked} className="px-5 py-2 border border-primary rounded-lg text-[16px] cursor-pointer">
                    Shipment Information
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Shipment Modal */}
        <div className="shipmentView hidden fixed inset-0 justify-center items-center bg-accent h-screen overflow-y-scroll">
          <div className="h-full w-[80%] adminShipmentViewMain p-5">
            <header className="mb-5">
              <button onClick={goBack} className="flex items-center gap-2 text-xl">
                <i className="fa fa-arrow-left"></i>
                <h3>Back to Order</h3>
              </button>
            </header>
            <div className="border border-gray-300 rounded-lg px-10 py-5 adminShipmentViewContent">
              {/* Shipment Header */}
              <div className="flex justify-between py-10 adminShipmentViewHeader">
                <div>
                  <h3 className="text-[18px] mb-2">Shipment #u4dgb778hbfh9</h3>
                  <div className="flex items-center gap-2">
                    <p className="text-[15px]">June 2nd, 2025</p>
                    <h4 className="text-[12px] font-light px-2 py-1 rounded bg-yellow-100">In transit</h4>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <button className="px-5 py-2 bg-gray-900 text-white rounded-lg text-[16px]">Track</button>
                  <button className="px-5 py-2 bg-transparent border border-primary text-primary rounded-lg text-[16px]">Contact Carrier</button>
                </div>
              </div>
              {/* Shipment Info */}
              <div className="adminShipmentViewContentB">
                <h3 className="text-[18px] mb-5">Shipment Information</h3>
                <div className="adminShipmentViewDetailContainer">
                  {[
                    ["Client Account Number:", "0294586629"],
                    ["Client Name:", "James Fortune"],
                    ["Item:", "HP Laptop"],
                    ["Tracking:", "James Fortune"],
                    ["Status:", "James Fortune"],
                    ["E.D.D:", "James Fortune"],
                    ["Delivery Address:", "James Fortune"],
                    ["Phone:", "James Fortune"]
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b border-gray-200 py-2 adminShipmentViewDetail">
                      <h5 className="text-[15px]">{item[0]}</h5>
                      <p className="text-[15px]">{item[1]}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Bottom */}
              <div className="flex justify-between items-center mt-24 pb-10 adminShipmentViewBottom">
                <div className="flex items-center gap-2 adminShipmentViewBottomLeft">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div className="flex flex-col gap-1 adminShipmentViewBottomLeftName">
                    <h3 className="text-[16px]">James Fortune</h3>
                    <p className="text-[12px] font-light px-2 py-1 rounded bg-yellow-100">Carrier</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 adminShipmentViewBottomRight">
                  <button type="button" title="button" className="text-base w-[40px] h-[40px] flex justify-center items-center rounded-full bg-primary"><i className="fa fa-message text-background"></i></button>
                  <button type="button" title="button" className="text-base w-[40px] h-[40px] flex justify-center items-center rounded-full bg-primary"><i className="fa fa-phone text-background"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewOrders;