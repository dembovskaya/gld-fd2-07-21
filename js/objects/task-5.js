// Создать функцию-конструктор Person() для конструирования объектов. Добавить два метода: setFirstName() и setLastName().
// Методы должны вызываться в цепочке, например obj.setFirstName(...).setLastName(...)

function Person(firstName, lastName) {
    this.setFirstName = function() {
        this.FirstName = firstName;
        return this;
    };
    
    this.setLastName = function() {
        this.LastName = lastName;
        return this;
    }
}

const user = new Person('Ivan', 'Ivanov');

console.log(user.setFirstName().setLastName());

