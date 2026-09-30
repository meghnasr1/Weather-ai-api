import OpenAI from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: "Hello, What is the weather of patiala?" }],
}).then(response => {
    console.log(response.choices[0].message.content);
}).catch(error => {
    console.error(error);
});


function getWeatherData(city=''){
    if(city.toLowerCase()==='london') return "10C";
    if(city.toLowerCase()==='paris') return "15C";
    if(city.toLowerCase()==='tokyo') return "20C";
    if(city.toLowerCase()==='new york') return "12C";
    if(city.toLowerCase()==='los angeles') return "18C";
    if(city.toLowerCase()==='chicago') return "14C";
    if(city.toLowerCase()==='houston') return "22C";
    if(city.toLowerCase()==='mumbai') return "28C";
    if(city.toLowerCase()==='delhi') return "26C";
    if(city.toLowerCase()==='patiala') return "30C";
    return "City not found";
}