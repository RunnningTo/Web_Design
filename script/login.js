// 定义为全局变量
window.persons = [
    {"user": "xyz", "passwd": "111"},
    {"user": "202230224028", "passwd": "20041031"}
]
// 将每个账户加载到localStorage
function loadAccount() {
    //确保只加载一次
    if(!localStorage.getItem('accountsLoaded')) {
        for (let item of persons) {
            localStorage.setItem(item.user, item.passwd);
        }
    }
    localStorage.setItem('accountsLoaded', 'true');
}

function loginAction(user, passwd) {
    loadAccount();
    console.log(user + passwd);
    let passwd1 = localStorage.getItem(user);
    console.log(passwd1);
    if(passwd == passwd1) {
        window.open('about.html','_self');
    } else {
        passwordBtn.value="";
        openPopup();
    }
} 

function addAccount(user, passwd) {
    loadAccount();
    if(localStorage.hasOwnProperty(user)) {
        openPopup();
    } else {
        localStorage.setItem(user, passwd);
        persons.push({"user": user, "passwd": passwd})
        window.history.back();
    }
}

function refind(user, passwd) {
    loadAccount();
    var para = document.querySelector('#popup p');
    var head = document.querySelector('#popup h2');
    if(localStorage.hasOwnProperty(user)) {
        head.textContent = '账户存在';
        para.textContent = '密码为' + localStorage.getItem(user);
    } else {
        head.textContent = '账户不存在';
        para.textContent = '请重新输入';
    }
    openPopup();
}