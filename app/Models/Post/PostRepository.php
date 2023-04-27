<?php

namespace App\Models\Post;

use App\Models\BaseRepository;

class PostRepository extends BaseRepository
{
    public function __construct(Post $model)
    {
        parent::__construct($model);
    }

    public function save(Post $post): bool
    {
        return $post->save();
    }
}
