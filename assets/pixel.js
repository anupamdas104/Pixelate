
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
//     // let rows=document.querySelectorAll('#'+'table'+'tr');
//    let table=document.getElementById("tr");
//     let column=table.addColumn(0);
//     let cell=column.addCell(0)
// }
let colNum=0;
function addColumn () {
    if(colNum==0){
        addRow();
    } 
    //addRow();
	let rows = document.querySelectorAll('#' + 'table' +' tr');
	for (let i = 0; i <rows.length; i++) {
		let c = document.createElement('td');
		//makeClickable(c);
		rows[i].appendChild(c);
	}
	colNum++;

}
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

let makeClickable=function(e){
    e.props={
        cliked:false
    };
    e.onclick=function(){
        if(e.props.clicked==false){
            e.style.backgroundColor=choice;
        }else{
            e.style.backgroundColor="white";
        }
    }
}


