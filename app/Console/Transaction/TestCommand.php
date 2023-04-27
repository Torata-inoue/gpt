<?php

namespace App\Console\Transaction;

use App\Service\Transaction\TestService;
use Illuminate\Console\Command;

class TestCommand extends Command
{
    protected $signature = 'transaction:test';

    protected $description = 'トランザクションロックのテストコマンド';

    public function handle(TestService $testService)
    {
        $testService->createPost();
    }
}
