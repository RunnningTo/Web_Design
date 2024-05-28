window.onload = function() {
    let imgList = document.getElementById('imgList');
    let img = document.getElementsByTagName('img');

    //动态设置ul的宽度以适应图片的动态增加减少
    imgList.style.width = img.length*945 + "px";

    let handler = document.getElementById("handler");
    let carousel = document.getElementById("carousel");
    //设置获取handler的left值,以适应动态的增加减少a标签达到居中效果
    handler.style.left = (carousel.offsetWidth - handler.offsetWidth)/2 + "px";


    let index = 0;
    let a = document.getElementsByClassName("change_link");

    a[index].style.backgroundColor="aquamarine";
    //为所有的超链接都绑定单击响应函数
    for(let i=0;i<a.length;i++) {
        a[i].num = i;
        a[i].onclick = function() {
            index = this.num;
            
        }
    }








}