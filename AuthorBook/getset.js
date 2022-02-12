class Author {
    constructor(name, email, gender) {
        this.name = name;
        this.email = email;
        this.gender = gender;
    }

    toString() {
        return `My name is ${this.name}, my email is ${this.name}@gmail.com, I am a ${this.gender}`
    }

    get getFunc() {
        return this.email = this.name + "@gmail.com";
    }

    set setFunc(value) {
        [this.name, this.email, this.gender] = value.split(",")
        return value;

        //console.log(value.split(","))
    }

}

const author1 = new Author('Arthur', "", 'man')
console.log(author1.name)
console.log(author1.gender)
console.log(author1.email)

console.log(author1.toString())

console.log(author1.getFunc)

author1.name = "Linda";
author1.email = "";
author1.gender = "women";

console.log(author1.name)
console.log(author1.gender)
console.log(author1.email)

author1.setFunc = "Lina, '', women"
console.log(author1.name)
console.log(author1.gender)
console.log(author1.email)

class Book extends Author {
    constructor(name, title, price, quantity) {
        super(name);
        this.title = title;
        this.price = price;
        //this.author = author;
        this.quantity = quantity;
    }

    getAuthor() {
        return this.name + " write " + this.title;
    }


    getProfit() {
        console.log(this.price * this.quantity)
    }

    toString() {
        console.log(`My author is ${this.name}`)
    }

    get getFunc() {
        return this.price += this.price * 0.1
    }

    set setFunc(value) {
        this.price = value;
    }

}

const myBook = new Book(author1.name, "Amazon", 5000, 5)

console.log(myBook.getAuthor())
console.log(myBook.name);
myBook.getProfit();
myBook.toString();
console.log(myBook.getFunc)
console.log(myBook.getFunc)
console.log(myBook.getFunc)