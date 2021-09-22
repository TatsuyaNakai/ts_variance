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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
        this.name = name;
    }
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.meow = function () {
        console.log('meow');
    };
    return Cat;
}(Animal));
var animal = new Animal("animal");
var cat = new Cat("cat");
animal = cat;
// クラスの互換性の場合は、必要以上に満たしてもいい。
// nameがcatに変わっただけで、メソッドが追加されたわけではない。
// 足りない場合は、警告が出る。
// cat = animal;
// catには、meowメソッドが必要になるので、Animalのインスタンスは互換性がない。
var animalArr = [animal];
var catArr = [cat];
// それぞれの型を配列で入れていく箱を作った。
// catArr = animalArr;
// catArrにはCatの属性を持ったものしか配列に入れないので、animalは属性が足りてないので、互換性がない。
catArr[0].meow();
// これはできる。というか当たり前にできる。catのインスタンスは全てmeowを持ってる。
// animalArr[0].meow();
// これはできない。あくまで名前だけすり替わっただけで、メソッドまでコピーされてない。
console.log(catArr);
console.log(animalArr);
animalArr = catArr;
// クラスの互換性は属性が多くても問題はない。少ないと互換性がなくて警告が出る。
// ここで、catArrがanimalArrと同期してる。
// なんで、、
animalArr.push(new Animal('another animal'));
// 配列に新しいAnimalインスタンスを追加した。
// でも、ここがなぜかcatArrにもnew Animalを追加してる。
console.log(catArr);
console.log(animalArr);
// catArr.forEach(c => c.meow());
// 配列のそれぞれの要素に対して、それぞれをcと置いて、meowを実行する。
//# sourceMappingURL=draft.js.map