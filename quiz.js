const questions = [
  { text: "犬は何の仲間？", image:"dog.jpg", choices:["哺乳類","魚類","爬虫類"], answer:"哺乳類" },
  { text: "りんごの色は？", image:"apple.jpg", choices:["赤","青","黄色"], answer:"赤" }
];

let current = 0;
let score = 0;

function shuffleArray(arr){ return arr.sort(()=>Math.random()-0.5); }

function loadQuestion(){
  const q = questions[current];
  document.getElementById("questionText").textContent = q.text;
  document.getElementById("questionImage").src = q.image;
  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";
  shuffleArray(q.choices).forEach(c=>{
    const btn = document.createElement("button");
    btn.textContent = c;
    btn.onclick = ()=>checkAnswer(c);
    choicesDiv.appendChild(btn);
  });
  document.getElementById("result").textContent = "";
  document.getElementById("nextBtn").style.display="none";
}

function checkAnswer(selected){
  const q = questions[current];
  const resultDiv = document.getElementById("result");
  if(selected === q.answer){ resultDiv.textContent="正解！🎉"; score++; }
  else { resultDiv.textContent=`不正解… 正解は「${q.answer}」`; }
  document.getElementById("score").textContent=`スコア：${score} / ${questions.length}`;
  document.getElementById("nextBtn").style.display="inline-block";
}

document.getElementById("nextBtn").onclick = ()=>{
  current = (current+1)%questions.length;
  loadQuestion();
}

// 最初の問題表示
loadQuestion();