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
