
//document.getElementById("").addEventListener("click", myfunction);
function addRow(){
   let table= document.getElementById("table");
   let row=table.insertRow(0);
   let cell=row.insertCell(0);
}
function delRow(){
    let table=document.getElementById("table");
    let row=table.deleteRow(0);
    let cell=row.deleteCell(0);
}
function addColumn(){
    let table=document.getElementById("table");
    let column=table.addColumn(0);
    let cell=column.deleteCell(0)
}
function delColumn(){
    let table=document.getElementById("table");
    let column=table.deleteColumn(0);
    let cell=column.deleteCell(0)
}

function changeColor(){
    let select=document.getElementById("choice").value;
    document.getElementById("box").style.backgroundColor=select;
}

//fill all uncolored cells with the currently selected color
function fillAll(){
   // let fillColor=document.getElementById("choice").value;
   let select=document.getElementById("choice").value;
   document.getElementById("tbody").style.background=select;

}

function fillEmpty(){

}

function clearAll(){

}




