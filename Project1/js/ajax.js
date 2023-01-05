console.log("Hello world");
let btnFetch=document.getElementById('btnFetch');
btnFetch.addEventListener('click',buttonClickHandler);
let popBtn=document.getElementById('popBtn');
popBtn.addEventListener('click',popClickHandler);

function buttonClickHandler()
{
    console.log("you have clicked the fetch button");
    //instantiate xhr obj
    const xhr=new XMLHttpRequest();
   // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',false);
   xhr.open('POST','https://dummy.restapiexample.com/api/v1/create',true);
   xhr.getResponseHeader('Content-type','application/json');
    xhr.onprogress=function(){
        console.log("On Progress");
    }
    xhr.onreadystatechange=function(){
        console.log("the ready state is",xhr.readyState);
    }
    xhr.onload=function()
    {
        if(this.status===200)
        console.log(this.responseText);
        else
        console.error("Some error occured");
    }
    params=`{"name":"asdfg","salary":"1040","age":"18"}`;
    xhr.send(params);
    console.log("We're done.")

}
function popClickHandler()
{
    console.log("you have clicked the fetch button");
    //instantiate xhr obj
    const xhr=new XMLHttpRequest();
    xhr.open('GET','https://dummy.restapiexample.com/api/v1/employees',true);
   //xhr.open('POST','https://dummy.restapiexample.com/api/v1/create',true);
  // xhr.getResponseHeader('Content-type','application/json');
    // xhr.onprogress=function(){
    //     console.log("On Progress");
    // }
    // xhr.onreadystatechange=function(){
    //     console.log("the ready state is",xhr.readyState);
    // }
    xhr.onload=function()
    {
        if(this.status===200)
        {
            let obj=JSON.parse(this.responseText);
            console.log(obj);
        }
        
        else
        console.error("Some error occured");
    }
    
    xhr.send();
    console.log("We're done.")

}