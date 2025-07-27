// Show alert when form is submitted
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // prevent default submit
      alert("Thanks for sharing! Your story has been received anonymously.");
      form.reset(); // reset form fields
    });
  }
});

// Scroll to top button (optional)
const scrollBtn = document.createElement('button');
scrollBtn.innerText = '↑';
scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '20px';
scrollBtn.style.right = '20px';
scrollBtn.style.display = 'none';
scrollBtn.style.padding = '10px 15px';
scrollBtn.style.border = 'none';
scrollBtn.style.borderRadius = '8px';
scrollBtn.style.backgroundColor = '#007bff';
scrollBtn.style.color = '#fff';
scrollBtn.style.fontSize = '20px';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.zIndex = '999';

document.body.appendChild(scrollBtn);

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});
