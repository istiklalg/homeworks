/**
 * @author istiklal.gunes
 */

import User from "../models/user.js";
import Customer from "../models/customer.js";
import UserService from "../services/userService.js";

console.log("User component loaded ...");

let user1 = new User(1, "istiklal", "Güneş", "Ankara");
console.log(user1.isValid());
let user2 = new User(2, "Deniz", "Çuhadar", "Ankara");

let userService = new UserService();

userService.add(user1);
userService.add(user2);

console.log(user2.isValid())

console.log("User with id 1 : ");
let userId_1 = userService.getById(1);
console.log(userId_1);
// console.log(userId_1.isValid());

console.log("User with id 2 : ");
console.log(userService.getById(2));

userService.add(new Customer(13, "Ali", "Veli", "İstanbul", 36));

console.log("List Of Customers : ");
console.log(userService.customers);
console.log("List Of Employees : ");
console.log(userService.employees);
console.log("List Of Errors");
console.log(userService.errors);
console.log("Customers sorted by first name");
console.log(userService.getCustomersSorted("fistName"));