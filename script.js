// Static counts
document.getElementById("peopleCount").textContent = 58;
document.getElementById("co2Saved").textContent = "21.3 kg";

// 🚴 Pledge Tracker
function addPledge() {
  const name = document.getElementById("nameInput").value;
  const mode = document.getElementById("mode").value;
  const list = document.getElementById("pledgeList");

  if (name) {
    const li = document.createElement("li");
    li.textContent = `${name} pledged to use ${mode}`;
    list.appendChild(li);
    document.getElementById("nameInput").value = "";
  }
}

// 💨 CO₂ Savings Calculator
function calculateCO2() {
  const km = parseFloat(document.getElementById("distance").value);
  const type = document.getElementById("transport").value;
  const result = document.getElementById("result");

  const emissions = {
    bike: 0,
    carpool: 0.06,
    bus: 0.05,
    car: 0.2
  };

  if (!isNaN(km) && km > 0) {
    const saved = (km * (0.2 - emissions[type])).toFixed(2);
    result.textContent = `You save approx. ${saved} kg of CO₂ per trip!`;
  } else {
    result.textContent = "Enter a valid distance.";
  }
}

// 🧠 Quiz Checker
function checkQuiz() {
  let score = 0;
  const form = document.forms["quizForm"];
  for (let i = 1; i <= 3; i++) {
    const answer = form[`q${i}`].value;
    score += parseInt(answer);
  }

  const feedback = [
    "🌱 Try again – you can do better!",
    "💡 Good start – keep going green!",
    "🌟 Excellent! You're a Green Hero!"
  ];

  document.getElementById("quizScore").textContent =
    `Score: ${score}/3 – ${feedback[Math.min(score, 2)]}`;
}
