function createPage() {
  const playerIdInput = document.getElementById('playerIdInput').value;

  if (!playerIdInput.trim()) {
      alert('Please enter your Roblox User ID');
      return;
  }

  fetch(`/create_page/${playerIdInput}`, {
      method: 'POST'
  })
  .then(response => {
      if (response.ok) {
          alert('Page created successfully');
      } else {
          alert(`Failed to create page ${response.statusText}`);
      }
  })
  .catch(error => {
      console.error('Error:', error);
      alert('Failed to create page');
  });
}