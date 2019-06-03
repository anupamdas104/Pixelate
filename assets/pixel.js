
//document.getElementById("").addEventListener("click", myfunction);
let rowNum=0;
let colNum=0;

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
function addColumn () {
    if(colNum==0){
        addRow();
    } 

	let rows = document.querySelectorAll('#' + 'table' +' tr');
	for (let i = 0; i <rows.length; i++) {
		let c = document.createElement('td');
		rows[i].appendChild(c);
	}
	colNum++;
}
function delColumn(){
 
    let table=document.getElementById("table");
    let column=table.deleteColumn(0);
    let cell=column.deleteCell(0);
}

function fillAll(){
   let select=document.getElementById("choice").value;
   document.getElementById("tbody").style.background=select;

}

function fillEmpty(){

}

function clearAll(){
    let select=document.getElementById("white").value;
    document.getElementById("tbody").style.background=select;
}


