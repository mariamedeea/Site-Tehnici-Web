window.onload = () => {
  var paragraphs = document.querySelectorAll('.text-ecler');
  
  document.addEventListener('keydown', function(event) {
    if (event.key === 'p') {
      paragraphs.forEach(function(paragraph) {
        changeTextStyle.call(paragraph);
      });
    }
  });
  
  function changeTextStyle() {
    if (this.style.color === 'pink') {
      this.style.color = '';
      this.style.fontSize = '';
    } else {
      this.style.color = 'pink';
      this.style.fontSize = '20px';
    }
  }
  

    var title = document.getElementById('titlu');

    title.addEventListener('click', changeTextStyle1);

    function changeTextStyle1() {
        if (this.style.border) {
        this.style.border = null; 
        } else {
        this.style.border = '2px black'; 
        this.style.borderStyle = "dotted";
        }
    }

    function changeTextColor() {
      var heading = document.getElementById('titlu');
      var colors = ['red', 'green', 'blue', 'yellow', 'purple'];
    
      setInterval(function() {
        var randomIndex = Math.floor(Math.random() * colors.length);
        heading.style.color = colors[randomIndex];
      }, 5000);
    }
    
      
      changeTextColor();
      

      var imagini = document.getElementsByTagName('img');

      for (var i = 0; i < imagini.length; i++) {
        imagini[i].addEventListener('mouseover', maresteImaginea);
      }
      
      
      function maresteImaginea() {
        var imagini = document.getElementsByTagName('img');
        for (var i = 0; i < imagini.length; i++) {
          if (imagini[i].style.filter === 'grayscale(100%)') {
            imagini[i].style.filter = null;
          } else {
            imagini[i].style.filter = 'grayscale(100%)';
          }
        }
      }
      


      const gridItems = document.querySelectorAll('.grid-item');

      gridItems.forEach((gridItem) => {
        const button = document.createElement('button');
        button.textContent = 'Adauga in cos';
      
        const paragraph = document.createElement('p');
        paragraph.textContent = 'Produsul a fost adaugat in cos';
        paragraph.style.display = 'none'; 
      
        button.addEventListener('click', () => {
          if (paragraph.style.display === 'none') {
            paragraph.style.display = 'block';
            button.textContent = 'Elimina din cos';
          } else {
            paragraph.style.display = 'none';
            button.textContent = 'Adauga in cos';
          }
        });
      
        gridItem.appendChild(button);
        gridItem.appendChild(paragraph);
      });
      

let count = localStorage.getItem('buttonCount');
let lastButtonPressDate = localStorage.getItem('lastButtonPressDate');

if (!count) {
  count = 0;
} else {
  count = parseInt(count);
}

gridItems.forEach((gridItem) => {
  const button = gridItem.querySelector('button');

  button.addEventListener('click', () => {
    if (button.textContent != "Adauga in cos") {
      count++;
      localStorage.setItem('buttonCount', count);
      lastButtonPressDate = new Date().toLocaleString(); 
      localStorage.setItem('lastButtonPressDate', lastButtonPressDate);
      countDisplay.textContent = `Ai adaugat ${count} produse. Ultima adaugare: ${lastButtonPressDate}`;
    } else {
      count--;
      localStorage.setItem('buttonCount', count);
      lastButtonPressDate = new Date().toLocaleString(); 
      localStorage.setItem('lastButtonPressDate', lastButtonPressDate);
      countDisplay.textContent = `Ai adaugat ${count} produse. Ultima adaugare: ${lastButtonPressDate}`;
    }
  });
});

const countDisplay = document.getElementById('countDisplay');
countDisplay.textContent = `Ai adaugat ${count} produse. Ultima adaugare: ${lastButtonPressDate}`;

const clearStorageButton = document.getElementById('clearStorageButton');
clearStorageButton.addEventListener('click', () => {
  localStorage.clear();
  count = 0;
  lastButtonPressDate = null;
  countDisplay.textContent = `Ai adaugat ${count} produse. Ultima adaugare: ${lastButtonPressDate}`;
});


}
