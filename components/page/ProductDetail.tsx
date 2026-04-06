'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import { Product, products } from "@/data/Products";
import SimilarProducts from "@/components/general/SimilarProducts";

const ProductDetail = () => {
  
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  
  const [activeImage, setActiveImage] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [product, setProduct] = useState < Product | null > (null);
  
  useEffect(() => {
    
    if (!products || products.length === 0) return;
    
    const product = products.find((prod) => prod.productId === id);
    
    if (product) {
      setActiveImage(product.image);
      setImage1(product.image || "/uploads/dog51.jpg");
      setImage2(product.image2 || "/uploads/cat19.jpg");
      setProduct(product);
    }
  }, []);
  
  const imageClicked = (imageNo: number) => {
    if (imageNo === 1) {
      setActiveImage(image1);
    } else {
      setActiveImage(image2);
    }
  };
  
  const increaseQty = (e: React.MouseEvent < HTMLButtonElement > ) => {
    
    const totalStock = product?.stock || 0;
    
    let qtyInput = e.currentTarget.parentElement?.querySelector("input") as HTMLInputElement;
    
    if (qtyInput) {
      let currentQty = parseInt(qtyInput.value);
      
      if (product && currentQty < totalStock) {
        qtyInput.value = (currentQty + 1).toString();
      }
      
      if (product && currentQty < product.stock) {
        qtyInput.value = (currentQty + 1).toString();
      }
    }
  }
  
  const reduceQty = (e: React.MouseEvent < HTMLButtonElement > ) => {
    let qtyInput = e.currentTarget.parentElement?.querySelector("input") as HTMLInputElement;
    
    if (qtyInput) {
      let currentQty = parseInt(qtyInput.value);
      
      if (product && currentQty > 1) {
        qtyInput.value = (currentQty - 1).toString();
      }
    }
  }
  
  const addToCart = () => {
    alert("Added to cart!");
  }
  
  return (
    <>
        <section className="h-max w-screen px-4 sm:px-10 sm:py-10 py-0">
          <form onSubmit={(e) => e.preventDefault()} className="h-max w-full flex flex-col sm:flex-row items-start gap-3">
            <div className="h-max sm:w-[65%] w-full bg-accent rounded p-4 sm:p-10">
              <div className="h-max w-full flex justify-center items-center">
                <div className="relative h-[250px] sm:h-[350px] w-full sm:w-[450px]">
                  <Image src={activeImage} fill className="object-fit" alt="products image" />
                </div>
              </div>
              <div className="h-max w-full flex justify-center items-center gap-4 mt-10">
                <div onClick={() => imageClicked(1)} className={`h-[80px] w-[80px] border-2 rounded relative
                  ${activeImage === image1 ? "border-primary" : "border-grey cursor-pointer"}
                  `}>
                  <Image src={image1} fill className="object-fit" alt="product image" />
                </div>
                <div onClick={() => imageClicked(2)} className={`h-[80px] w-[80px] border-2 rounded relative
                  ${activeImage === image2 ? "border-primary" : "border-grey cursor-pointer"}
                  `}>
                  <Image src={image2} fill className="object-fit" alt="product image" />
                </div>
              </div>
            </div>
            <div className="h-max sm:w-[35%] w-full bg-accent rounded p-4 sm:p-10">
              <p className={`px-4 py-1 text-sm text-background rounded w-max
                ${product?.stock && product.stock > 0 ? "bg-green-500" : "bg-danger"}
                `}>{product?.stock && product.stock > 0 ? "In Stock" : "Out of Stock"}</p>
              <h1 className="text-3xl text-header mt-4 font-bold">{product?.name}</h1>
              <p className="text-text text-base mt-4">{product?.component || "Component not available"}</p>
              <p className="text-text text-base mt-4">Items Left: {product?.stock || 0}</p>
              <h2 className="text-2xl font-semibold text-text">₦{(product?.price || 0).toLocaleString()}</h2>
              <div className="h-max w-full flex items-center gap-3 mt-4">
                <button type="button" onClick={reduceQty} className="h-10 w-10 rounded bg-primary flex items-center justify-center text-background text-base">
                  <p>-</p>
                </button>
                <input className="h-10 w-20 border grey rounded px-5" value="1" title="product quantity" />
                <button type="button" onClick={increaseQty} className="h-10 w-10 rounded bg-primary flex items-center justify-center text-background text-base">
                  <p>+</p>
                </button>
              </div>
              <div className="h-max w-full mt-4">
                <button type="button" onClick={addToCart} className="h-max w-full py-2 text-center bg-primary text-background text-base rounded">Add to Cart</button>
              </div>
            </div>
          </form>
          <div className="h-max w-full mt-10">
            <div className="bg-accent rounded h-max w-full p-4 sm:p-10">
              <div className="h-max w-full mb-4 sm:mb-10">
                <h3 className="text-2xl font-semibold">Description:</h3>
              </div>
              <div className="h-max w-full">
                <p className="text-base text-text">{product?.description || "Description not available"}</p>
              </div>
            </div>
          </div>
        </section>
        <SimilarProducts productId={product?.productId} />
    </>
  );
}

export default ProductDetail;