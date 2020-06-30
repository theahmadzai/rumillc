<?php

namespace App\Nova;

use Laravel\Nova\Fields\ID as IDField;
use Laravel\Nova\Fields\Text as TextField;
use Laravel\Nova\Fields\Image as ImageField;
use Laravel\Nova\Fields\Number as NumberField;
use Laravel\Nova\Fields\TextArea as TextAreaField;
use Laravel\Nova\Fields\BelongsTo as BelongsToField;
use Illuminate\Http\Request;
use Laravel\Nova\Http\Requests\NovaRequest;
use Intervention\Image\ImageManagerStatic;
use Storage;

class Product extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var string
     */
    public static $model = 'App\Product';

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
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function fields(Request $request)
    {
        return [
            IDField::make()->sortable(),

            ImageField::make('Image')
                ->store(new StoreImage(500, 500))
                ->preview(function($image) {
                    return Storage::disk('public')->url('images/' . $image);
                })
                ->thumbnail(function($image) {
                    return Storage::disk('public')->url('thumbnails/' . $image);
                }),

            TextField::make('Name')->rules('required'),

            TextField::make('Slug')->rules('required')->hideFromIndex(),

            NumberField::make('Price'),

            TextField::make('Tags')->hideFromIndex(),

            TextAreaField::make('Content'),

            BelongsToField::make('Category'),
        ];
    }

    /**
     * Get the cards available for the request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function cards(Request $request)
    {
        return [];
    }

    /**
     * Get the filters available for the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function filters(Request $request)
    {
        return [];
    }

    /**
     * Get the lenses available for the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function lenses(Request $request)
    {
        return [];
    }

    /**
     * Get the actions available for the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function actions(Request $request)
    {
        return [];
    }
}
