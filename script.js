const skills = [
  "python","java","javascript","html","css","sql",
  "react","node","git","linux","docker","aws"
];

function analyzeResume() {
  const jobText = document.getElementById("jobDesc").value.toLowerCase();
  const resultCard = document.getElementById("resultCard");

  let matched = [];
  let missing = [];

  skills.forEach(skill => {
    jobText.includes(skill) ? matched.push(skill) : missing.push(skill);
  });

  let score = Math.round((matched.length / skills.length) * 100);

  document.getElementById("progressBar").style.width = score + "%";
  document.getElementById("scoreText").innerText = `Resume Match: ${score}%`;

  document.getElementById("matched").innerHTML =
    matched.map(s => `<span class="skill matched">${s}</span>`).join("");

  document.getElementById("missing").innerHTML =
    missing.map(s => `<span class="skill missing">${s}</span>`).join("");

  resultCard.classList.remove("hidden");
}
