import ScrollBy from "@/components/template/ScrollBy";
import SideBar from "@/components/template/SideBar";



export default function Blog(){
    return (
        <div className="w-11/12 m-auto mt-8 flex justify-between">
            <div className="w-1/3 ">
                <SideBar/>
            </div>
            <div className='bg-green-300 w-full mx-7 p-4'>
                body
            </div>
            <div className="w-1/4 ">
                <ScrollBy/>
            </div>

        </div>
    )
}