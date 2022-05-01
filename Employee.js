var Employee = /** @class */ (function () {
    function Employee(firstname, lastname, birthday, address, job) {
        this._firstname = firstname;
        this._lastname = lastname;
        this._birthday = new Date(birthday).toDateString();
        this._address = address;
        this._job = job;
    }
    Object.defineProperty(Employee.prototype, "firstname", {
        get: function () {
            return this._firstname;
        },
        set: function (value) {
            this._firstname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "lastname", {
        get: function () {
            return this._lastname;
        },
        set: function (value) {
            this._lastname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "birthday", {
        get: function () {
            return this._birthday;
        },
        set: function (value) {
            this._birthday = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "job", {
        get: function () {
            return this._job;
        },
        set: function (value) {
            this._job = value;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
    }
    EmployeeManager.prototype.add = function (data) {
        EmployeeManager.listEmployee.push(data);
    };
    EmployeeManager.prototype.delete = function (index) {
        EmployeeManager.listEmployee.splice(index, 1);
    };
    EmployeeManager.prototype.edit = function (employee, firstname, lastname, birthday, address, job) {
        employee.firstname = firstname;
        employee.lastname = lastname;
        employee.birthday = birthday;
        employee.address = address;
        employee.job = job;
    };
    EmployeeManager.listEmployee = [];
    return EmployeeManager;
}());
var Thu = new Employee("Nguyen", "Thu", "1991,02,21", "Hai Duong", "Dev");
var Huy = new Employee("Nguyen", "Huy", "1991,02,22", "Ha Noi", "Dev");
var Tuan = new Employee("Ngo", "Tuan", "1991,02,23", "Ha Noi", "Dev");
var employeeManagaer = new EmployeeManager();
employeeManagaer.add(Thu);
employeeManagaer.add(Huy);
employeeManagaer.add(Tuan);
console.log(EmployeeManager);
employeeManagaer.delete(1);
console.log(EmployeeManager);
employeeManagaer.edit(Thu, "dsad", "dsad", "dsad", "dsad", "dsad");
console.log(EmployeeManager);
