const gnarlyTable = document.getElementById('gnarlies');
const pointValue = document.getElementById('points');

const gnarliesSource = {
  "line": {
    "Kangaroo Cornice": { "points": 100 },
    "Look Ma (s.r.)": { "points": 100 }
  },
  "penalty": {
    "Binding Butt": {
      "description": "smashed butt on binding(s) after an aerial",
      "points": -300
    },
    "Belly Flop": {
      "description": "landed on your belly",
      "points": -1000
    }
  }
};

class Gnarly {
  constructor(category, name, points, description, other) {
    this.category = category;
    this.name = name;
    this.points = points;
    this.description = description;
    this.other = other;
  }
}

let gnarlies = {};
let id = 0;
let totalScore = 0;

loadEventListeners();

for(let category in gnarliesSource) {
  let values = gnarliesSource[category];
  for(let value in values) {
    val = values[value]
    // gnarlies.push(new Gnarly(category, value, val.points, val.description, val.other))
    addGnarly(new Gnarly(category, value, val.points, val.description, val.other))
    id += 1; // TODO keep track of these better
  }
}

function loadEventListeners() {
  gnarlyTable.addEventListener('click', tally);
}

function tally(e) {
  if(e.target.parentElement.classList.contains('checkmark')) {
    const row = e.target.parentElement.parentElement.parentElement;
    const id = row.className.split('=').pop();
    console.log(points);
    console.log(points.innerHTML)
    let g = gnarlies[id]
    let msg;
    switch(g.category) {
      case "line": {
        msg = `Did you claim line '${g.name}?'`;
        break;
      }
      case "penalty": {
        msg = `Do you deserve penalty '${g.name}' because you '${g.description}'?`;
      }
    }
    if(confirm(msg)) {
      updateScore(g.points);
    }
  }
}

function updateScore(score) {
  totalScore += score;
  points.innerHTML = `Total score: ${totalScore}`;
}

function addGnarly(g) {
  gnarlies[id] = g;

  const thGnarly = document.createElement('th');
  thGnarly.appendChild(document.createTextNode(g.name));

  const thPoints = document.createElement('th');
  thPoints.appendChild(document.createTextNode(g.points));

  const thCategory = document.createElement('th');
  thCategory.appendChild(document.createTextNode(g.category));

  const thDescription = document.createElement('th');
  if(g.description != undefined) {
    thDescription.appendChild(document.createTextNode(g.description));
  }

  const thCheckmark = document.createElement('th');
  const checkmark = document.createElement('a');
  checkmark.className = 'checkmark';
  checkmark.innerHTML = '<i class="material-icons">check</i>';
  thCheckmark.appendChild(checkmark);

  const tr = document.createElement('tr');
  tr.className = `collection-item id=${id}`;
  tr.appendChild(thCheckmark);
  tr.appendChild(thGnarly);
  tr.appendChild(thPoints);
  tr.appendChild(thCategory);
  tr.appendChild(thDescription);

  gnarlyTable.appendChild(tr);
}

// Title, score, category, description

// sort by category and then title

// allow users to toggle to points sort
