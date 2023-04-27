<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

abstract class BaseRepository
{
    public function __construct(private Model $model)
    {
    }

    protected function getQueryBuilder(): Builder
    {
        return $this->model->newQuery();
    }
}
