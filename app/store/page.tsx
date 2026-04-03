'use client';

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

const Page = () => {

  type Product = {
    id: number;
    productId: string;
    name: string;
    price: number;
    stock: string;
    image: string;
  };
  
  const router = useRouter();

  const [products, setProducts] = useState<Product[]>([]);
  const [showFilter, setShowFilter] = useState(false);

  const ourProducts = [
      {
          id: 1,
          productId: "prodb73738",
          name: "Nulo",
          price: 5000,
          stock: "In stock",
          image: "/nulo_cat_feed1.png"
      },
      {
          id: 2,
          productId: "prodb7m738",
          name: "Nulo",
          price: 7500,
          stock: "In stock",
          image: "/nulo_cat_feed2.png"
      },
      {
          id: 3,
          productId: "prodb73v38",
          name: "Nulo",
          price: 5000,
          stock: "In stock",
          image: "/nulo_cat_feed3.png"
      },
      {
          id: 4,
          productId: "prodb73732",
          name: "Nulo",
          price: 7500,
          stock: "In stock",
          image: "/nulo_cat_feed4.png"
      },
      {
          id: 5,
          productId: "prodbi3738",
          name: "Royal Canis",
          price: 5000,
          stock: "In stock",
          image: "/royal_canis_dog1.png"
      },
      {
          id: 6,
          productId: "prodb73708",
          name: "Royal Canis",
          price: 7500,
          stock: "In stock",
          image: "/royal_canis_dog2.png"
      },
      {
          id: 7,
          productId: "prodb73g38",
          name: "Royal Canis",
          price: 5000,
          stock: "In stock",
          image: "/royal_canis_dog3.png"
      },
      {
          id: 8,
          productId: "prodb7373u",
          name: "Royal Canis",
          price: 7500,
          stock: "In stock",
          image: "/royal_canis_dog4.png"
      }
  ];
  
  const filterClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!showFilter){
      setShowFilter(true);
    }
  }
  
  const cancelFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (showFilter){
      setShowFilter(false);
    }
  }
  
  const viewProduct = (x: string) => {
    router.push(`/product?id=${x}`);
  }

  return (
    <>
      <section className="min-h-screen h-max w-screen flex gap-3 px-4 sm:px-10 sm:py-10 py-0">
        <div className={`h-max w-full sm:w-[20%] bg-accent rounded p-3 sm:block
        ${showFilter ? "fixed z-10" : "hidden"}
        `}>
          <div className={`${showFilter ? "h-max w-full items-start flex flex-wrap gap-3" : ""}`}>
          <div className="h-max w-max sm:w-full mb-5">
            <h2 className="text-xl font-bold mb-2">Pet</h2>
            <div className="h-max w-full border-t-none sm:border-t border-b-none sm:border-b border-grey py-3 mt-5">
              <div className="h-max w-full flex items-center gap-1 mb-2">
                <input type="checkbox" className="cursor-pointer" name="cat" id="cat" />
                <label htmlFor="cat" className="cursor-pointer">Cat</label>
              </div>
              <div className="h-max w-full flex items-center gap-1">
                <input type="checkbox" className="cursor-pointer" name="dog" id="dog" />
                <label htmlFor="dog" className="cursor-pointer">Dog</label>
              </div>
            </div>
          </div>
          <div className="h-max w-max sm:w-full mb-5">
            <h2 className="text-xl font-bold mb-2">Category</h2>
            <div className="h-max w-full border-t border-b border-transparent sm:border-grey py-3 mt-5">
              <div className="h-max w-full flex items-center gap-1 mb-2">
                <input type="checkbox" className="cursor-pointer" name="food" id="food" />
                <label htmlFor="food" className="cursor-pointer">Food</label>
              </div>
              <div className="h-max w-full flex items-center gap-1 mb-2">
                <input type="checkbox" className="cursor-pointer" name="treat" id="treat" />
                <label htmlFor="treat" className="cursor-pointer">Treat & Chows</label>
              </div>
              <div className="h-max w-full flex items-center gap-1 mb-2">
                <input type="checkbox" className="cursor-pointer" name="healthcare" id="healthcare" />
                <label htmlFor="healthcare" className="cursor-pointer">Health Care</label>
              </div>
              <div className="h-max w-full flex items-center gap-1">
                <input type="checkbox" className="cursor-pointer" name="supplies" id="supplies" />
                <label htmlFor="supplies" className="cursor-pointer">Supplies</label>
              </div>
            </div>
          </div>
          <div className="h-max w-max sm:w-full mb-5">
            <h2 className="text-xl font-bold mb-2">Food Form</h2>
            <div className="h-max w-full border-t-none sm:border-t border-b-none sm:border-b border-grey py-3 mt-5">
              <div className="h-max w-full flex items-center gap-1 mb-2">
                <input type="checkbox" className="cursor-pointer" name="dry" id="dry" />
                <label htmlFor="dry" className="cursor-pointer">Dry</label>
              </div>
              <div className="h-max w-full flex items-center gap-1 mb-2">
                <input type="checkbox" className="cursor-pointer" name="wet" id="wet" />
                <label htmlFor="wet" className="cursor-pointer">Wet</label>
              </div>
              <div className="h-max w-full flex items-center gap-1 mb-2">
                <input type="checkbox" className="cursor-pointer" name="freeze" id="freeze" />
                <label htmlFor="freeze" className="cursor-pointer">Freeze Dried</label>
              </div>
              <div className="h-max w-full flex items-center gap-1 mb-2">
                <input type="checkbox" className="cursor-pointer" name="dehydrated" id="dehydrated" />
                <label htmlFor="dehydrated" className="cursor-pointer">Dehydrated</label>
              </div>
              <div className="h-max w-full flex items-center gap-1">
                <input type="checkbox" className="cursor-pointer" name="powder" id="powder" />
                <label htmlFor="powder" className="cursor-pointer">Powder</label>
              </div>
            </div>
          </div>
          <div className="h-max w-max sm:w-full mb-5">
            <h2 className="text-xl font-bold mb-2">Brand</h2>
            <div className="h-max w-full border-t border-b border-transparent sm:border-grey py-3 mt-5">
              <div className="h-max w-full flex items-center gap-1 mb-2">
                <input type="checkbox" className="cursor-pointer" name="purina" id="purina" />
                <label htmlFor="purina" className="cursor-pointer">Purina</label>
              </div>
              <div className="h-max w-full flex items-center gap-1 mb-2">
                <input type="checkbox" className="cursor-pointer" name="hills" id="hills" />
                <label htmlFor="hills" className="cursor-pointer">Hills</label>
              </div>
              <div className="h-max w-full flex items-center gap-1 mb-2">
                <input type="checkbox" className="cursor-pointer" name="pedigree" id="pedigree" />
                <label htmlFor="pedigree" className="cursor-pointer">Pedigree</label>
              </div>
              <div className="h-max w-full flex items-center gap-1 mb-2">
                <input type="checkbox" className="cursor-pointer" name="royal" id="royal" />
                <label htmlFor="royal" className="cursor-pointer">Royal Canin</label>
              </div>
              <div className="h-max w-full flex items-center gap-1">
                <input type="checkbox" className="cursor-pointer" name="nulo" id="nulo" />
                <label htmlFor="nulo" className="cursor-pointer">Nulo</label>
              </div>
            </div>
          </div>
            <div className="h-max w-full flex items-start gap-3 mt-5">
              <button className="bg-primary text-background px-4 py-2 rounded" type="button">Apply</button>
              <button onClick={cancelFilter} type="button" className="bg-transparent text-primary border border-primary rounded px-4 py-2" >Cancel</button>
            </div>
          </div>
        </div>
        <div className="h-max w-fill sm:w-[80%] flex flex-col gap-3">
          <div className="h-max w-full bg-accent rounded p-3 flex justify-between sm:justify-center items-center">
            <h2 className="text-center text-3xl font-bold">Products for Cats</h2>
            <button onClick={filterClicked} className="h-max w-max block sm:hidden">
              <i className="fa-solid fa-filter"></i>
            </button>
          </div>
          <div className="h-max w-full bg-accent rounded p-3">
            <div className="h-max w-full flex items-center flex-wrap gap-3 mb-5">
              {
                ourProducts.length < 1 ? (
                  <div className="h-screen w-full flex items-center justify-center">
                    <p>No products available</p>
                  </div>
                ) : (
                  ourProducts.map((product, index) => (
                    <div key={index} className="h-max w-max bg-accent rounded p-3">
                      <div className="relative h-[100px] sm:h-[150px] w-[120px] sm:w-[180px]">
                          <Image src={`${product.image}`} alt="best seller 1" fill />
                      </div>
                      <div className="w-[120px] sm:w-[180px] h-[100px] mt-2 pb-2">
                          <div className="h-max w-full flex items-center justify-between">
                              <h3 className="text-base font-semibold">{product.name}</h3>
                              <p>{product.stock}</p>
                          </div>
                          <h3 className="text-base font-semibold">Science Diet</h3>
                          <div className="w-full h-max pt-2 flex items-center justify-between">
                              <span className="text-text text-base font-bold">₦{(product.price).toLocaleString()}</span>
                              <button onClick={() => viewProduct(product.productId)} type="button" className="border-primary border text-primary px-3 py-1 rounded hover:bg-primary hover:text-background transition-colors duration-300 ml-5 text-sm"><i className="fa fa-arrow-right"></i> <span> Add</span></button>
                          </div>
                      </div>
                    </div>
                  ))
                )
              }
            </div>
            <div className="h-max w-full mt-10">
              <div className="h-max w-full flex gap-3 items-center justify-center">
                <button type="button" className="p-2 bg-primary text-background rounded">
                  <i className="fa-solid fa-chevron-left text-primary text-2xl"></i>

                </button>
                <ul className="h-max w-max flex items-center gap-2">
                  <li className="border h-10 w-10 flex items-center justify-center border-primary text-primary rounded-full">1</li>
                  <li className="border h-10 w-10 flex items-center justify-center border-primary text-primary rounded-full hidden sm:block">2</li>
                  <li className="text-primary">...</li>
                <li className="border h-10 w-10 flex items-center justify-center border-primary text-background rounded-full bg-primary">5</li>
                  <li className="text-primary">...</li>
                  <li className="border h-10 w-10 flex items-center justify-center border-primary text-primary rounded-full hidden sm:block">9</li>
                  <li className="border h-10 w-10 flex items-center justify-center border-primary text-primary rounded-full">10</li>
                </ul>
                <button type="button" className="p-2 bg-primary text-background rounded">
                  <i className="fa-solid fa-chevron-right text-primary text-2xl"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;