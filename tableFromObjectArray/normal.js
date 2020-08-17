let myTable = document.querySelector("#mountains");

const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

  let headers = ["Name", "Height", "Place"];
  let table = document.createElement('table');
  let headerRow = document.createElement('tr');

  headers.forEach(val => {
      let col = document.createElement('th');
      let headerContent = document.createTextNode(val);
      col.appendChild(headerContent);
      headerRow.appendChild(col);
  });
  table.appendChild(headerRow);

  MOUNTAINS.forEach(entry =>{
      let row = document.createElement('tr');
      Object.values(entry).forEach(value =>{
          let cell = document.createElement('td');
          let cellText = document.createTextNode(value);
          cell.appendChild(cellText);
          row.appendChild(cell);
      })
      
      table.appendChild(row);
  })

  myTable.appendChild(table);
