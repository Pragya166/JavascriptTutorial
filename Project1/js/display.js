export default function display(Departments)
{
let html='';
  Departments.forEach(function(depart,index){
    html+=`<tr>
        <td>
            `+
            empDisplay(Employee,depart.Dcode)
            +`
            </td>
        <td>${depart.Dname}</td>
        <td>${depart.Dcode}</td>
        
        <td>
            <button type="button" onclick="onEdit (${index})">Edit</button>
            <button type="button" onclick="onDelete(${index})">Delete</button>
            </td>
            </tr>
            `;
  });
  document.getElementById('tbody').innerHTML=html;  
}
