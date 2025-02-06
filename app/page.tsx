import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-1/2 m-auto flex items-center justify-center flex-col gap-y-6">        
      <div className="text-center w-full">
        <h1 className="text-2xl mb-4">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با اس       </h1>
        <p className="text-xl">
        گرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این ص        </p>
      </div>
      <div className="flex gap-x-5">
        <Link href={'/blog'} className="bg-black text-white font-bold px-6 py-1 rounded">
          مقالات
        </Link>
        <Link href={'/blog-you'} className="px-6 py-1 border rounded">
          مقالات شما
        </Link>
      </div>
    </div>
  );
}
