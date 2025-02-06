import Image from "next/image";
import Link from "next/link";
import img from '../../../public/images.jpg'

export default function CardBlog() {
    return (
        <div className="w-[32%] h-96 p-4 border border-gray-700 rounded-lg shadow-lg bg-gray-100 text-gray-300 relative transition transform hover:scale-[1.01] hover:shadow-md">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <Link href={'/author/546746'}>
                        <Image src={img} width={24} quality={100} height={24} alt="author-image" className="rounded-full cursor-pointer border border-gray-600" />
                    </Link>
                    <Link href={'/author/343545354'} className="text-xs ml-2 cursor-pointer hover:text-blue-500 text-gray-500 pr-1 transition">alireza hamom</Link>
                </div>
                <span className="text-sm text-gray-500">1404 / آبان / 12</span>
            </div>
            <div className="mt-4 mb-2">
                <h3 className="text-xl mb-2 text-gray-100 font-semibold">دیزاین پترن های وب</h3>
                <p className="text-gray-700 line-clamp-4 leading-relaxed">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است...
                </p>
            </div>
            <div>
                <ul className="text-blue-500 text-sm space-y-1">
                    <li className="relative pr-4 before:content-[''] before:absolute before:right-0 before:top-1.5 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full">متن های تستی</li>
                </ul>
            </div>
            <div className="py-2 text-gray-300 font-semibold bg-gray-700 hover:bg-gray-600 transition text-center rounded-md absolute bottom-3 left-3 right-3 cursor-pointer">
                <Link href={'/your_blog/234234234'}>
                    ادامه مقاله
                </Link>
            </div>
        </div>
    );
}