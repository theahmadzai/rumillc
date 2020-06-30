<?php

namespace App\Nova;

use Laravel\Nova\Fields\ID as IDField;
use Laravel\Nova\Fields\Image as ImageField;
use Laravel\Nova\Fields\Select as SelectField;
use Laravel\Nova\Fields\Text as TextField;
use Illuminate\Http\Request;
use Laravel\Nova\Http\Requests\NovaRequest;
use Storage;

class Image extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var string
     */
    public static $model = 'App\Image';

    /**
     * The single value that should be used to represent the resource when being displayed.
     *
     * @var string
     */
    public static $title = 'title';

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
                ->store(new StoreImage(1600, 500))
                ->preview(function($image) {
                    return Storage::disk('public')->url('images/' . $image);
                })
                ->thumbnail(function($image) {
                    return Storage::disk('public')->url('thumbnails/' . $image);
                }),

            TextField::make('Title'),

            SelectField::make('Type')
                ->options([
                    'slider' => 'Slider',
                    'gallery' => 'Gallery',
                    'other' => 'Other',
                ])
                ->sortable()
                ->rules('required')
                ->displayUsingLabels(),
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
