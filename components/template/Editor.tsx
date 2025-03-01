'use client';

import handleInsertCode from "@/configs/editor/Code";
import handleInsertH1 from "@/configs/editor/H1";
import ImageUploader from "@/configs/editor/Img";
import handleLinkOnSelectedText from "@/configs/editor/Link";
import React, { useRef, useState } from "react";

const RichTextEditor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const [editorContent, setEditorContent] = useState<string>("");

  const handleCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value || undefined);
  };


  const updateContent = () => {
    if (editorRef.current) {
      setEditorContent(editorRef.current.innerHTML);
    }
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">
        مقاله خود را تنظیم کند .

      </h1>

      <div className="flex flex-wrap gap-2 mb-4">
      <button onClick={handleLinkOnSelectedText} className="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600">
        Link
        </button>
        <button onClick={() => handleCommand("bold")} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Bold</button>
        <button onClick={() => handleInsertH1(editorRef)} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">H1</button>
        <button onClick={() =>handleCommand('underline')} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
          Underline
        </button>
        <button onClick={() => ImageUploader.handleUploadLocalImage()} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
        photo
        </button>
        <input 
          type="color" 
          onChange={(e) => handleCommand('foreColor',e.target.value)} 
          className="w-10 h-10 cursor-pointer border rounded"
        />

        <select 
          onChange={(e) => handleCommand("fontSize",e.target.value)} 
          className="px-3 py-1 border rounded bg-white"
        >
          <option value="1">Small</option>
          <option value="3">Medium</option>
          <option value="5">Large</option>
          <option value="7">Extra Large</option>
        </select>   

        <button onClick={() => handleCommand("italic")} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Italic</button>
        <button onClick={handleInsertCode} className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600">Insert Code</button>
        <button onClick={updateContent} className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600">UPDATE CODE</button>
      </div>

      <div ref={editorRef} contentEditable className="border border-gray-300 rounded p-4 min-h-[300px] focus:outline-none bg-white"></div>

    </div>
  );
};

export default RichTextEditor;
