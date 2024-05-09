//Write a “person” class to hold all the details.

  class Person {
    constructor(firstname,lastname,DOB,age,city,country,email){
      this.firstname = firstname;
      this.lastname = lastname;
      this.DOB = DOB;
      this.age =  age;
      this.city = city;
      this.country = country;
      this.email = email;
    }
  }
  var p1 = new Person("John","Doe", "01/01/2009", 15, "Bangalore", "India", "john@mail.com");
  console.log(p1);





