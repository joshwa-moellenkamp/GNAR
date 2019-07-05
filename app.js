const gnarlyTable = document.getElementById('gnarlies');
const pointValue = document.getElementById('points');

const gnarliesSource = {
  "line": {
    "Kangaroo Cornice": { "points": 100, "description": "front" },
    "Look Ma (skiier's right)": { "points": 100, "description": "front" },
    "Look Ma (skiier's left)": { "points": 200, "description": "front" },
    "Challenge (skiier's right chute)": { "points": 150, "description": "front" },
    "Powerline Chute (skiier's left)": { "points": 200, "description": "front" },
    "Powerline Chute (skiier's right)": { "points": 400, "description": "front" },
    "Chair 4 Cliffs (skiier's left sneak)": { "points": 100, "description": "front" },
    "Chair 4 Cliffs (center)": { "points": 800, "description": "front" },
    "Chair 4 Cliffs (skiier's right)": { "points": 1200, "description": "front" },
    "Zot": { "points": 100, "description": "front" },
    "South Rim (no cliff)": { "points": 150, "description": "front" },
    "South Rim (with cliff)": { "points": 400, "description": "front" },
    "Middle Rim Trees": { "points": 400, "description": "front" },
    "North Rim (no cliff)": { "points": 200, "description": "front" },
    "North Rim (with 1 cliff)": { "points": 400, "description": "front" },
    "North Rim (with 2 cliffs)": { "points": 600, "description": "front" },
    "Northstar Cliff (skiier's right)": { "points": 200, "description": "front" },
    "Northstar Cliff (cave double)": { "points": 600, "description": "front" },
    "Chair 11 Line Cliff": { "points": 400, "description": "front" },
    "Prima Cornice (0 gate)": { "points": 1000, "description": "front" },
    "Prima Cornice (0.5 gate)": { "points": 1200, "description": "front" },
    "Prima Cornice (1st gate)": { "points": 800, "description": "front" },
    "Prima Cornice (2nd gate)": { "points": 600, "description": "front" },
    "Prima-Pronto": { "points": 500, "description": "front" },
    "Highline (no stops)": { "points": 1000, "description": "front" },
    "Caddy's Cafe": { "points": 200, "description": "front" },
    "Lower Caddy's": { "points": 300, "description": "front" },
    "Pumphouse": { "points": 600, "description": "front" },
    "The Narrows": { "points": 600, "description": "front" },
    "Mudslide": { "points": 600, "description": "front" },
    "Frontside Chutes": { "points": 600, "description": "front" },
    "Pepis Face": { "points": 600, "description": "front" },
    "Ptarmigain": { "points": 400, "description": "Back Bowls" },
    "Seldom Mudslide (skiier's right)": { "points": 400, "description": "Back Bowls" },
    "Seldom Mudslide (skiier's left with cliffs)": { "points": 600, "description": "Back Bowls" },
    "Windows (from deck surface)": { "points": 400, "description": "Back Bowls" },
    "Forever (no stops)": { "points": 400, "description": "Back Bowls" },
    "Headwall": { "points": 200, "description": "Back Bowls" },
    "Dragon's Teeth (no cliff)": { "points": 200, "description": "Back Bowls" },
    "Dragon's Teeth (with cliff)": { "points": 500, "description": "Back Bowls" },
    "Jade Glade (no cornice)": { "points": 200, "description": "Back Bowls" },
    "Jade Glade (with cornice huck)": { "points": 500, "description": "Back Bowls" },
    "Ghenghis (no cornice)": { "points": 200, "description": "Back Bowls" },
    "Ghenghis (with cornice cornice)": { "points": 600, "description": "Back Bowls" },
    "Sugar Mountain (no cliff)": { "points": 200, "description": "Back Bowls" },
    "Sugar Mountain (with 1 cliff)": { "points": 500, "description": "Back Bowls" },
    "Sugar Mountain (with 2 cliffs)": { "points": 700, "description": "Back Bowls" },
    "Poppyfields": { "points": 5, "description": "Back Bowls" },
    "Orient Express": { "points": 200, "description": "Back Bowls" },
    "Rasputin's (skiier's right, no cliff)": { "points": 300, "description": "Back Bowls" },
    "Rasputin's (skiier's right, 1 cliff)": { "points": 600, "description": "Back Bowls" },
    "Rasputin's (skiier's right, 2 cliffs)": { "points": 800, "description": "Back Bowls" },
    "Rasputin's Funnel (skiier's right)": { "points": 600, "description": "Back Bowls" },
    "Rasputin's Funnel (center)": { "points": 800, "description": "Back Bowls" },
    "Rasputin's Funnel (skiier's left, with air)": { "points": 1000, "description": "Back Bowls" },
    "Rasputin's Funnel (skiier's left cliff bonus)": { "points": 200, "description": "Back Bowls" },
    "Redsquare (no cornice)": { "points": 200, "description": "Back Bowls" },
    "Redsquare (with cornice huck)": { "points": 600, "description": "Back Bowls" },
    "Redsquare (with 2 airs)": { "points": 800, "description": "Back Bowls" },
    "Outer Mongolia Ropeline": { "points": 1000, "description": "Back Bowls" },
    "Pete's Stash (upper)": { "points": 500, "description": "Blue Sky Basin" },
    "Pete's Stash (middle)": { "points": 500, "description": "Blue Sky Basin" },
    "Pete's Stash (lower)": { "points": 500, "description": "Blue Sky Basin" },
    "Skree Field (no cliff)": { "points": 250, "description": "Blue Sky Basin" },
    "Skree Field (with cliff)": { "points": 400, "description": "Blue Sky Basin" },
    "Steep & Deep (no cliff)": { "points": 250, "description": "Blue Sky Basin" },
    "Steep & Deep (with 1 cliff)": { "points": 500, "description": "Blue Sky Basin" },
    "Steep & Deep (with 2 cliffs)": { "points": 800, "description": "Blue Sky Basin" },
    "Lover's Leap (no cornice)": { "points": 200, "description": "Blue Sky Basin" },
    "Lover's Leap (with cornice huck)": { "points": 600, "description": "Blue Sky Basin" },
    "Heavy Metal": { "points": 100, "description": "Blue Sky Basin" },
  },
  "trick bonus":
  {
    "Spread Eagle": { "points": 50 },
    "Crotch Grab": { "points": 100 },
    "Twister": { "points": -50 },
    "Daffy": { "points": 50 },
    "Mule Kick": { "points": 50 },
    "Kosak": { "points": -100 },
    "Any Grab": { "points": 50 },
    "360": { "points": 500 },
    "Switch 360": { "points": 1000 },
    "540": { "points": 1000 },
    "Switch 540": { "points": 1000 },
    "720": { "points": 1000 },
    "Switch 720": { "points": 5000 },
    "900": { "points": 5000 },
    "Switch 900": { "points": 5000 },
    "1080": { "points": 10000 },
    /**
     * "Switch 1080": { "points": "Yeah Right!" },
     * "1440": { "points": "Yer Dreamin!" },
     */
    "Front Flip": { "points": 500 },
    "Double Front": { "points": 1500 },
    "Back Flip": { "points": 500 },
    "Double Back": { "points": 1500 },
    "Switch Back": { "points": 2000 },
    "Switch Back 180": { "points": 1000 },
    "Lincoln Loop": { "points": 1000 },
    "Misty 540": { "points": 2000 },
    "Misty 720": { "points": 1500 },
    "Rodeo 540": { "points": 2000 },
    "Rodeo 720": { "points": 2000 },
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
  },
  "extra credit (unlimited)": {
    "A3: After 3:00 PM": {
      "points": 50,
      "description": "perform any line after 3:00 PM"
    },
    "BN: Butt Naked (female)": {
      "points":  10000,
      "description": "if jailed, these points are lost"
    },
    "BN: Butt Naked (male)": {
      "points": 5000,
      "description": "if jailed, these points are lost"
    },
    "CG: Cat Track Gap": {
      "points": 300,
      "description": "gap jump a cat track"
    }
  },
  "extra credit (daily)": {
    "EB: Extreme Brag": {
      "points": 1000,
      "description": "at Belle's Camp, brag to at least 5 people about how rad you got today"
    },
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
        msg = `Did you claim ${g.description} line '${g.name}'?`;
        break;
      }
      case "penalty": {
        msg = `Do you deserve penalty '${g.name}' because you '${g.description}'?`;
        break;
      }
      case "trick bonus": {
        msg = `Did you earn trick bonus '${g.name}'?`;
        break;
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

// allow users to search for a specific gnarly

// embed once per day, once per year data etc in the json
// use this to actually drive how users can interact with things

// collapse all gnarlies by category