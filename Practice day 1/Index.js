import { Tiktoken } from "js-tiktoken/lite";
import o200k_base from "js-tiktoken/ranks/o200k_base";


const enc = new Tiktoken(o200k_base);

const input = "Hello how are you?"

const tokens = enc.encode(input);

console.log(tokens);


const inputTokens = [13225, 1495, 553, 481, 30];

const decoded = enc.decode(inputTokens);

console.log(decoded);
