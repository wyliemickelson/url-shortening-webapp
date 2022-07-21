import '../scss/index.scss';

const shortenerBtn = document.getElementById('shortenerBtn');
const shortenerInput = document.getElementById('shortenerInput');
const createdLinksSection = document.getElementById('createdLinks');

shortenerBtn.addEventListener('click', handleShortener);
shortenerInput.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		handleShortener();
	}
});

async function handleShortener() {
	const userLinkInput = shortenerInput.value;
	let linkDataJSON = await shortenLink(userLinkInput);
	if (linkDataJSON.ok) {
		addLink(linkDataJSON);
		shortenerInput.value = '';
	} else {
		console.log('Invalid URL');
	}
}

function handleCopy() {
	let linkContainer = this.closest('.link_container');
	let linkCreated = linkContainer.querySelector('.link--created').href;
	navigator.clipboard.writeText(linkCreated);
}

async function shortenLink(url) {
	let linkData = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
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
	let shortLink = `https://${linkDataJSON.result.short_link}`;
	createdLink.target = '_blank';
	createdLink.href = shortLink;
	createdLink.textContent = shortLink;

	let copyBtn = document.createElement('button');
	copyBtn.textContent = 'Copy';
	copyBtn.classList.add('btn');
	copyBtn.addEventListener('click', handleCopy);

	container.append(givenLink);
	container.append(createdLink);
	container.append(copyBtn);

	createdLinksSection.append(container);
}