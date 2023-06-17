const enhance = id => {
  const element = document.getElementById(id),
        text = element.innerText.split('');

  element.innerHTML = '';

  text.forEach(letter => {
    const span = document.createElement('span');
    span.innerText = letter;
    span.classList.add('letter');
    element.appendChild(span);
  })
}

enhance('instagram-link');