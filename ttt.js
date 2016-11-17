var row =['E','E','E']
var gameBoard = [row.slice(),row.slice(),row.slice()]
var cells = Array.from(document.getElementsByTagName('cell'));
console.log(cells);
cells.forEach(function(cell){
  cell.onclick = function(){
    console.log(cell.id);
    cell.innerHTML = 'X'
  }
})
