/*
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2022-05-16 16:20:05
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-05-16 17:14:38
 */
function animate(obj, target, callback) {
    //先清除之前的定时器，只保留当前的一个定时器执行
    clearTimeout(obj.timer);
    obj.timer = setInterval(function() {
        //步长是会变化的，所以写到定时器里面
        //把步长改为整数，正值向上取整，负值向下取整
        let step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            //停止动画的本质是停止定时器
            clearInterval(obj.timer);
            // 回调函数写到定时器里面
            // if (callback) { callback() };
            callback && callback();
        }
        // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
        obj.style.left = obj.offsetLeft + step + "px";
    }, 15);
}