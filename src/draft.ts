class Animal {
    constructor(public name: string) {
        this.name = name
    }
}
class Cat extends Animal {
    meow(): void {
        console.log('meow');
    }
}

let animal = new Animal("animal");
let cat = new Cat("cat");

animal = cat;
// クラスの互換性の場合は、必要以上に満たしてもいい。
// nameがcatに変わっただけで、メソッドが追加されたわけではない。
// 足りない場合は、警告が出る。
// cat = animal;
// catには、meowメソッドが必要になるので、Animalのインスタンスは互換性がない。

let animalArr: Animal[] = [animal];
let catArr: Cat[] = [cat];
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