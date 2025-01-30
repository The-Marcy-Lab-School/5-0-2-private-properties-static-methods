/* 
* 
* This is good but it could be better. Let's add
* Lets see what happens if we try to access the password property.
* 
*/

// 1) public instance property
// 2) private instance property
// 3) public class property
// 4) private class property

// 1) public instance methods
// 2) private instance methods (not really common)
// 3) public class methods
// 4) private class methods (not really common)


class User {
  // private instance property (ben.#password)
  #password = null;

  // public class property (User.company)
  static company = "Marcy Lab School";

  // private class property (User.#allUsers)
  static #allUsers = []

  constructor(name, email) {
    // this is the new instance being created
    this.name = name;
    this.email = email;

    // in addition to setting the new instance's properties
    // add it to the User.allUsers array
    User.#allUsers.push(this);
  }

  // Why is getAllUsers a static method but setName is an instance method?

  // static method are invoked on the class itself
  // User.getAllUsers()
  static getAllUsers() {
    return [...User.#allUsers]
  }

  // instance method
  // ben.setName() or gonzalo.setName()
  setName(newName) {
    this.name = newName;
  }

  setPassword(newPassword) {
    // this refers to the instance the method is invoked on
    this.#password = newPassword;
  }

  validatePassword(passwordToCheck) {
    if (!this.#password) {
      console.log('No password set.');
      return false;
    }
    if (passwordToCheck === this.#password) {
      console.log('It matches!');
      return true;
    }
    console.log('Wrong password!');
    return false;
  }
}
// ben is an "instance" of the User class
const ben = new User('ben', 'ben@mail.com');
ben.validatePassword('1234'); // No password set.
ben.setPassword('1234');
ben.validatePassword('1234'); // It Matches!

const aj = new User('aj', 'aj@mail.com');
aj.setPassword('hey');
aj.validatePassword('hey');

const gonzalo = new User('gonzalo', 'gonzo@mail.com')


const usersCopy = User.getAllUsers()
usersCopy.push(null)
console.log(usersCopy)
console.log(User.getAllUsers())

User.getAllUsers().forEach(user => {
  console.log(user.name)
})
