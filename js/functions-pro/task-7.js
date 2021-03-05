// Borrow Method - call/apply/bind. Создайте литерал объекта person со свойством name. 
// Вызовите метод work объекта employee из предыдущего задания.

const employee = {
    name: 'Ann',
    work() {
        console.log(`I am ${this.name}. I am working...`);
    },
};

employee.work();

const person = {
    name: 'Alex',
};

employee.work.bind(person)();
employee.work.call(person);
employee.work.apply(person);