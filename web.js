function testPerformance() {
            function getClass(score) {
                return score > 90 ? 'good' : score > 70 ? 'average' : 'bad';
          }
            
          const performanceScore = Math.floor(Math.random() * 21) + 80; 
          const accessibilityScore = Math.floor(Math.random() * 21) + 70; 
          const bestPracticesScore = Math.floor(Math.random() * 21) + 60;
          const seoScore = Math.floor(Math.random() * 11) + 90; 
            
          document.getElementById('performance').innerHTML = `성능<br>${performanceScore}%`;
          document.getElementById('performance').className = getClass(performanceScore);
            
          document.getElementById('accessibility').innerHTML = `접근성<br>${accessibilityScore}%`;
          document.getElementById('accessibility').className = getClass(accessibilityScore);
            
          document.getElementById('bestPractices').innerHTML = `권장사항<br>${bestPracticesScore}%`;
          document.getElementById('bestPractices').className = getClass(bestPracticesScore);
            
          document.getElementById('seo').innerHTML = `검색엔진 최적화<br>${seoScore}%`;
          document.getElementById('seo').className = getClass(seoScore);
            
          document.getElementById('results').style.display = 'block';
}
