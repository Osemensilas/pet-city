import { Suspense } from "react";
import ProductDetail from "@/components/page/ProductDetail";

const Page = () => {
  return (
    <>
    <Suspense fallback={<p>Loading...</p>}>
    <ProductDetail />
    </Suspense>
    </>
  );
}

export default Page;