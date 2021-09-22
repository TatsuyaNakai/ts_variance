"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.methodA = function () {
        console.log("A");
    };
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.prototype.methodB = function () {
        console.log("B");
    };
    return B;
}(A));
var C = /** @class */ (function (_super) {
    __extends(C, _super);
    function C() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    C.prototype.methodC = function () {
        console.log("C");
    };
    return C;
}(B));
var instanceOfA = new A();
var instanceOfB = new B();
// const foo: TakeB = (arg: A) => {
//     arg.methodA();
// };
// const bar: TakeB = (arg: B) => {
//     arg.methodB();
// };
// // const baz: TakeB = (arg: C) => {
// //     arg.methodC();
// // }
// // strictFunctionTypeをfalseにすれば警告は消えるけど、実行時のエラーが出るので未然に防ぐべき。
// foo(instanceOfB);
// // instanceOfB.methodAはクラスBはクラスAを継承してるから、methodAを実行することができる。
// bar(instanceOfB);
// // instanceOfB.methodBを実行する。
// // baz(instanceOfB);
// // これは、strictFunctionTypeをtrueにしてるから、割り当てができないようになってる。
// // 仮に実行できた（strictFunctionTypeをfalseにした）としても、クラスBはクラスCのメソッドを利用することができないので、
// // 実行時にエラーになる。
// // falseにしてるから、警告が出ない。あとでエラーに気づいてびっくりするやつになるから、まずい。
var func = function (arg) {
    // 引数はTakeBの型を取らないといけないから、argで渡る引数は引数をBの型（A, Bのどちらか）で返り値はなしの関数を定義する必要がある。
    var b = new B();
    arg(b);
};
var callMethodC = function (c) {
    c.methodC();
    // b.methodCになってBクラスにはmethodCはないので結果としてエラーになってしまう。
};
var callMethodB = function (b) {
    b.methodA();
};
// func(callMethodC);
// strictFunctionTypeをtrueにしてるから警告が出る。
func(callMethodB);
//# sourceMappingURL=main.js.map