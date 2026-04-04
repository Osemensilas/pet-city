import Image from "next/image";

const Loading = () => {
    return ( 
        <>
        <div className="relative h-10 w-10">
            <Image src="/loading.gif" fill className="object-fit" alt="loading image" />
        </div>
        </>
     );
}
 
export default Loading;