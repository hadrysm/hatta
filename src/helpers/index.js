export const splitTextToChars = node => {
  const { textContent } = node;
  const textSplit = textContent.split('');

  const frag = document.createDocumentFragment();
  textSplit.forEach((letter, i) => {
    const span = document.createElement('span');
    span.textContent = letter;
    span.style = `${letter === ' ' ? 'min-width: 1rem;' : ''}z-index: ${
      textSplit.length - i
    }; position: relative; display: inline-block;`;
    frag.appendChild(span);
  });
  // eslint-disable-next-line
  node.textContent = null;
  node.appendChild(frag);

  return node.children;
};

export const createBox = (bgColor = '#000f24') => {
  const { body } = document;

  const box = document.createElement('div');
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  box.style.zIndex = '999999';
  box.style.position = 'fixed';
  box.style.bottom = 0;
  box.style.backgroundColor = bgColor;
  box.style.width = `${vw}px`;
  box.style.height = `${vh}px`;

  body.appendChild(box);
  return { box, body, vw };
};
