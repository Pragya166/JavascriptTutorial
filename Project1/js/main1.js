let Departments=[];
let Employee=[];
let documentMode="add";
let EmployeeMode='add';
let ElIndex=null;
let empIndex=null;

 function addDepartment()
 {
     if(documentMode=="add")
     {
      addRow();  
     }
     else if(documentMode=="edit")
     {
         var dname=document.getElementById('Dname').value;
         var dcode=document.getElementById('Dcode').value;
        let depart={
             Dname:dname,
             Dcode:dcode 
         }
         Departments[ElIndex]=depart;
         dropdowns();
         display(Departments);
         document.getElementById('addDept').value="Add";
         documentMode='add';
         resetDept()
     }
 }


 function addRow()
 {
     var dname=document.getElementById('Dname').value;
     var dcode=document.getElementById('Dcode').value;
    let depart={
         Dname:dname,
         Dcode:dcode
     }
     Departments.push(depart);
     dropdowns();  
 display(Departments);
 resetDept();
 }
function dropdowns()
{
    var selectitem=document.getElementById("departmentlist");
  let options="";
Departments.forEach(function(item)
{
options+=`<option value="${item.Dcode}">${item.Dname}</option>`;
});
selectitem.innerHTML=options;
}
 function display(Departments)
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
function onDelete(id)
{
   if(confirm("Do you want to delete all the employees"));
   {
   
    let code=Departments[id].Dcode;
    let arr=[];
    
    for(i=0;i<=Employee.length;i++)
    {
     Employee.forEach(function(item,index){
       if(code==item.Dcode)
        {
            Employee.splice(index,1);
        }
        
    });
    }
   Departments.splice(id,1);
   display(Departments);
   }
  
}
function onEdit(id)
{
    
    let currentData=Departments[id];
    document.getElementById('addDept').value="Update";
    documentMode='edit';
    document.getElementById('Dname').value=currentData.Dname;
    document.getElementById('Dcode').value=currentData.Dcode;
    ElIndex=id;
    
}
function OnSubmit()
        {
            if(EmployeeMode=='add')
            {
            addEmp();       
             }
    else if(EmployeeMode=='edit')
    {
        var Ename=document.getElementById('fullname').value;
        var Eaddress=document.getElementById('address').value;
        var Ephone=document.getElementById('phone').value;
        var selectEl=document.getElementById('departmentlist');
        let deptValue=selectEl.value;
       

        let emp={
            Name:Ename,
            Address:Eaddress,
            Phone:Ephone,
            Dcode:deptValue
        }
        Employee[empIndex]=emp;
        display(Departments);
        document.getElementById('empbtn').value="Add";
        EmployeeMode='add';
        resetEmp();
    }
       //empDisplay(Employee,Dc);

        }
function addEmp()
        {
            
        var Ename=document.getElementById('fullname').value;
        var Eaddress=document.getElementById('address').value;
        var Ephone=document.getElementById('phone').value;
        var selectEl=document.getElementById('departmentlist');
        let deptValue=selectEl.value;
       

        let emp={
            Name:Ename,
            Address:Eaddress,
            Phone:Ephone,
            Dcode:deptValue
        }
       
         Employee.push(emp);
         display(Departments);
         resetEmp();
        }
function empDisplay(Employee,Dcode)
       {
       
        let td='<table>';
       
        Employee.forEach(function(item,index){
            if(item.Dcode==Dcode)
            td+=`
            <tr>
                <td>${item.Name}</td>
                <td>${item.Address}</td>
                <td>${item.Phone}</td>
                <td> <button type="button" id="eEditBtn" onclick="empEdit(${index})">Edit</button>
                    <button type="button" onclick="empDelete(${index})">Delete</button></td><tr>`;
       });
       td+='</table>';
     return td;
        }
function empDelete(id)
        {
            Employee.splice(id,1);
            display(Departments);
        }
function empEdit(id)
        {
            EmployeeMode='edit';
            let currentData=Employee[id];
            document.getElementById('empbtn').value="Update";
            document.getElementById('fullname').value=currentData.Name;
            document.getElementById('address').value=currentData.Address;
            document.getElementById('phone').value=currentData.Phone;
            document.getElementById('departmentlist').value=currentData.Dcode;
            empIndex=id;


        }
function resetDept()
{
    document.getElementById('Dname').value="";
    document.getElementById('Dcode').value="";
}
function resetEmp()
{
    document.getElementById('fullname').value="";
    document.getElementById('address').value="";
    document.getElementById('phone').value="";
    document.getElementById('departmentlist').value="";
    
}