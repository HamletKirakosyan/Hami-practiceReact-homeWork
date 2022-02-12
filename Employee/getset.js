class Employee {
    constructor(id, firstName, lastName, position, salary, workingHours, arr) {
        this.id = id;
        this.name = firstName;
        this.surname = lastName;
        this.position = position;
        this.salary = salary;
        this.workingHours = workingHours;
        this.arr = arr;
    }

    totalSalary(arr) {
        let salaryList = arr
        let sum = salaryList.reduce((aggr, val) => {
            return aggr + val;
        }, 0)
        return sum;

    }

    get fullName() {
        return `${this.name} ${this.surname}`;
    }

    get annularSalary() {
        return `${this.totalSalary()}`;
    }

     set changeFullName(newName) {
        [this.name, this.surname] = newName.split(" ");
        return newName;
    } 
}
const user1 = new Employee(1, "John", "Doe", "maneger", "1000", "9");
console.log(user1.fullName)

console.log(user1.totalSalary([100, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 150]));

arr = [300, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 150]
console.log(user1.totalSalary(arr))


user1.changeFullName = "Jane Smith";
console.log(user1.name, user1.surname)

