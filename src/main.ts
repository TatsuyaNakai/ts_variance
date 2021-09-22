class A {
    methodA() {
        console.log("A")
    }
}
class B extends A {
    methodB() {
        console.log("B")
    }
}
class C extends B {
    methodC() {
        console.log("C")
    }
}

const instanceOfA = new A();
const instanceOfB = new B();

type TakeB = (arg: B) => void;

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

const func = (arg: TakeB) => {
    // 引数はTakeBの型を取らないといけないから、argで渡る引数は引数をBの型（A, Bのどちらか）で返り値はなしの関数を定義する必要がある。
    const b = new B();
    arg(b);
}
const callMethodC = (c: C) => {
    c.methodC();
    // b.methodCになってBクラスにはmethodCはないので結果としてエラーになってしまう。
};
const callMethodB = (b: B) => {
    b.methodA();
}

// func(callMethodC);
// strictFunctionTypeをtrueにしてるから警告が出る。
func(callMethodB);