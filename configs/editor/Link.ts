const handleLinkOnSelectedText = () => {
    const url = prompt("Enter the URL:");
  
    // اگر URL وارد شده باشد، بررسی می‌کنیم که آیا متنی انتخاب شده است
    if (url) {
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
  
        // ایجاد لینک در محل انتخاب
        const link = document.createElement("a");
        link.href = url;
        link.textContent = selection.toString(); // متن انتخاب‌شده را به لینک تبدیل می‌کنیم
  
        // جایگزینی متن انتخاب‌شده با لینک
        range.deleteContents(); // حذف متن انتخاب‌شده
        range.insertNode(link); // درج لینک
  
        // انتقال مکان‌نما به بعد از لینک
        const newRange = document.createRange();
        newRange.setStartAfter(link);
        newRange.collapse(true);
        selection.removeAllRanges();
        selection.addRange(newRange);
      }
    }
  };

export default handleLinkOnSelectedText