import Image from "next/image";

const Header = () => {
    return ( 
        <>
        <header className="h-max w-full">
            <div className="flex justify-between items-center px-4 sm:px-12 py-10 border-b border-gray-200 mb-5">
          
                {/* SEARCH */}
                <form className="flex items-center gap-3 relative">
                    <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                    <input
                    type="text"
                    placeholder="Property type, location, price range"
                    className="h-10 w-[400px] border border-grey rounded px-10 text-sm outline-none"
                    />
                    <button className="h-10 px-5 bg-primary text-accent rounded text-sm">
                    Search
                    </button>
                </form>

                {/* USER */}
                <div className="flex items-center gap-4">
                    <button type="button" title="bell" className="text-xl">
                    <i className="fa fa-bell"></i>
                    </button>
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image src="/hair5.png" alt="user" fill className="object-cover" />
                    </div>
                </div>
            </div>
        </header>
        </>
     );
}
 
export default Header;