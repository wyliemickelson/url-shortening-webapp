import '../scss/index.scss';

const shortenerBtn = document.getElementById('shortenerBtn');
const shortenerInput = document.getElementById('shortenerInput');
const createdLinksSection = document.getElementById('createdLinks');

shortenerBtn.addEventListener('click', handleShortener);

async function handleShortener() {
  const userLinkInput = shortenerInput.value;
  let linkDataJSON = await shortenLink(userLinkInput);
  if (linkDataJSON.ok) {
    addLink(linkDataJSON);
  } else {
    console.log('Invalid URL');
  }
}

async function shortenLink(url) {
  let linkData = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
  return await linkData.json();
}

function addLink(linkDataJSON) {
  let container = document.createElement('div');
  container.classList.add('link_container');
  
  let givenLink = document.createElement('p');
  givenLink.classList.add('link', 'link--given');
  givenLink.textContent = linkDataJSON.result.original_link;

  let createdLink = document.createElement('a');
  createdLink.classList.add('link', 'link--created');
  createdLink.textContent = linkDataJSON.result.short_link;

  let copyBtn = document.createElement('button');
  copyBtn.textContent = 'Copy';
  copyBtn.classList.add('btn');

  container.append(givenLink);
  container.append(createdLink);
  container.append(copyBtn);

  createdLinksSection.append(container);
}