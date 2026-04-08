'use client';

import { Product, products } from "@/data/Products";

const Products = () => {

    const allProducts: Product[] = [... products];

    const viewProduct = (e: any) => {
        const itemId = e.currentTarget.value;
        let url = '/admin/dashboard/products/view-product?id=' + itemId;
        window.history.pushState({}, '', url);
    }

    return (
        <>
        <div className="h-max w-full flex flex-col gap-6 px-12 pb-10">
            {/* HEADER */}
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-semibold">Products</h2>

                <button type="button" className="bg-primary text-background px-4 py-2 rounded text-base">
                    <i className="fa-solid fa-arrows-rotate"></i> Add New Product
                </button>
            </div>

            {/* CONTENT */}
            <div className="w-full py-[20px]">
                {/* FILTER FORM */}
                <form className="flex justify-between items-center py-5">

                    <div className="flex items-center gap-3">
                        <select title="category" className="border border-grey px-4 py-2 rounded-lg text-sm">
                            <option>Category</option>
                        </select>

                        <select title="date" className="border border-grey px-4 py-2 rounded-lg text-sm">
                            <option>Date</option>
                        </select>

                        <select title="name" className="border border-grey px-4 py-2 rounded-lg text-sm">
                            <option>Sort by Name</option>
                        </select>
                    </div>

                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            className="h-10 w-[300px] pl-12 pr-4 border border-grey rounded-lg text-sm outline-none"
                        />
                        <i className="fa fa-search absolute top-2.5 left-4 text-grey"></i>
                    </div>

                </form>
                {/* TABLE */}
                <div>
                    <table className="w-full border-collapse text-center">
                        <thead className="bg-accent border-t border-grey">
                            <tr>
                                <th><input type="checkbox" title="checkbox" /></th>
                                <th>Product</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allProducts.map((product, i) => (
                                <tr key={i} className="border-b border-grey text-start">
                                    <td><input type="checkbox" title="checkbox" /></td>
                                    <td className="flex items-center justify-start gap-3 py-5">
                                        <img src={product.image} className="h-[40px] w-[60px]" alt="snickers" />
                                        <p className="text-sm">{product.name}</p>
                                    </td>
                                    <td>{product.component}</td>
                                    <td>{product.price}</td>
                                    <td>{product.stock}</td>
                                    <td className="space-x-2">
                                        <button type="button" value={"123"} onClick={viewProduct}>
                                            View
                                        </button>
                                        <button type="button" className="text-red-600">Delete</button>
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
                                <button type="button" title="button" className="w-5 h-5 border border-gray-400 rounded flex items-center justify-center text-gray-400">
                                    <i className="fa fa-angle-left"></i>
                                </button>
                            </li>

                            <li>
                                <button className="w-5 h-5 bg-red-600 text-white rounded-full flex items-center justify-center">
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
                                <button type="button" title="button" className="w-5 h-5 border border-red-600 text-black rounded flex items-center justify-center">
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

export default Products;