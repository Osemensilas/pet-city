import Image from "next/image";

const Team = () => {
    return ( 
        <>
        <section className="w-full px-4 sm:px-10 py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                
                {/* Heading */}
                <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-header mb-3">
                    Meet Our Team
                </h2>
                <p className="text-text max-w-2xl mx-auto">
                    Our passionate team of professionals is dedicated to giving your pets the care, attention, and love they deserve.
                </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                
                {/* Member 1 */}
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden">
                    <div className="relative h-[250px] w-full">
                        <Image src="/images/dr-john.png" className="object-cover object-top" alt="Dr. John" fill />
                    </div>
                    <div className="p-5 text-center">
                    <h3 className="font-semibold text-lg">Dr. John Smith</h3>
                    <p className="text-primary text-sm mb-2">Veterinary Doctor</p>
                    <p className="text-sm text-text">
                        متخصص in pet diagnosis and long-term care with over 8 years experience.
                    </p>
                    </div>
                </div>

                {/* Member 2 */}
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden">
                    <div className="relative h-[250px] w-full">
                        <Image src="/images/sarah-williams.png" className="object-cover object-top" alt="Sarah Williams" fill />
                    </div>
                    <div className="p-5 text-center">
                    <h3 className="font-semibold text-lg">Sarah Williams</h3>
                    <p className="text-primary text-sm mb-2">Pet Nutritionist</p>
                    <p className="text-sm text-text">
                        Helps pet owners choose the right diet for healthier and happier pets.
                    </p>
                    </div>
                </div>

                {/* Member 3 */}
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden">
                    <div className="relative h-[250px] w-full">
                    <Image src="/team3.jpg" alt="Michael" fill className="object-cover" />
                    </div>
                    <div className="p-5 text-center">
                    <h3 className="font-semibold text-lg">Michael Brown</h3>
                    <p className="text-primary text-sm mb-2">Pharmacist</p>
                    <p className="text-sm text-text">
                        Ensures every prescription is accurate and safe for your pet.
                    </p>
                    </div>
                </div>

                {/* Member 4 */}
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden">
                    <div className="relative h-[250px] w-full">
                    <Image src="/team4.jpg" alt="Emily" fill className="object-cover" />
                    </div>
                    <div className="p-5 text-center">
                    <h3 className="font-semibold text-lg">Emily Davis</h3>
                    <p className="text-primary text-sm mb-2">Customer Care</p>
                    <p className="text-sm text-text">
                        Always ready to assist you and ensure a smooth experience.
                    </p>
                    </div>
                </div>

                </div>
            </div>
            </section>
        </>
     );
}
 
export default Team;