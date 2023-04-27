<?php

namespace App\Providers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event to listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
    ];

    /**
     * Register any events for your application.
     */
    public function boot(): void
    {
        parent::boot();

        Event::listen('Illuminate\Database\Events\TransactionBeginning', function () {
            $this->app->make('log')->debug('beginTransaction');
        });

        DB::listen(function ($query) {
            $this->app->make('log')->debug($query->sql);
        });

        Event::listen('Illuminate\Database\Events\TransactionCommitted', function () {
            $this->app->make('log')->debug('commit');
        });

        Event::listen('Illuminate\Database\Events\TransactionRolledBack', function () {
            $this->app->make('log')->debug('rollBack');
        });
    }

    /**
     * Determine if events and listeners should be automatically discovered.
     */
    public function shouldDiscoverEvents(): bool
    {
        return false;
    }
}
