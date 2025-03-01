const handleInsertH1 = (editorRef:React.RefObject<HTMLDivElement | null>) => {
  console.log('asd');
  
    const textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.placeholder = 'Enter the text for H1';
    textInput.style.width = '300px';
    textInput.style.marginBottom = '10px';
    textInput.addEventListener('blur', () => {
      const text = textInput.value;
      if (text) {
        const selection = window.getSelection();
        if (selection?.rangeCount) {
          const range = selection.getRangeAt(0);

          // ایجاد تگ h1
          const h1 = document.createElement("h1");
          h1.style.fontSize = '40px'
          h1.textContent = text;

          // درج h1 در محل انتخاب
          range.deleteContents();
          range.insertNode(h1);

          // انتقال مکان‌نما به بعد از h1
          const newRange = document.createRange();
          newRange.setStartAfter(h1);
          newRange.collapse(true)
          selection.removeAllRanges();
          selection.addRange(newRange);
        }
      }
      textInput.remove(); // حذف ورودی بعد از وارد کردن
    });
    editorRef.current?.appendChild(textInput);
    textInput.focus(); // فوکوس روی ورودی برای وارد کردن
  };

export default handleInsertH1