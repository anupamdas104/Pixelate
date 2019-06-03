/*
Name: Topgyal Gurung and Anupam Das
Course: TTP Residency Summer 2019
Assignment 4
References: MDN Mozilla and w3schools.com

*/

//document.getElementById("").addEventListener("click", myfunction);
//to keep track of no of rows and columns
let rowNum=0;
let colNum=0;

//function to add rows
function addRow(){
    //store table id into table variable 
    let table= document.getElementById("table");
    let row=table.insertRow(0);  //append row at the end of table
    let cell=row.insertCell(0); 
  
}
//function to delete rows
function delRow(){
    let table=document.getElementById("table");
    let row=table.deleteRow(0);
    let cell=row.deleteCell(0);
}
//add column function 
function addColumn () {
    //when no column then add row
    if(colNum==0){  
        addRow();
    } 
    //get all elements that matches the selector
	let rows = document.querySelectorAll('#' + 'table' +' tr');
	for (let i = 0; i <rows.length; i++) {
		let c = document.createElement('td'); //create td element
		rows[i].appendChild(c);
	}
	colNum++;
}
//does not work need to fix
function delColumn(){
    let table=document.getElementById("table");
    let column=table.deleteColumn(0);
    let cell=column.deleteCell(0);
}
// fill all cells with selected color
function fillAll(){
    //store the selected color value into select variable
   let select=document.getElementById("choice").value;
   //change background of tbody with select color 
   document.getElementById("tbody").style.background=select;
}
// fill all empty cells with selected color
function fillEmpty(){
}
//clear all cells with default color
function clearAll(){
    //store color white into select to use as default color to clear cell's color
    let select=document.getElementById("white").value;
    document.getElementById("tbody").style.background=select;
}


