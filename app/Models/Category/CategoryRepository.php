<?php

namespace App\Models\Category;

use App\Models\BaseRepository;

class CategoryRepository extends BaseRepository
{
    public function __construct(Category $model)
    {
        parent::__construct($model);
    }

    public function save(Category $model): bool
    {
        return $model->save();
    }
}
