const generateToken = (txt) => {
    let text = txt.toLowerCase();
    let token = text.match(/[\w]+/g);
    // console.log(token);
    let unique = [...new Set(token)];
    // console.log(unique);
    let grammar = {};
    unique.forEach((t, idx) =>
        grammar[t] = idx * 200 + 123
    )
    // console.log(grammar);
    return grammar
}

const encode = (input, grammar) => {
    let token = input.match(/[\w]+/g)
    return token.map((t) => grammar[t] || -1)
}

const decode = (code, grammar) => {
    let decoded = Object.fromEntries(Object.entries(grammar).map(([a,b])=> [b,a]));
    return code.map(t => decoded[t] || "-1");
}

const data = "hello World hello, This is sAmple text for generating data 123456";
const grammar = generateToken(data);
console.log(grammar);

let input = "hello world"
let mapping = encode(input, grammar);
console.log(mapping);

let decoded = decode(mapping,grammar);
console.log(decoded);