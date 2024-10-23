class Employee {
    #salary
    #position
    
    static #allEmployees = []
    
    static getEmployees(){
        return this.#allEmployees
    }

    static getTotalPayroll(){
        let total = 0
        for (let i = 0; i < this.#allEmployees.length; i++){
            total += this.#allEmployees[i].getSalary()
        }
        return total
    }

    constructor(name, position, salary) {
        this.name = name; // Public property
        this.#position = position; // Private property
        this.#salary = salary; // Private property
        this.isHired = true; // Public property
        Employee.#allEmployees.push(this);
    }

    getSalary() {
        return this.#salary
    }

   // setSalary(amount) {                          //this was my original idea but i think it wants a more simple just change it to whatever number is entered
     //   if (amount >= 0){
       //     this.salary = amount + this.salary
        //} else {
        //    this.salary = this.salary - amount
       // }
    //}

    setSalary(amount){
        this.#salary = amount
    }

    getStatus() {
        return this.isHired
    }

    setStatus(command) {
        if (command == 'hire'){
            this.isHired = true
        } else {
            this.isHired = false
        }

    }

    
}

module.exports = {
    Employee,
}
