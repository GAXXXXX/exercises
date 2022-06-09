/*
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2022-03-10 20:00:18
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-03-10 20:44:31
 */

function isPalindrome1(str) {
    if (!str.length) return true;
    str = str.split("");
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str[start] == str[end]) {
            start++;
            end--;
        } else {
            return false;
        }
    }

    return true;
}

function isPalindrome2(str) {
    if (str.length <= 1) return true;
    let start = 0;
    let end = str.length - 1;

    if (str[start] == str[end]) {
        return isPalindrome2(str.slice(start + 1, end));
    } else {
        return false;
    }
}

function isPalindrome3(str) {
    let newStr = str.split("").reverse().join("");
    let i = 0,
        len = str.length;

    while (i < len) {
        if (str[i] == newStr[i]) {
            i++;
        } else {
            return false;
        }
    }

    return true;
}

var str1 = "asdfdsa";
var str2 = "asdfgh";

console.log(isPalindrome2(str1));
console.log(isPalindrome2(str2));