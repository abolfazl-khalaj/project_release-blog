import Image from "next/image";
import Link from "next/link";
import img from '../../../public/images.jpg'

interface CardBlogProps {
    auth? : string
}

export default function CardBlog(props:CardBlogProps) {
    return (
        <div className="w-[32%] h-96 p-4 border border-gray-700 rounded-lg shadow-lg bg-gray-100 text-gray-300 relative transition transform hover:shadow-md">
            <div className={`flex  items-center ${props.auth !== 'admin' ? 'justify-between' : 'justify-end'}`}>
                {
                    props.auth !== 'admin' && (
                        <div className="flex gap-1 items-center">
                            <Link href={'/author/546746'} className="w-8 h-8">
                                <Image src={img} width={50} height={50} quality={100} alt="author-image" className="w-8 h-8 rounded-full cursor-pointer border border-gray-600" />
                            </Link>
                            <Link href={'/author/343545354'} className="text-xs mt-1 cursor-pointer hover:text-blue-500 text-gray-500">
                                alireza hamom
                            </Link>
                        </div>
                    )
                }


                <span className="text-sm text-gray-500">1404 / آبان / 12</span>
            </div>
            <div className="mt-3 mb-2">
                <h3 className="text-xl mb-2 text-gray-600 font-semibold">دیزاین پترن های وب</h3>
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