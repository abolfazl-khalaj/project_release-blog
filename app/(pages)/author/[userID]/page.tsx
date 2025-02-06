import Image from "next/image";
import img from '@/public/images.jpg'

export default function Author(){

    return (
        <div className="w-1/2 mx-auto mt-16 flex-col justify-center items-center text-center">

            <div className="flex justify-center items-center">
                <Image quality={100} src={img} alt="ls" width={200 } height={200}
                className="rounded-lg "/>
            </div>

            <div>
                <h1 className="text-2xl">
                    ali reza mohammadi 
                </h1>
                <span>توسعه دهنده وب</span>

                <div className="mt-4">
                    <span>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه</span>
                </div>
            </div>
            

        </div>
    )
}