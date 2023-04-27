<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\DB;

class PostsSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();

        // カテゴリテーブルに100件のデータを挿入
        for ($i = 0; $i < 100; $i++) {
            DB::table('categories')->insert([
                'name' => $faker->word,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        // 記事テーブルに100万件のデータを挿入
        for ($i = 0; $i < 1000000; $i++) {
            DB::table('posts')->insert([
                'category_id' => rand(1, 100),
                'title' => $faker->sentence,
                'content' => $faker->paragraph,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
