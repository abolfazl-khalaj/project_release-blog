'use client';

import MapComponent from "@/components/template/MapLeaflet";
import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPenFancy, FaPaperPlane } from "react-icons/fa";

export default function ContactSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="w-3/5 m-auto my-10 p-8 shadow-lg bg-white rounded-lg text-center border border-gray-200 ">
            <div className="mb-6">
                <MapComponent address="Tehran , iran"/>
            </div>
            <div>

            <h2 className="text-2xl font-bold mb-4 text-blue-700">ارتباط با ما</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
                ما یک پلتفرم قدرتمند برای ایجاد مقالات و اشتراک‌گذاری دانش هستیم. شما هم می‌توانید مقالات خود را در پلتفرم ما منتشر کنید، نظرات خود را با دیگران به اشتراک بگذارید و بخشی از جامعه نویسندگان ما باشید.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
                برای هرگونه سوال، پیشنهاد یا همکاری، از طریق راه‌های ارتباطی زیر با ما در تماس باشید.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
                برای هرگونه سوال، پیشنهاد یا همکاری، از طریق راه‌های ارتباطی زیر با ما در تمالورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.س باشید.
            </p>
            <div className="flex flex-col gap-5 items-center">
                <div className="flex items-center gap-3 text-gray-800 text-lg">
                    <FaPhone className="text-blue-600 text-xl" />
                    <span>+98 912 345 6789</span>
                </div>
                <div className="flex items-center gap-3 text-gray-800 text-lg">
                    <FaEnvelope className="text-blue-600 text-xl" />
                    <span>info@example.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-800 text-lg">
                    <FaMapMarkerAlt className="text-blue-600 text-xl" />
                    <span>تهران، خیابان آزادی، پلاک ۱۰</span>
                </div>
            </div>
            <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md flex flex-col gap-4">
                <button onClick={toggleModal} className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all">
                    <FaPaperPlane /> ارسال پیغام
                </button>
            </div>
            {isModalOpen && (
                <div className=" fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 text-center">
                        <h3 className="text-lg font-semibold text-blue-600 mb-4">ارسال پیغام</h3>
                        <input type="text" placeholder="عنوان پیام" className="w-full p-2 border rounded-lg mb-3 focus:ring-2 focus:ring-blue-400" required />
                        <input type="email" placeholder="ایمیل" className="w-full p-2 border rounded-lg mb-3 focus:ring-2 focus:ring-blue-400" required />
                        <textarea placeholder="پیام شما" className="w-full p-2 border rounded-lg mb-4 focus:ring-2 focus:ring-blue-400 resize-none min-h-40" required></textarea>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all w-full">ارسال</button>
                        <button onClick={toggleModal} className="mt-3 text-sm text-gray-800 hover:underline block">بستن</button>
                    </div>
                </div>
            )}
            </div>
        </div>
    );
}
