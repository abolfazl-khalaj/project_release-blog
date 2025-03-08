import { useState } from "react";
import RichTextEditor from "../Editor";

export default function NewArticlePanelUser() {
  const [title, setTitle] = useState("");
  const [goal, setGoal] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">ایجاد مقاله جدید</h2>

      {/* عنوان مقاله */}
      <div className="mb-4">
        <label className="block font-medium mb-1">عنوان مقاله:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full rounded outline-blue-600"
          placeholder="عنوان مقاله را وارد کنید..."
        />
      </div>

      {/* هدف انتشار مقاله */}
      <div className="mb-4">
        <label className="block font-medium mb-1">هدف انتشار مقاله:</label>
        <input
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="border p-2 w-full rounded outline-blue-600"
          placeholder="هدف از انتشار مقاله را وارد کنید..."
        />
      </div>

      {/* دسته‌بندی مقاله */}
      <div className="mb-4">
        <label className="block font-medium mb-1">دسته‌بندی مقاله:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 w-full rounded outline-blue-600"
        >
          <option value="">انتخاب دسته‌بندی...</option>
          <option value="tech">تکنولوژی</option>
          <option value="health">سلامت</option>
          <option value="business">کسب‌وکار</option>
          <option value="science">علمی</option>
        </select>
      </div>

      {/* ویرایشگر متن */}
      <RichTextEditor />
      <div>
        <button className="w-full rounded bg-blue-500 text-white my-3 py-1 text-xl">
            ثبت مقاله
        </button>
      </div>
    </div>
  );
}
