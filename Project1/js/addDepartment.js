export function addDepartment()
{
    if(documentMode=="add"){

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
        resetDept();

    }
}