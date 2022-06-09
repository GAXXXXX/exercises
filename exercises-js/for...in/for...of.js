/*
 * @Descripttion:
 * @version:
 * @Author: sueRimn
 * @Date: 2022-04-23 22:27:11
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-04-23 23:52:28
 */

//1、遍历对象

// for...in 遍历的是对象的属性，还可以遍历到其原型链上
function Foo() {
    this.name = "Jae";
    this.age = "24";
}

Foo.prototype.sex = "femal";

let obj = new Foo();
for (let keys in obj) {
    console.log(keys); //name age
}

//for...of 不能遍历普通对象
//它只能遍历具有iterator接口的数据：Set Map arguments DOM操作中的NodeList

for (let value of obj) {
    console.log(value); //obj is not iterable
}

//2、遍历数组

let arr = ["one", "two", "three"];

//for...in 遍历数组索引值
for (let index in arr) {
    console.log(index); //1 2 3
}

//for...of 遍历数组的键值
for (let value of arr) {
    console.log(value); //one two three
}

//3、forEach不能使用break continue 结束需使用return
//for...in/for...of可使用
for (let value of arr) {
    console.log(value); //one two
    if (value == "two") {
        break;
    }
}

//4、for...of 遍历对象 Object.keys() Object.values()
for (let key in Object.keys(obj)) {
    console.log(key); //0 1
}

for (let value of Object.values(obj)) {
    console.log(value); //Jae 24
}

//5、arguments NodeList
function foo2() {
    for (let value of arguments) {
        console.log(value); //one 2 3
    }
}

foo2("one", 2, 3);

//6、不能遍历到Symbol属性
let as = Symbol("a");
let bs = Symbol("b");
let sObj = {
    [as]: "a",
    [bs]: "b",
    name: "Jae",
    age: 24,
};

for (let key in sObj) {
    console.log(key); //name age
}

let objSymbolKeys = Object.getOwnPropertySymbols(sObj);
for (let key in objSymbolKeys) {
    console.log(key); //0 1
}

for (let value of objSymbolKeys) {
    console.log(value); //Symbol(a) Symbol(b)
}

for (let value of sObj) {
    console.log(value); //sObj is not iterable
}