const button = document.getElementById('animateBtn');

// Check localStorage on page load
window.onload = () => {
  const isAnimated = localStorage.getItem('isAnimated');
  if (isAnimated === 'true') {
    button.classList.add('animate');
  }
};

// When button is clicked
button.addEventListener('click', () => {
  button.classList.toggle('animate');

  // Save the current animation state
  const currentlyAnimated = button.classList.contains('animate');
  localStorage.setItem('isAnimated', currentlyAnimated);
});
