// document.addEventListener('DOMContentLoaded', () => {
//     const navBtns = document.querySelectorAll('.nav-content-bttn');

//     navBtns.forEach(navBtn => {
//         navBtn.addEventListener('click', (event) => {
//             const clickedNavBtn = event.target;
//             if(!clickedNavBtn.classList.contains('active')){
//                 navBtns.forEach(item => {
//                     item.classList.remove('active');
//                 });
//                 clickedNavBtn.classList.add('active');
//             }
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.querySelector('.nav-content');

    navContainer.addEventListener('click', (event) => {
        const clickedNavBtn = event.target.closest('.nav-content-bttn');
        if(clickedNavBtn && !clickedNavBtn.classList.contains('active')) {
            // 通过button的data-tab定义
            const tabName = clickedNavBtn.dataset.tab;
            const activeTab = document.getElementById(tabName);
            document.querySelectorAll('.swiper-list').forEach(tab => {
                tab.classList.remove('active');
            })
            // 给当前按钮对应的容器添加active类
            activeTab.classList.add('active');

            // 移除所有按钮的active
            const navBtns = navContainer.querySelectorAll('.nav-content-bttn');
            navBtns.forEach(item => {
                item.classList.remove('active');
            });
            // 添加按钮的active
            clickedNavBtn.classList.add('active');
        }
    });
});
