/*
Name: Topgyal Gurung and Anupam Das
Course: TTP Residency Summer 2019
Assignment 4
References: MDN Mozilla and w3schools.com

*/

//document.getElementById("").addEventListener("click", myfunction);
//to keep track of no of rows and columns
let rowNum=0;
let colNum=1;
//initialize the table
let pixelGrid = document.getElementById("grid");

//function to add rows
function addRow(){
    //store table id into table variable 
    let rows= document.createElement("tr");

    //add clickable columns to rows
    for(let i = 0; i < colNum; i++){
        let columns = document.createElement("td");
        columns.addEventListener("click",colorGrid);
        rows.appendChild(columns);
    }

    //add rows to the grid
    pixelGrid.appendChild(rows);
    rowNum++;
 
  
}

//function to delete rows
function delRow(){
    //delete child of the rows
    pixelGrid.removeChild(pixelGrid.lastChild);
    rowNum--;
}
//add column function 
function addColumn () {
    //add columns to the rows
    rows = pixelGrid.children;
	for (let i = 0; i <rows.length; i++) {
        let columns = document.createElement('td'); //create td element
        columns.addEventListener("click",colorGrid);
		rows[i].appendChild(columns);
	}
	colNum++;
}

function colorGrid(){
    let select=document.getElementById("choice").value;
    this.style.backgroundColor = select;
}
//does not work need to fix
function delColumn(){
    rows = Array.from(pixelGrid.children);

    rows.forEach(function(row) {
        row.removeChild(row.lastChild);
      });
	colNum--;
}

// fill all cells with selected color
function fillAll(){
    //store the selected color value into select variable
   let select=document.getElementById("choice").value;
   //change background of tbody with select color
   for(let i = 0; i < rowNum; i++){ 
      document.getElementsByTagName("tr")[i].style.background=select;
   }
}
// fill all empty cells with selected color
function fillEmpty(){
    let select=document.getElementById("choice").value;
    for(let i = 0; i < rowNum; i++){ 
        if (document.getElementsByTagName("tr")[i].style.background===""){
            document.getElementsByTagName("tr")[i].style.background=select;
        }
     }
}
//clear all cells with default color
function clearAll(){
    //store color white into select to use as default color to clear cell's color
    //let select=document.getElementById("white").value;
    for(let i = 0; i < rowNum; i++){
        document.getElementsByTagName("tr")[i].style.background="";
    }
}


