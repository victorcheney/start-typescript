/**
 * 基础类型 
 */

/**
 * 1、布尔值  true/false
 */

let isDone: boolean = false

/**
 * 2、数字
 * TypeScript中的所有数字都是浮点数
 * 支持十进制、十六进制以及ES6中引入的二进制和八进制字面量
 */
let decLiteral: number = 6          // 十进制
let hexLiteral: number = 0xf00d     // 十六进制
let binaryLiteral: number = 0b1010  // 二进制
let octalLiteral: number = 0o744    // 八进制

/**
 * 3、字符串
 * string 表示文本数据类型，单引号或者双引号
 * 支持模板字符串，反引号包围（`），并以${ expr } 形式嵌入表达式
 */
let username: string = 'Tom'

// 支持模板字符串
let sentence:string = `Hello, the username is ${username}`

// 结果：'Hello，the username is Tom'

/**
 * 4、数组
 * 第一种：在元素类型后面接上[]，表示由此类型元素组成的数组
 * 第二种：使用数组泛型 Array<元素类型>
 */
// 第一种
let list: number[] = [1, 2, 3]          // 表示数字组成的数组
let strList: string[] = ['1', '2', '3'] // 表示字符串组成的数组

// 第二种
let numList: Array<number> = [1, 2, 4] // 表示数字组成的数组

