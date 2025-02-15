'use client'

interface DataEditFromProps {
    data: string,
    placeholder: String,
    clickBtnEdit?: (data : string)=>void
}

export default function DataEditFromPanelAdmin(
    {data , placeholder , clickBtnEdit}:DataEditFromProps
){

    console.log('asa');
    
    return(
        <div className="space-y-3">
            <h3 className="text-lg font-bold text-gray-700">متن فعلی</h3>

            <div className="p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
                <p className="text-lg font-semibold text-gray-700">
                    {data}
                </p>
            </div>

            <textarea
                className="w-full h-32 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={`${placeholder}.`}
            />

            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
                تغییر
            </button>
        </div>

    )
}