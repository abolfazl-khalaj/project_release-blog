import CardBlog from "@/components/module/yourBlog/CardBlog";


export default function YourBlog(){

    return (
        <div className="flex flex-col w-10/12 m-auto mt-10  mx-auto">
            <div className="mb-5">
                <h1 className="text-3xl">
                    جدید ترین مقاله ها 
                </h1>
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
    )
}