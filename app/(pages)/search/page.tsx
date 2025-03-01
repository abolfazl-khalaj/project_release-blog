import CardBlog from "@/components/module/yourBlog/CardBlog";



export default function BlogsSearching(){

    return (

        <div className="w-10/12 m-auto mt-10  mx-auto">
            <div className="mb-10">
                <div className="mb-3">
                    <h4 className="text-3xl">
                        : مقالات شما جستجو
                    </h4>
                </div>
                <div className="flex flex-wrap gap-y-3 flex-1 justify-around">
                    <CardBlog auth={'admin'}/>
                    <CardBlog auth={'admin'}/>
                    <CardBlog auth={'admin'}/>

                </div>
            </div>

            <div>
                <div className="mb-3">
                    <h4 className="text-3xl">
                       
                        مقالات شما جستجو
                          :   
                        <span className="text-2xl text-blue-600 font-bold">

                            کلین
                            
                        </span>
                    </h4>
                </div>
                <div className="flex flex-wrap gap-y-3 flex-1 justify-around">
                    <CardBlog />
                    <CardBlog />
                    <CardBlog />
                    <CardBlog />
                    <CardBlog />
                    <CardBlog />
                    <CardBlog />
                    <CardBlog />
                    <CardBlog />
                    <CardBlog />
                </div>
            </div>

        </div>

    )
}