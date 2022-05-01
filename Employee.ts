class Employee{
    private _firstname: string;
    private _lastname: string;
    private _birthday: string;
    private _address: string;
    private _job: string


    constructor(firstname: string, lastname: string, birthday: string, address: string, job: string) {
        this._firstname = firstname;
        this._lastname = lastname;
        this._birthday = new Date(birthday).toDateString();
        this._address = address;
        this._job = job;
    }

    get firstname(): string {
        return this._firstname;
    }

    set firstname(value: string) {
        this._firstname = value;
    }

    get lastname(): string {
        return this._lastname;
    }

    set lastname(value: string) {
        this._lastname = value;
    }

    get birthday(): string {
        return this._birthday;
    }

    set birthday(value: string) {
        this._birthday = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get job(): string {
        return this._job;
    }

    set job(value: string) {
        this._job = value;
    }

}

class EmployeeManager{
    static listEmployee : Employee[] = [];


    add(data: Employee){
        EmployeeManager.listEmployee.push(data)
    }
    delete(index){
        EmployeeManager.listEmployee.splice(index,1)
    }
    edit(employee: Employee,firstname:string,lastname:string,birthday:string,address:string,job:string){
        employee.firstname = firstname
        employee.lastname = lastname
        employee.birthday = birthday
        employee.address = address
        employee.job = job

    }
}
let Thu = new Employee(`Nguyen`,`Thu`,`1991,02,21`,`Hai Duong`,`Dev` );
let Huy = new Employee(`Nguyen`,`Huy`,`1991,02,22`,`Ha Noi`,`Dev` );
let Tuan = new Employee(`Ngo`,`Tuan`,`1991,02,23`,`Ha Noi`,`Dev` );

let employeeManagaer = new EmployeeManager()

employeeManagaer.add(Thu)
employeeManagaer.add(Huy)
employeeManagaer.add(Tuan)
console.log(EmployeeManager)
employeeManagaer.delete(1)
console.log(EmployeeManager)

employeeManagaer.edit(Thu,`dsad`,`dsad`,`dsad`,`dsad`,`dsad`)
console.log(EmployeeManager)
