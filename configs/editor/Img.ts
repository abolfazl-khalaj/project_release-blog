const ImageUploader = {
  insertImageAtCursor: (imageUrl: string): void => {
    const selection: Selection | null = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range: Range = selection.getRangeAt(0);
    const img: HTMLImageElement = document.createElement("img");
    img.src = imageUrl;
    img.style.maxWidth = "100%";
    img.style.maxHeight = '300px'
    img.style.objectFit = 'cover'
    img.style.borderRadius = "8px";
    img.style.margin = "auto";

    range.deleteContents();
    range.insertNode(img);
  },

  handleUploadLocalImage: (): void => {
    
    const fileInput: HTMLInputElement = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.style.display = "none";

    fileInput.addEventListener("change", (event: Event) => {
      const target = event.target as HTMLInputElement;
      const file: File | undefined = target.files?.[0];

      if (file) {
        const reader: FileReader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
          const imageUrl: string | null = e.target?.result as string;
          if (imageUrl) ImageUploader.insertImageAtCursor(imageUrl);
        };
        reader.readAsDataURL(file);
      }
    });

    document.body.appendChild(fileInput);
    fileInput.click();
    document.body.removeChild(fileInput);
  },
};

export default ImageUploader