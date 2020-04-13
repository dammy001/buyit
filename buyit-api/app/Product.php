<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'productTitle', 'description', 'price', 'image'
    ];
}
