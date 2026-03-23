// DARK/LIGHT MODE
function toggleMode(){ document.body.classList.toggle("light"); }

// TYPING ANIMATION
const text = "Future Engineer. Problem Solver. Lifelong Learner.";
let i=0;
function typeEffect(){ if(i<text.length){ document.getElementById("typing").innerHTML+=text.charAt(i); i++; setTimeout(typeEffect,40); } }
typeEffect();

// CHART.JS GPA
const ctx = document.getElementById('chart');
if(ctx){
  new Chart(ctx,{type:'line',data:{labels:['Freshman','Sophomore','Junior','Senior'],datasets:[{label:'GPA Growth',data:[3.6,3.8,3.9,4.0],borderWidth:3,borderColor:'#38bdf8'}]}});
}
