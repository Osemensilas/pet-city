import ProductCard from "../ui/ProductCard";
import { Product, products } from "@/data/Products";

type SimilarProductsProps = {
  productId: string | undefined;
};

const SimilarProducts = ({ productId }: SimilarProductsProps) => {

    const currentProduct = products.find((prod) => prod.productId === productId);

    const SimilarProducts = products.filter((prod) => prod.name === currentProduct?.name && prod.productId !== productId).slice(0, 8);

    return ( 
        <>
        <section className="h-max w-screen px-4 sm:px-10 py-10">
            <div className="h-max w-full bg-accent py-10 px-4 sm:px-10 rounded">
                <header className="w-full h-max mb-5 pb-5 border-b border-grey">
                    <h2 className="text-3xl font-bold text-header">Similar Products</h2>
                </header>
                <div className="h-max w-full flex items-center gap-5 overflow-x-scroll">
                    {
                        SimilarProducts.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))
                    }
                </div>
            </div>
        </section>
        </>
     );
}
 
export default SimilarProducts;