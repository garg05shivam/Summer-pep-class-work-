async function getUserData() {
  const userCard = document.createElement('div');
  userCard.id = 'user-card';
  userCard.textContent = 'Loading user...';
  document.body.appendChild(userCard);

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const userData = await response.json();

    userCard.innerHTML = `
      <h2>${userData.name}</h2>
      <p><strong>Username:</strong> ${userData.username}</p>
      <p><strong>Email:</strong> ${userData.email}</p>
      <p><strong>Phone:</strong> ${userData.phone}</p>
      <p><strong>Company:</strong> ${userData.company.name}</p>
    `;
  } catch (error) {
    userCard.textContent = 'Could not load user data.';
    userCard.style.color = 'red';
    console.error('Fetch operation failed:', error);
  }
}

getUserData();
