class Gnarly {
  constructor(category, name, points, description, other) {
    this.category = category;
    this.name = name;
    this.points = points;
    this.description = description;
    this.other = other;
  }
}

localStorage = window.localStorage;

M.AutoInit();
document.addEventListener('DOMContentLoaded', function() {

  loadEventListeners();
  startup();
  build();
  updateCollectedGnarlies();

  M.Collapsible.init(document.querySelectorAll('.collapsible'), []);
  M.Modal.init(document.querySelectorAll('.modal'), []);
});

function startup() {
  if(localStorage.getItem('gnarliesSource') === null) {
    fetch('https://joshwa-moellenkamp.github.io/GNAR/source.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      localStorage.setItem('gnarliesSource', JSON.stringify(json));
    })
    .catch(function() {
      // TODO
    });
  }
}

let gnarlies = [];
let earnedGnarlies = new Map();
let score = 0;
const gnarlyTable = document.getElementById('gnarlies');
const collectedGnarlies = document.getElementById('collectedGnarlies');
const pointValue = document.getElementById('points');
const filter = document.querySelector('#filter');
const collection = document.querySelector('.collection');

function build() {
  gnarliesSource = JSON.parse(localStorage.getItem('gnarliesSource'));
  
  let id = 0;
  const ul = document.createElement("ul");
  ul.className = "collapsible";
  for(var category in gnarliesSource) {
    const li = document.createElement("li");
    const divHeader = document.createElement("div")
    divHeader.className = "collapsible-header";
    divHeader.innerHTML = category
      .toLowerCase()
      .split(' ')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');
    li.appendChild(divHeader);
    const table = makeGnarlyTable();
    const tbody = document.createElement("tbody");

    for(item in gnarliesSource[category]) {
      var value = gnarliesSource[category][item];
      gnarlies.push(new Gnarly(category, value.name, value.points, value.description, value.other));
      const tr = generateTableItem(id);
      tbody.appendChild(tr);
      id += 1; // TODO keep track of these better
    }
    table.appendChild(tbody);

    const divBody = document.createElement("div");
    divBody.className = "collapsible-body";
    const span = document.createElement("span");
    span.appendChild(table);
    divBody.appendChild(span);
    li.appendChild(divBody);
    ul.appendChild(li);
  }

  gnarlyTable.appendChild(ul);
}

function loadEventListeners() {
  filter.addEventListener('keyup', filterTasks);
}

function tally(id) {
  let g = gnarlies[id];
  let msg;
  switch(g.category) {
    case "line":
      msg = `Did you claim ${g.description} line '${g.name}'?`;
      break;
    case "penalty":
      msg = `Do you deserve penalty '${g.name.split(':')[1].trim()}' because you '${g.description}'?`;
      break;
    case "trick bonus":
      msg = `Did you earn trick bonus '${g.name}'?`;
      break;
    case "extra credit (unlimited)":
    case "extra credit (yearly)":
    case "extra credit (daily)":
      msg = `Did you earn extra credit item '${g.name.split(':')[1].trim()}'?`;
      break;
  }
  if(confirm(msg)) {
    updateScore(g.points);
  }
}

function updateCollectedGnarlies() {
  if(earnedGnarlies.length === 0)
  {
    collectedGnarlies.innerHTML = "None so far";
    return;
  }
  collectedGnarlies.innerHTML = "";
  const list = document.createElement("ul");
  list.className = "collection";
  for (var [key, value] of earnedGnarlies) {
    const listItem = document.createElement('li');
    listItem.className = "collection-item";
    listItem.innerHTML = `${key.name}<a class=\"secondary-content\">x${value}</a>`;
    list.appendChild(listItem);
  }
  collectedGnarlies.appendChild(list);
}

function processGnarly(id) {
  if(!earnedGnarlies.has(gnarlies[id])){
    earnedGnarlies.set(gnarlies[id], 1)
  } else {
    const numTimesEarned = earnedGnarlies.get(gnarlies[id]);
    earnedGnarlies.set(gnarlies[id], numTimesEarned + 1);
  }
  updateCollectedGnarlies();
  const itemPoints = gnarlies[id].points;
  score += itemPoints;
  points.innerHTML = `GNAR Factor: ${score}`;
}

function generateTableItem(id) {
  const g = gnarlies[id];
  const thGnarly = document.createElement('td');
  thGnarly.appendChild(document.createTextNode(g.name));

  const thPoints = document.createElement('td');
  thPoints.appendChild(document.createTextNode(g.points));

  const thCategory = document.createElement('td');
  thCategory.appendChild(document.createTextNode(g.category));

  const thDescription = document.createElement('td');
  if(g.description != undefined) {
    thDescription.appendChild(document.createTextNode(g.description));
  }

  const thCheckmark = document.createElement('td');
  const checkmark = document.createElement('a');
  checkmark.className = 'checkmark btn';
  checkmark.innerHTML = '<i class="material-icons">check</i>';
  
  checkmark.addEventListener('click', function() {
    processGnarly(id)
  }, false);

  thCheckmark.appendChild(checkmark);

  const tr = document.createElement('tr');
  tr.className = 'collection-item';
  tr.appendChild(thCheckmark);
  tr.appendChild(thGnarly);
  tr.appendChild(thPoints);
  tr.appendChild(thDescription);

  return tr;
}

function removeCollection() {
  while(collection.firstChild)
  {
    collection.removeChild(collection.firstChild);
  }
}

function filterTasks(e) {
  removeCollection();

  const text = e.target.value.toLowerCase();
  if(text === '') {
    return;
  };

  const table = makeGnarlyTable();
  const tbody = document.createElement("tbody");

  for(let gnarly in gnarlies) {
    if(gnarlies[gnarly].name.toLowerCase().indexOf(text) != -1) {
      tbody.appendChild(generateTableItem(gnarly));
    }
  }

  table.appendChild(tbody);
  collection.appendChild(table);
}

function makeGnarlyTable() {
  const table = document.createElement("table");
  table.className = "striped";
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const thButton = document.createElement("th");
  tr.appendChild(thButton);
  const thGnarly = document.createElement("th");
  thGnarly.innerHTML = "Gnarly";
  tr.appendChild(thGnarly);
  const thPoints = document.createElement("th");
  thPoints.innerHTML = "Value";
  tr.appendChild(thPoints);
  const thDescription = document.createElement("th");
  thDescription.innerHTML = "Description";
  tr.appendChild(thDescription);
  thead.appendChild(tr);
  table.appendChild(thead);

  return table;
}




