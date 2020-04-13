<?php

use Illuminate\Database\Seeder;
use App\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

         // Create 50 product records
         for ($i = 0; $i < 4; $i++) {
            Product::create([
                'productTitle' => $faker->title,
                'description' => $faker->paragraph,
                'price' => $faker->randomNumber(2),
            ]);
        }
    }
}
