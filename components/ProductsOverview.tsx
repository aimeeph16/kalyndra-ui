import Link from "next/link";
import { ArrowRight } from "lucide-react";
export default function ProductsOverview() {
    return (
        <div className="flex flex-col bg-white rounded-md px-22 py-10 items-start gap-6">
            <p className="uppercase font-bold text-[#8D1D32] font-['DM_Sans']">About Us</p>
            <h1 className="uppercase text-4xl text-left font-bold text-gray-700 font-poppins">Your Trusted Chemical Partner</h1>
            <p className="text-justify font-['DM_Sans']">
                Hasgara is a trusted chemical manufacturer that brings hope, trust, and prosperity for Indonesia and the world. With a focus on innovation and sustainability, we provide premium solutions that support the progress of various industries, ranging from agriculture to energy.
                <br />
                <br />
                Our commitment to quality and excellence is reflected in our state-of-the-art facilities, advanced research and development, and a team of dedicated professionals who are passionate about delivering the best products and services to our clients.
                We are committed to being a reliable, high-performance partner, and responsible for the environment, helping our clients grow and develop with confidence in the international arena.
            </p>
            <Link href="https://hasgara.com/about/" className="flex gap-2 items-center rounded-full bg-[#8D1D32] font-['DM_Sans'] text-white px-3 py-2 w-fit hover:opacity-70"><p>Pelajari Lebih Lanjut</p><ArrowRight size={16} /></Link>
        </div>
    )
}