import { movieTemplate } from "./template"

let movies = []
 
async function getMovieData(data) {
    const response = await fetch(data)
     = [ await response.json()]
        renderEmployee(employeeStore)
} 

getEmployeeData('/db/employees.json')
 

// Layout Thrashing
function renderEmployee (employees){
    // container is in memory
    // return elem is in memory
    const container = document.createElement('div')
    
       employees.forEach((employee)=>{
         container.append(employeeTemplate(employee))
       
       })

       document.querySelector('#cards').append(container)

}
