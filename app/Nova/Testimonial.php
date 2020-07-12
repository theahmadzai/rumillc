<?php

namespace App\Nova;

use Illuminate\Http\Request;
use Laravel\Nova\Fields\ID as IDField;
use Laravel\Nova\Fields\Image as ImageField;
use Laravel\Nova\Fields\Text as TextField;
use Laravel\Nova\Fields\Textarea as TextareaField;
use Storage;

class Testimonial extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var string
     */
    public static $model = 'App\Testimonial';

    /**
     * The single value that should be used to represent the resource when being displayed.
     *
     * @var string
     */
    public static $title = 'name';

    /**
     * The columns that should be searched.
     *
     * @var array
     */
    public static $search = [
        'id',
    ];

    /**
     * Get the fields displayed by the resource.
     *
     * @return array
     */
    public function fields(Request $request)
    {
        return [
            IDField::make()->sortable(),
            ImageField::make('Image')
                ->store(new StoreImage())
                ->preview(function ($image) {
                    return Storage::disk('public')->url('images/'.$image);
                })
                ->thumbnail(function ($image) {
                    return Storage::disk('public')->url('thumbnails/'.$image);
                }),
            TextField::make('Name')->rules('required'),
            TextareaField::make('Message')->rules('required')->hideFromIndex(),
        ];
    }

    /**
     * Get the cards available for the request.
     *
     * @return array
     */
    public function cards(Request $request)
    {
        return [];
    }

    /**
     * Get the filters available for the resource.
     *
     * @return array
     */
    public function filters(Request $request)
    {
        return [];
    }

    /**
     * Get the lenses available for the resource.
     *
     * @return array
     */
    public function lenses(Request $request)
    {
        return [];
    }

    /**
     * Get the actions available for the resource.
     *
     * @return array
     */
    public function actions(Request $request)
    {
        return [];
    }
}
