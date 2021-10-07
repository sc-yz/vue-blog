/*
 * @Author: kian
 * @Date: 2021-09-22 10:21:45
 * @LastEditors: kian
 * @LastEditTime: 2021-09-22 10:41:35
 * @Description:
 */

let bool: boolean = true;

let num: number = 1234;

let strr: string = '123';

let arr1: number[] = [1, 2, 3];
let arr2: Array<string | number> = [1, 2, '3'];

// 元祖 限定了数组的类型和个数

let tuple: [number, string] = [0, '1'];

// 元祖越界问题

// 可以使用数组的push, 但是不能访问;

tuple.push(1);
console.log(tuple);
console.log(tuple[1]);
