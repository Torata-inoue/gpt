<?php

namespace App\Http\Controllers\GPT;

use App\Http\Controllers\Controller;

class GPTController extends Controller
{
    public function gpt()
    {
        $client = \OpenAI::client(config('openai.api-key'));
        $response = $client->completions()->create([
            'model' => 'gpt-3.5-turbo',
            'messages' => [
                ['role' => 'user', 'content' => '一番高い山を教えてください']
            ]
        ]);
        dd($response);
    }
}
