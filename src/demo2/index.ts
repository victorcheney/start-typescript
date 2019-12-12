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

/**
 * 5、元组 Tuple
 * 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
 */

// 定义一对值分别为string 和 number类型的元组
let data: [string, number]
// 初始化
data = ['data', 10]
// data = [10, 'data'] // Error 值和类型必须对应

// 当访问一个越界元素，会使用联合类型代替
// data[3] = 'word'

/**
 * 6、枚举
 * enum是队JavaScript标准数据类型的一个补充，可以为一组数值赋予友好的名字
 */
{
  enum Color {Red, Green, Blue=9}
  let c:Color = Color.Green

  // 默认情况是从0开始的元素下标，也可以手动赋值
  console.log(c)

  // 根据枚举值获取到名字
  let colorName: String = Color[9]
  console.log('colorName:', colorName) // colorName: Blue

}

/**
 * 7、Any
 * 不清楚某一个变量的值类型时，不希望类型检查其对这些值进行检查而直接让他们通过编译阶段
 * 在迁移旧代码时很有用
 */
{
  let test: any = 4
  test = false
  test = 'hello'

  // 只知道一部分类型(一个不知道类型的数组，包含不同类型的数据)
  let list: any[] = [1, 'hello', false]
  list[1] = 100
}
