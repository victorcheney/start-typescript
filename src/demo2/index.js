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
    console.log('colorName:', colorName); // colorName: Blue
}
/**
 * 7、Any
 * 不清楚某一个变量的值类型时，不希望类型检查其对这些值进行检查而直接让他们通过编译阶段
 * 在迁移旧代码时很有用
 */
{
    var test = 4;
    test = false;
    test = 'hello';
    // 只知道一部分类型(一个不知道类型的数组，包含不同类型的数据)
    var list_1 = [1, 'hello', false];
    list_1[1] = 100;
}
/**
 * 8、Void
 * 表示没有任何类型，当一个函数没有返回值时，其返回值类型就是Void
 */
{
    function warnUser() {
        console.log('wrong message');
    }
}
/**
 * Null和undefined
 * 默认情况下null和undefined是所有类型的子类型，可以将null或undefined赋值给number类型
 * 当指定了 --strictNullChecks标记，null和undefined只能赋值给void和他们各自
 */
/**
 * 9、Never
 * never类型表示的是那些用不存在的值的类型
 * 是那些总会抛出异常或根本不好有返回值的函数表达式或箭头函数表达式的返回值类型
 */
{
    // 返回never的函数必须存在无法到达的终点
    function error(message) {
        throw new Error(message);
    }
    // 推断的返回值为never
    function fail() {
        return error('something failed');
    }
    // 返回never的函数必须存在无法到达的终点
    function infiniteLoop() {
        while (true) {
        }
    }
}
create({ prop: 0 });
create(null);
// create(43) // Error
// create('hello') // Error
// create(false) // Error
// create(undefined) // Error
/**
 * 11、类型断言
 * 当你清楚的知道一个实体具有比他现有类型更确切的类型
 * 通过类型断言告诉编译器，“相信我，我知道自己在干什么”
 * 好比是其他语言里的类型转换，但不进行特殊的数据检查和解构，只在编译阶段起作用
 */
// 形式一：尖括号
var someValue = 'this is a string';
var strLen = someValue.length;
// 形式二：as语法
var len = someValue.length;
// 注：两种形式等价，如果在TypeScript里使用JSX时，只能使用as语法
