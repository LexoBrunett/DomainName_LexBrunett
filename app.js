let pronoun = ["the", "our"];
let adj = ["great", "big", "ugly", "beautiful", "last"];
let noun = ["jogger", "racoon"];
let footer = [".com", ".net", ".org", ".gov", ".io", ".ui", ".us"];

let domain;
function generatedomain() {
	let pronoum_word = Math.random() * pronoun.length;
	let adj_word = Math.random() * adj.length;
	let noun_word = Math.random() * noun.length;
	let footer_word = Math.random() * footer.length;

	domain= pronoun[pronoum_word]+adj[adj_word]+noun[noun_word]+footer[footer_word];

	return domain;
}