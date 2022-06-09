/*
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2022-05-15 16:27:51
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-05-16 23:50:50
 */
window.addEventListener("load", function() {
    var arrow_l = document.querySelector(".arrow-l");
    var arrow_r = document.querySelector(".arrow-r");
    var focus = document.querySelector(".focus");

    var timer = null; //定时器
    var flag = true; //节流阀，控制上一个动画执行完毕之后再执行下一个

    // 鼠标经过离开显示、隐藏两侧按钮
    focus.addEventListener("mouseenter", function() {
        arrow_l.style.display = "block";
        arrow_r.style.display = "block";
        clearInterval(timer);
    });
    focus.addEventListener("mouseleave", function() {
        arrow_l.style.display = "none";
        arrow_r.style.display = "none";
        timer = setInterval(function() {
            arrow_r.click(); //手动调用右侧按钮的点击事件
        }, 2000);
    });

    //动态生成小圆圈
    var ul = document.querySelector(".focus ul");
    var ol = document.querySelector(".focus ol");
    for (let i = 0; i < ul.children.length; i++) {
        //创建小圆点并添加
        var li = document.createElement("li");
        li.setAttribute("index", i); //先设置li的index属性
        ol.appendChild(li);

        // 小圆圈的排他思想
        // 点击当前小圆圈添加current类
        // 其余的小圆圈移除current类
        li.addEventListener("click", function() {
            for (let j = 0; j < ol.children.length; j++) {
                ol.children[j].className = "";
            }
            this.className = "current";

            //点击小圆圈，让图片滚动
            // 给li设置index，ul的移动距离就是index*图片的宽度(focus的宽度)
            let index = this.getAttribute("index"); //this指向的是当前点击的li

            //使小圆圈和按钮功能一样
            num = index;

            animate(ul, -index * focus.offsetWidth);
        });
    }

    ol.children[0].className = "current"; //默认打开时第一个li是选中状态

    //在li的最后将第一个li克隆，便于做滚动效果
    li_clone = ul.children[0].cloneNode(true); //true深拷贝，false前拷贝
    ul.appendChild(li_clone); //添加克隆的节点

    // 设置一个num，作用如index
    var num = 0;

    // 点击右侧按钮图片滚动
    arrow_r.addEventListener("click", function() {
        // console.log(ul.children.length);//5
        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) {
                //设置边界条件
                num = 0;
                ul.style.left = 0; //是为了让视觉效果更加流畅
            }
            num++;

            //点击一次动画执行一次
            animate(ul, -num * focus.offsetWidth, function() {
                flag = true;
            });

            circleChange();
        }
    });

    // 点击左侧按钮图片滚动
    arrow_l.addEventListener("click", function() {
        if (flag) {
            flag = false;
            if (num == 0) {
                //设置边界条件
                num = ul.children.length - 1;
                ul.style.left = -num * focus.offsetWidth + "px"; //是为了让视觉效果更加流畅
            }
            num--;

            //点击一次动画执行一次
            animate(ul, -num * focus.offsetWidth, function() {
                flag = true;
            });

            circleChange();
        }
    });

    // 封装代码模块
    // 点击按钮之后，同步选中的小圆圈
    function circleChange() {
        for (let i = 0; i < ol.children.length; i++) {
            ol.children[i].className = "";
        }
        // 因为num++先取值后自增，则最后值为 ol.children.length，而index最大值为 ol.children.length-1
        let circle = num == ol.children.length ? 0 : num;
        // 留下当前的小圆圈的current类名
        ol.children[circle].className = "current";
    }

    //自动播放模块
    timer = setInterval(function() {
        arrow_r.click(); //手动调用右侧按钮的点击事件
    }, 2000);
});