class University{
  constructor(universityName){
    this.universityName = universityName;
    this.departments = [];
  }

  
  addDepartment(department){
    this.departments.push(department);
    console.log(`${department} added under ${this.universityName}`);
  }

  removeDepartment(department){
    const index = this.departments.indexOf(department);
    if(index !== -1){
      this.departments.splice(index, 1);
      console.log(this.departments);
    }else{
      console.log('No department found');
    }
  }

  displayDepartments(){
    console.log(this.departments);
  }
}

const loyola = new University('Loyola University');
const depaul = new University('Depaul University');
loyola.addDepartment('CS');
loyola.addDepartment('IT');
loyola.addDepartment('CyberSecurity');
console.log(loyola)
loyola.displayDepartments();
loyola.removeDepartment('IT')
console.log(loyola)
