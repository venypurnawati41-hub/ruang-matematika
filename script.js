// Function Navigasi Tab
function switchTab(tabId) {
  console.log("Berpindah ke tab: " + tabId);
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    if(item.getAttribute('data-tab') === tabId) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// Function Kalkulator Mini Interaktif
function calculateResult() {
  const input = document.getElementById('calcInput').value;
  const resultDiv = document.getElementById('calcResult');
  
  try {
    // Evaluasi ekspresi matematika sederhana secara aman
    const sanitizedInput = input.replace(/[^0-9+\-*/().]/g, '');
    if (!sanitizedInput) {
      resultDiv.innerText = "Masukkan angka atau rumus!";
      return;
    }
    const result = Function(`'use strict'; return (${sanitizedInput})`)();
    resultDiv.innerText = `Hasil = ${result}`;
  } catch (e) {
    resultDiv.innerText = "Format rumus tidak valid!";
  }
}

// Function Kuis Kilat Interaktif
function checkAnswer(button, isCorrect) {
  const feedback = document.getElementById('quizFeedback');
  const allButtons = document.querySelectorAll('.quiz-opt');
  
  allButtons.forEach(btn => btn.style.pointerEvents = 'none'); // Disable klik ulang
  
  if (isCorrect) {
    button.style.background = "#D1FAE5";
    button.style.borderColor = "#10B981";
    button.style.color = "#065F46";
    feedback.innerText = "🎉 Benar sekali! 7² (49) + 3³ (27) = 76";
    feedback.style.color = "#10B981";
  } else {
    button.style.background = "#FEE2E2";
    button.style.borderColor = "#EF4444";
    button.style.color = "#991B1B";
    feedback.innerText = "❌ Kurang tepat. Coba lagi ya!";
    feedback.style.color = "#EF4444";
  }
}
// Fungsi Smooth Scroll Otomatis ke Target Section ID
// Fungsi Smooth Scroll dengan Offset Presisi
function scrollToSection(sectionId) {
  const targetElement = document.getElementById(sectionId);
  if (targetElement) {
    // Offset 90px memperhitungkan tinggi navbar + jarak estetis
    const headerOffset = 90; 
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}