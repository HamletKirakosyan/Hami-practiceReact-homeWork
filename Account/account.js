class Account {
    constructor(id, name, balance) {
        this.name = name;
        this.id = id;
        this.balance = balance;
    }

    info() {
        return `${this.name} ${this.balance}`
    }

    get getFunc() {
        return `My name is ${this.name}, my id is ${this.id}, my current balance is ${this.balance}`
    }

    set setFunc(value) {
        [this.name, this.balance] = value.split(",")
    }

   
    credit(amount) {
        this.balance = +(this.balance) + amount;
        return this.balance;
    }
 
    debit(amount) {
        this.balance = +(this.balance) - amount;
        if(amount < this.balance) {
            return "Amount exceeded balance"
        } return this.balance;
    }

    transferTo(anotherAccount, amount) {
        this.balance = +(this.balance) - amount;
        anotherAccount.balance = +(anotherAccount.balance) + amount;
        if(amount < this.balance) {
            return "Amount exceeded balance"
        } return this.balance;
    }

    static identifyAccounts(accountFirst, accountSecond) { 
        if(accountFirst.id === accountSecond.id) {
            return true
        }return false
    }
 }

const account1 = new Account(1, "Hamlet", 5000000)
console.log(typeof account1.balance)

console.log(account1.name)
console.log(account1.getFunc)
console.log(account1.info())
console.log(typeof account1.balance)
account1.setFunc = "Karen, 8000000"
console.log(account1.info())

console.log(account1.credit(50000000)) 
console.log(account1.debit(50000000)) 



const account2 = new Account(2, "Gevorg", 0)
console.log(account2.balance)

console.log(account1.transferTo(account2, 6000000))
console.log(account2.balance)

const account3 = new Account(1, "Karen", 2000000)
console.log(account3)
