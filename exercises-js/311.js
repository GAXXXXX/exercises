/*
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2022-03-11 19:16:22
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-03-31 22:48:34
 */

/* 防抖 */
function debounce(delay, fn) {
    let timer = null;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.call(this, ...arguments);
        }, delay);
    };
}

/* 节流 */
function throttle(delay, fn) {
    let lastTime = null;
    return function() {
        let newTime = Date.now();
        if (newTime - lastTime > delay) {
            fn.call(this, ...arguments);
            lastTime = newTime;
        }
    };
}

/* 数组去重 */
function removeData1(arr) {
    return [...new Set(arr)];
}

function removeData2(arr) {
    let unique = [];

    arr.forEach((i) => {
        if (!unique.includes(i)) {
            unique.push(i);
        }
    });

    return unique;
}

function removeData3(arr) {
    return arr.reduce((pre, cur) => {
        // return (pre = !pre.includes(cur) ? pre.push(cur) : pre); //Uncaught TypeError: pre.includes is not a function
        if (!pre.includes(cur)) {
            pre.push(cur);
        }

        return pre;
    }, []);
}

var arr1 = ["a", "s", "d", "a"];
var arr2 = [1, 2, 3, "a", "s", "a", 1];
var arr3 = ["你好", "你好", "1", 2];
console.log(removeData3(arr1));
console.log(removeData3(arr2));
console.log(removeData3(arr3));

/* 数组扁平化 */
function _flat(arr) {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? _flat(cur) : cur);
    }, []);
}

var arr = [
    [1, 2, "a", [1, 2, "x"]], "你好", "hello", 12
];
console.log(_flat(arr));

/* call/bind/apply */