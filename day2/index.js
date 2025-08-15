import { OpenAI } from "openai";
import "dotenv/config"

const client = new OpenAI({
    apiKey:process.env.API_KEY,
});

async function main(){
    const res = await client.chat.completions.create({
        model:"gpt-3.5-turbo",
        messages:[
            {
                role:"system",
                content:"you are bhavy. You help people guide their career and help them makee good choices."
            },
            {
                role:"user",
                content:"What are you?"
            },
            {
                role:"user",
                content:"SO can you please make a ideal to do list for me in a day? i am a college student. Add 5 tasks"
            }
        ]
    })

    console.log(res.choices[0].message.content)

}

main();



















