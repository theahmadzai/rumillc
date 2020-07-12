<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Storage;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'price' => $this->price,
            'content' => $this->content,
            'category' => $this->category,
            'feedbacks' => $this->feedbacks,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'image' => asset(Storage::url('images/'.$this->image)),
            'thumbnail' => asset(Storage::url('thumbnails/'.$this->image)),
        ];
    }
}
