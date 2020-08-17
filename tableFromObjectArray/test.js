//retardiran approach
const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];
  let name = MOUNTAINS.map(a => a.name);
  let height = MOUNTAINS.map(a =>a.height);
  let place = MOUNTAINS.map(a => a.place);
  console.log(place);
  var headers = ["Name", "Height", "Place"];

  // Draw HTML table
  var perrow = 3, // 3 cells per row
      count = 0, // Flag for current cell
      table = document.createElement("table"),
      row = table.insertRow();

  for (var i = 0; i<7; i++) {
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    cell1.innerHTML = name[i];
    cell2.innerHTML = height[i];
    cell3.innerHTML = place[i];

    count = count+3;
    if (count%perrow==0) {
      row = table.insertRow();
    }
  }

  
  // Attach table to container
  document.getElementById("mountains").appendChild(table);