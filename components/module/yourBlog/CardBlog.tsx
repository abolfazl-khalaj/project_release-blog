import Image from "next/image";
import Link from "next/link";
import img from '../../../public/images.jpg'


export default function CardBlog(){

    return (
        <div className=" w-[32%] h-96 p-3  border rounded-md relative">

            <div className="flex justify-between">

                <div className="flex items-end">
                    <Link href={'/author/546746'} >
                        <Image src={img} width={20} quality={100} height={20} alt="ll"
                        className="rounded-full cursor-pointer"/>
                    </Link>
                    
                    <Link href={'/author/343545354'} className="text-xs mr-1 cursor-pointer hover:text-blue-600">alireza hamom</Link>
                    
                </div>

                <span className="text-sm">
                    1404 / آبان / 12
                </span>
            </div>

            <div className="mt-4 mb-2">
                <h3 className="text-xl mb-1 text-blue-900">
                    دیزاین پترن های وب
                </h3>
                <p className="text-gray-600 line-clamp-6">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                </p>
            </div>


            <div>
                <ul className="text-blue-500 text-sm 
                 children:relative 
                 children:pr-3
                    children:before:content-[''] 
                    children:before:absolute 
                    children:before:right-0 
                    children:before:top-1/2 
                    children:before:-translate-y-1/2 
                    children:before:w-2 
                    children:before:h-2 
                    children:before:bg-blue-500 
                    children:before:rounded-full 
                    children:before:-ml-4 ">
                    <li>متن های تستی</li>
                    <li>متن های تستی</li>
                    <li>متن های تستی</li>

                    </ul>
            </div>



            <div className="py-1 text-gray-800 hover:text-gray-950 hover:bg-gray-300 delay-75 cursor-pointer text-center rounded-md bg-gray-200 absolute bottom-3 left-2 right-2">
                <Link href={'/s'}>
                    ادامه مقاله
                </Link>
            </div>
        </div>
    )
}