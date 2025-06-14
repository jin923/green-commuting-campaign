// Live Counter Animation
let count = 0;
let co2 = 0;
const peopleCount = document.getElementById("peopleCount");
const co2Saved = document.getElementById("co2Saved");

const interval = setInterval(() => {
  if (count < 58) {
    count++;
    co2 += 0.37;
    peopleCount.textContent = count;
    co2Saved.textContent = co2.toFixed(1);
  } else {
    clearInterval(interval);
  }
}, 40);

// Pledge Logic
function addPledge() {
  const name = document.getElementById("nameInput").value;
  const mode = document.getElementById("mode").value;
  const list = document.getElementById("pledgeList");
  if (name) {
    const li = document.createElement("li");
    li.textContent = `${name} pledges to use ${mode}`;
    list.appendChild(li);
  }
}

// CO2 Calculator
function calculateCO2() {
  const distance = parseFloat(document.getElementById("distance").value);
  const type = document.getElementById("transport").value;
  const emissionRates = { bike: 0, carpool: 0.05, bus: 0.08, car: 0.2 };
  const result = distance * (emissionRates.car - emissionRates[type]);
  document.getElementById("result").textContent = `You save approximately ${result.toFixed(2)} kg CO₂/day`;
}

// Quiz
function checkQuiz() {
  const form = document.forms["quizForm"];
  let score = 0;
  for (let i = 1; i <= 3; i++) {
    const q = form[`q${i}`];
    if ([...q].find(input => input.checked && input.value === "1")) {
      score++;
    }
  }
  document.getElementById("quizScore").textContent = `You scored ${score}/3!`;
}
