// import figlet  from "figlet"

// figlet("Saurabh", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

import  TextToSpeech from 'text-to-speech-converter'

async function testSpeechGeneration() {
    try {
        const outputFilePath = 'output';
        const text = 'Padhai Karlo project banalo ';
        const result = await TextToSpeech(text, outputFilePath);
        console.log(result);
    } catch (error) {
        console.error('Error:', error);
    }
}
testSpeechGeneration();