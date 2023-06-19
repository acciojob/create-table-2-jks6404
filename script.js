function createTable() {
    //Write your code here
  let rows=prompt('Input number of rows');
  let columns=prompt('Input number of columns');
  let table=document.getElementById('myTable');
	table.innerHTML="";
 for(let i=0;i<rows;i++){
	 let row=document.createElement('tr');
	 for(let j=0;j<columns;j++){
		let col=document.createElement('td');
		 col.innerText=`Row-${i} Column-${j}`;
		 row.append(col);
	 }
	 table.append(row);
 }
	
}