const { Employee } = require("./Employee")

class Manager extends Employee{

    #employeesManaged = []
    constructor(name, position, salary, department){
        
        super(name, position, salary)
        this.department = department
    }

    setEmployeesManaged(employee){
        this.#employeesManaged.push(employee)
    }

    getEmployeesManaged(){
        return this.#employeesManaged
    }
    
}

module.exports = {
    Manager,
}