let pronoun = ["the", "our"];
let adj = ["great", "big", "ugly", "beautiful", "last"];
let noun = ["jogger", "racoon"];
let footer = [".com", ".net", ".org", ".gov", ".io", ".ui", ".us"];

let domain =
	adj[getRandom(adj.length)] +
	"" +
	noun[getRandom(noun.length)] +
	"" +
	footer[getRandom(footer.length)];


function getRandom(arrayLength) {
	let number = Math.floor(Math.random() * arrayLength);
	return number;
}

console.log(domain);