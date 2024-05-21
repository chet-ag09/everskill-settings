const interestInput = document.getElementById('interests');
const interestTags = document.getElementById('interest-tags');
const addInterestButton = document.getElementById('add-interests');

interestInput.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    handleAddInterest();
  }
});

addInterestButton.addEventListener('click', handleAddInterest);

function handleAddInterest() {
  const enteredInterest = interestInput.value.trim();

  const newTag = document.createElement('div');
  newTag.classList.add('tag');
  newTag.innerText = enteredInterest;

  const closeButton = document.createElement('span');
  closeButton.classList.add('close');
  closeButton.innerText = 'x';
  closeButton.addEventListener('click', () => {
    interestTags.removeChild(newTag);
  });
  newTag.appendChild(closeButton);

  interestTags.appendChild(newTag);

  interestInput.value = '';
}