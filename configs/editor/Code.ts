const handleInsertCode = () => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;
  
    const range = selection.getRangeAt(0);
  
    const codeInput = document.createElement('div');
    codeInput.style.direction = 'ltr'
    codeInput.style.margin = 'auto'
    codeInput.style.backgroundColor = '#000';
    codeInput.style.color = '#fff';
    codeInput.style.width = '80%';
    codeInput.style.minHeight = '100px';
    codeInput.style.marginBottom = '10px';
    codeInput.style.padding = '10px';
    codeInput.style.borderRadius = '5px';
    codeInput.style.fontFamily = 'monospace';
    codeInput.style.whiteSpace = 'pre-wrap';
    codeInput.contentEditable = "true";
  
    // درج المنت در محل انتخاب شده
    range.deleteContents();
    range.insertNode(codeInput);

    codeInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault(); // جلوگیری از اضافه شدن خط جدید در المنت کد
        
        const selection = window.getSelection();
        if (selection?.rangeCount) {
          const range = selection.getRangeAt(0);
          
          // ایجاد یک پاراگراف جدید بعد از codeInput
          const newParagraph = document.createElement("p");
          newParagraph.textContent = ""; // پاراگراف جدید برای متن ساده
          codeInput.insertAdjacentElement("afterend", newParagraph);
          
          // انتقال مکان‌نما به داخل پاراگراف جدید
          const newRange = document.createRange();
          newRange.setStart(newParagraph, 0);
          newRange.collapse(true);
          selection.removeAllRanges();
          selection.addRange(newRange);
          
          codeInput.blur(); // خروج از حالت ویرایش codeInput
        }
      }
    });
  
    // انتقال مکان‌نما به داخل المنت
    const newRange = document.createRange();
    newRange.selectNodeContents(codeInput);
    newRange.collapse(false);
    selection.removeAllRanges();
    selection.addRange(newRange);
  
    codeInput.focus();
  };

export default handleInsertCode