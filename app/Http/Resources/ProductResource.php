<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'       => $this->id,
            'name'     => $this->name,
            'slug'     => $this->slug,
            'image'    => $this->image,
            'price'    => $this->price,
            'tags'     => $this->tags,
            'content'  => $this->content,
            'category' => new CategoryResource($this->category),
        ];
    }
}
