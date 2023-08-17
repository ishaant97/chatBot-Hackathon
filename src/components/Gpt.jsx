import React from 'react'
import { Configuration, OpenAIApi } from 'openai'
import { Button } from '@chakra-ui/react';

export default function Gpt() {

    async function gptCall() {

        const configuration = new Configuration({
        apiKey: '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',
        });
        const openai = new OpenAIApi(configuration);

        const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: "How to install python answer in 50 words"}],
        });
        console.log(completion.data.choices[0].message);

    }

  return (
    <div>
      <Button onClick={gptCall}>get gpt</Button>
    </div>
  )
}


