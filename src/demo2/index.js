/**
 * 基础类型
 */
/**
 * 1、布尔值  true/false
 */
var isDone = false;
/**
 * 2、数字
 * TypeScript中的所有数字都是浮点数
 * 支持十进制、十六进制以及ES6中引入的二进制和八进制字面量
 */
var decLiteral = 6; // 十进制
var hexLiteral = 0xf00d; // 十六进制
var binaryLiteral = 10; // 二进制
var octalLiteral = 484; // 八进制
/**
 * 3、字符串
 * string 表示文本数据类型，单引号或者双引号
 * 支持模板字符串，反引号包围（`），并以${ expr } 形式嵌入表达式
 */
var username = 'Tom';
// 支持模板字符串
var sentence = "Hello, the username is " + username;
// 结果：'Hello，the username is Tom'
/**
 * 4、数组
 * 第一种：在元素类型后面接上[]，表示由此类型元素组成的数组
 * 第二种：使用数组泛型 Array<元素类型>
 */
// 第一种
var list = [1, 2, 3]; // 表示数字组成的数组
var strList = ['1', '2', '3']; // 表示字符串组成的数组
// 第二种
var numList = [1, 2, 4]; // 表示数字组成的数组
/**
 * 5、元组 Tuple
 * 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
 */
// 定义一对值分别为string 和 number类型的元组
var data;
// 初始化
data = ['data', 10];
// data = [10, 'data'] // Error 值和类型必须对应
// 当访问一个越界元素，会使用联合类型代替
// data[3] = 'word'
/**
 * 6、枚举
 * enum是队JavaScript标准数据类型的一个补充，可以为一组数值赋予友好的名字
 */
{
    var Color = void 0;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 9] = "Blue";
    })(Color || (Color = {}));
    var c = Color.Green;
    // 默认情况是从0开始的元素下标，也可以手动赋值
    console.log(c);
    // 根据枚举值获取到名字
    var colorName = Color[9];
    console.log('colorName:', colorName);
}
