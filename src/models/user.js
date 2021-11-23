/**
 * @author istiklal.gunes
 */

export default class User{
    constructor(id, firstName, lastName, city, age){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.age = age;
        this.requiredFields = ["id", "firstName", "lastName", "city", "age"];
        this.errors = [];
    }

    isValid() {
        let result = true;
        for (const key of this.requiredFields) {
            if (this[key]) {
                if (key==="age"&&Number.isNaN(Number.parseInt(+this[key]))) {
                    result = false;
                    this.errors.push("Age is not correct!")
                }
            }else{
                result = false;
                this.errors.push(`Required ${key} field is missing!`)
            }
        }
        return result;
    }

}