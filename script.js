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

// Save story to localStorage
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('storyForm');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim() || 'Anonymous';
      const title = document.getElementById('title').value.trim();
      const story = document.getElementById('story').value.trim();

      if (title && story) {
        const newStory = { name, title, story };
        const stories = JSON.parse(localStorage.getItem('userStories')) || [];
        stories.push(newStory);
        localStorage.setItem('userStories', JSON.stringify(stories));

        alert('Story shared successfully!');
        form.reset();
      }
    });
  }

  // Display stories on stories.html
  const storiesContainer = document.getElementById('userStories');
  if (storiesContainer) {
    const stories = JSON.parse(localStorage.getItem('userStories')) || [];
    if (stories.length === 0) {
      storiesContainer.innerHTML = '<p class="text-center">No user stories yet.</p>';
    } else {
      stories.reverse().forEach(({ name, title, story }) => {
        const card = document.createElement('div');
        card.className = 'col-md-6';
        card.innerHTML = `
          <div class="card p-4 shadow-sm about-card">
            <h5>${name}</h5>
            <h6 class="text-muted">${title}</h6>
            <p>${story}</p>
          </div>
        `;
        storiesContainer.appendChild(card);
      });
    }
  }
});
