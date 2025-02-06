import Link from "next/link";

export default function Header(){

    return (
        <div className=" border-b ">

            <div className="flex justify-between w-10/12 my-5 m-auto">
                <div>
                    <div className=" childrenHover:text-gray-500 flex gap-x-4">
                        <Link href={'/blog'}>
                            فرآورده

                        </Link>
                        <Link href={'/your_blog'}>
                            مقالات شما 
                        </Link>
                        <Link href={'/connect'}>
                           درباره ما | ارتباطات
                        </Link>
                    </div>
                </div>
                <div className="flex gap-x-6">
                    <div>
                        <input type="text" placeholder="مقاله مورد نظر خود را سرچ کنید ..." name="" id="" />
                    </div>
                    <div>
                        <Link href={'/login'}>
                            ثبت نام / ورود
                        </Link>
                    </div>
                </div>
            </div>

        </div>

    )
}