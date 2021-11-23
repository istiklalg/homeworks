/**
 * @author istiklal.gunes
 */

import { users } from "../data/usersData.js";
import Customer from "../models/customer.js";
import Employee from "../models/employee.js";
import User from "../models/user.js";

export default class UserService{
    constructor(){
        this.users = users;
        this.employees = [];
        this.customers = [];
        this.errors = [];
        this.load();
    }

    load(){
        for (const element of this.users) {
            this.addSuitablePlace(element);
        }
    }

    add(user) {
        this.addSuitablePlace(user);
    }

    getById(id) {
        let userJson = this.users.find(user => user.id == id);
        let user;
        switch (userJson.type) {
            case "customer":
                user = new Customer(userJson.id, userJson.firstName, userJson.lastName, userJson.city, userJson.age, userJson.creditCardNumber);
                break;
            case "employee":
                user = new Employee(uuserJsonser.id, userJson.firstName, userJson.lastName, userJson.city, userJson.age, userJson.salary);
                break;
            default:
                user = {message:"Type missmatch!", data: new User(userJson.id, userJson.firstName, userJson.lastName, userJson.city, userJson.age)}
                break;
        }
        return user;
    }

    getCustomersSorted(sortByField) {
        let resultList = []
        try {
            resultList = this.customers.sort((customer1, customer2) => {
                if (customer1[sortByField] > customer2[sortByField]) {
                    return 1;
                } else {
                    return -1;
                }
            });
        } catch (error) {
            console.log(`Some error occurred while trying to sort customers. Error is : ${error}`);
        }
        return resultList;
    }

    addSuitablePlace(user) {
        let instance;
        if (user.errors && user.errors.length > 0) {
            this.errors.push({message:user.errors.join(", "), data:user});
        }else {
            switch (user.type) {
                case "customer":
                    instance = new Customer(user.id, user.firstName, user.lastName, user.city, user.age, user.creditCardNumber);
                    if(instance.isValid()){this.customers.push(instance);}else{this.errors.push({message:instance.errors.join(", "), data:instance});}
                    break;
                case "employee":
                    instance = new Employee(user.id, user.firstName, user.lastName, user.city, user.age, user.salary);
                    if(instance.isValid()){this.employees.push(instance);}else{this.errors.push({message:instance.errors.join(", "), data:instance});}
                    break;
                default:
                    this.errors.push({message:"Wrong type of user !", data:user});
                    break;
            }
        }
        
    }
}