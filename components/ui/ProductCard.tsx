type Product = {
    id: number;
    productId: string;
    name: string;
    price: number;
    stock: number;
    image: string;
    age: string;
    sold: number;
};

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ( {product} ) => {
    
    const viewProduct = (x: string) => {
        router.push(`/product?id=${x}`);
    }
    
  return (
    <>
      <div className="h-max w-max bg-accent rounded p-3">
        <div className="relative h-[150px] w-[180px]">
          <Image src={product.image} alt="best seller 1" fill />
        </div>
      <div className="w-[180px] h-[100px] mt-2 pb-2">
         <div className="h-max w-full flex items-center justify-between">
            <h3 className="text-base font-semibold">{product.name}</h3>
            <p>{product.stock > 0 ? "In Stock" : "Not available"}</p>
          </div>
          <h3 className="text-base font-semibold">Science Diet</h3>
          <div className="w-full h-max pt-2 flex items-center justify-between">
            <span className="text-text text-base font-bold">₦{(product.price).toLocaleString()}</span>
              <button onClick={() => viewProduct(product.productId)} type="button" className="border-primary border text-primary px-3 py-1 rounded hover:bg-primary hover:text-background transition-colors duration-300 ml-5 text-sm"><i className="fa fa-arrow-right"></i> <span> Add</span></button>
            </div>
          </div>
        </div> 
    </>
  );
}

export default ProductCard;