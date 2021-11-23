/**
 * @author istiklal.gunes
 */

import User from "./user.js";


export default class Employee extends User{
    constructor(id, firstName, lastName, city, age, salary){
        super(id, firstName, lastName, city, age);
        this.salary = salary;
        this.requiredFields.push("salary");
        this.type = "employee";
    }

    isValid() {
        let result = super.isValid();
        if (!this.salary || Number.isNaN(Number.parseInt(+this.salary))) {
            result = false;
            this.errors.push("Salary missing or invalid number !");    
        }
        return result;
    }
}