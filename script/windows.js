    // 显示弹窗
    function openPopup() {
        var overlay = document.getElementById('overlay');
        overlay.style.display = 'block';
    }

    // 隐藏弹窗
    function closePopup() {
        var overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
    }


    // 点击关闭按钮或遮罩层时关闭弹窗
    // closeButton.addEventListener('click', closePopup);
    // overlay.addEventListener('click', closePopup);
    // loginBtn.addEventListener('click', openPopup);
    // 在需要的时候调用openPopup函数来显示弹窗
