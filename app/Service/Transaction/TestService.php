<?php

namespace App\Service\Transaction;

use App\Models\Category\Category;
use App\Models\Category\CategoryRepository;
use App\Models\Post\Post;
use App\Models\Post\PostRepository;
use Illuminate\Support\Facades\DB;

class TestService
{
    public function __construct(
        private CategoryRepository $categoryRepository,
        private PostRepository $postRepository
    ) {
    }

    public function createPost()
    {
        $category = new Category(['name' => 'alphones']);
        DB::transaction(function () use ($category) {
            $this->categoryRepository->save($category);
            $post = new Post([
                'category_id' => $category->id,
                'title' => 'today is...',
                'content' => 'hoooooooo!!!'
            ]);
            $this->postRepository->save($post);
        });
    }

    public function updatePost()
    {

    }
}
