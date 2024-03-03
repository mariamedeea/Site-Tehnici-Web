window.onload = () => {
  const myTimeout = setTimeout(myGreeting, 5000);

  function myGreeting() {
    document.getElementById("salut").innerHTML = "Bine ai venit pe site-ul nostru!!";
    document.getElementById("salut").style.textAlign = "center";
  }

  var form = document.querySelector('.container1');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('fname').value;

    var paragraph = document.createElement('p');

    var someString = "Salut, ";
    name = name.toUpperCase();
    var string = someString.concat(name);

    paragraph.textContent = string;

    // Replace 'meniu' with the correct element where you want to append the paragraph.
    var meniu = document.getElementById('meniu');
    meniu.appendChild(paragraph);
  });

};
