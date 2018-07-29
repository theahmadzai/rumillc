<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FeedbackResource extends JsonResource
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
            'rating' => $this->rating,
            'name' => $this->name,
            'title' => $this->title,
            'message' => $this->message,
            'date' => $this->created_at->format('F d, Y')
        ];
    }
}
