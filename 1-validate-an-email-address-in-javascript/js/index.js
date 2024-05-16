document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('emailInput').value;
    const isValid = validateEmail(email);
    const resultMessage = document.getElementById('resultMessage');
    
    if (isValid) {
      resultMessage.textContent = 'Email válido.';
      resultMessage.style.color = 'green';
    } else {
      resultMessage.textContent = 'Email inválido.';
      resultMessage.style.color = 'red';
    }
  });
  
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  