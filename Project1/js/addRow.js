 export function addRow()
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