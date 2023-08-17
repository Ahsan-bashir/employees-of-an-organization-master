 
   // Define a getEmployee function that iterates over the employees list and displays it
   // Employees must be displayed after a timeout of 1 second.
   getEmployee = (employees,callback)=> {
       setTimeout(() => {   
        let empNames=employees.map(emp=>emp.name)
           return callback(undefined,empNames);           
       },1000);
   }
   
   // Define a function that creates a new employee after 2 seconds.
   // and then makes a call to callback function to display the same.
   createEmployee = (employees,employee, callback) => {   
       setTimeout(()=>
       {
           employees.push(employee)           
           return callback(undefined,employees);
       },2000)
   }  

   module.exports = {getEmployee,createEmployee}
  


