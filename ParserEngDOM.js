let textContetWords = ``;
let counter = 0;
let childrenCounter = 0;

function parceWordList(element) {

	if (!element) {
		const contentBlock = document.createElement("div");
		contentBlock.style.cssText = `
			position: absolute;
			left:50%;
			width: 200px;
			z-index: 3000;
			background: blue;
			color: #fff;
			text-align: center
		`;
		contentBlock.innerHTML = textContetWords;
		document.body.append(contentBlock)
	} else {

			if (element.tagName.toLowerCase() === "span") {

				textContetWords += `<p>${element.textContent.toLowerCase()}</p>`;
				childrenCounter++;

				if (element.nextElementSibling) {
					parceWordList(element.nextElementSibling);
				} else {
					childrenCounter = 0;
					parceWordList(element.parentElement.parentElement.parentElement.children[++counter]);
				}
		
				return;
			}

			if (element.children.length > 0 ) {
				
				if (element.tagName.toLowerCase() === "div") {
					 parceWordList(element.children[childrenCounter])
				}

			} else {
				parceWordList(element.parentElement.children[++childrenCounter])
			}
	}
}

const parentElem = document.querySelector(".word-list-popup_list-lessons-word-list");

parceWordList(parentElem)

