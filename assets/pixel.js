
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
// function addColumn(){
//     let colNum=0;
//     let rows=document.querySelector('#'+'table'+'tr');
//     for(let i=0;i<rows.clientHeight;i++){
//         let c=document.createElement('td');
//         rows[i].appendChild(c);
//     }
// colNum++
//     // let table=document.getElementById("table");
//     // let column=table.addColumn(0);
//     // let cell=column.deleteCell(0)
// }
function delColumn(){
    let table=document.getElementById("table");
    let column=table.deleteColumn(0);
    let cell=column.deleteCell(0);
}

function changeColor(){
    let select=document.getElementById("choice").value;
    var x= document.getElementsByTagName("TR");

   
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
    let select=document.getElementById("white").value;
    document.getElementById("tbody").style.background=select;
}




