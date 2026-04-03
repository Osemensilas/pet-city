import Link from "next/link";

const Page = () => {
    return ( 
        <>
        <section className="h-screen w-screen px-4 sm:px-10 py-10">
            <div className="h-full w-full flex justify-around items-center">
                          <Link href="/store?pet=dogs" className="h-max w-max flex">
            <div className="relative h-[200px] w-[300px] rounded">
              <Image src="/backdog.jpg" alt="shop by dog" className="rounded" fill />
            </div>
          </Link>
          <Link href="/store?pet=cats" className="h-max w-max flex">
            <div className="relative h-[200px] w-[300px] rounded">
              <Image src="/backcat.jpg" alt="shop by cat" className="rounded" fill />
            </div>
          </Link>
            </div>
        </section>
        </>
     );
}
 
export default Page;