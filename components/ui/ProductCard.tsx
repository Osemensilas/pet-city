'use client';

import { useRouter } from "next/navigation";
import { Product } from "@/data/Products";
import Image from "next/image";

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ( {product} ) => {
  
  const router = useRouter();
    
  const viewProduct = (x: string) => {
        router.push(`/product?id=${x}`);
  }
    
  return (
    <>
      <div className="h-max w-max bg-accent rounded p-1 sm:p-3">
        <div className="relative sm:h-[150px] sm:w-[180px] h-[150px] w-[125px]">
          <Image src={product.image} alt={product.name} className="object-fit" fill />
        </div>
        <div className="sm:w-[180px] sm:h-[100px] w-[125px] h-[150px] mt-2 pb-2">
          <div className="h-max w-full flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold">{product.name}</h3>
            <p className={`text-sm text-text
              ${product.stock > 0 ? "text-green-500" : "text-red-500"}
              `}>{product.stock > 0 ? "In Stock" : "Not available"}</p>
          </div>
          <h3 className="text-xs text-text">{product.component}</h3>
          <div className="w-full h-max pt-2 flex items-center justify-between">
            <span className="text-text text-sm sm:text-base font-bold">₦{(product.price).toLocaleString()}</span>
              <button onClick={() => viewProduct(product.productId)} type="button" className="border-primary border text-primary px-1 sm:px-3 py-1 rounded hover:bg-primary hover:text-background transition-colors duration-300 ml-5 text-sm"><i className="fa fa-arrow-right"></i> <span> Add</span></button>
            </div>
          </div>
        </div> 
    </>
  );
}

export default ProductCard;