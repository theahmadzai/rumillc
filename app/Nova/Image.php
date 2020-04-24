<?php

namespace App\Nova;

use Laravel\Nova\Fields\ID as IDField;
use Laravel\Nova\Fields\Image as ImageField;
use Laravel\Nova\Fields\Select as SelectField;
use Laravel\Nova\Fields\Text as TextField;
use Illuminate\Http\Request;
use Laravel\Nova\Http\Requests\NovaRequest;
use Intervention\Image\ImageManagerStatic;
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

            ImageField::make('Image', 'url')->store(function(Request $request, $model) {

                $url = basename(Storage::disk('public')->putFile('images', $request->file('url')));

                $thumbnail = ImageManagerStatic::make($request->file('url'))->fit(200, 200, function ($constraint) {
                    $constraint->upsize();
                    $constraint->aspectRatio();
                })->encode();

                Storage::disk('public')->put('thumbnails/' . $url, $thumbnail);

                return [
                    'url' => $url,
                ];
            })->preview(function($url) {
                return Storage::disk('public')->url('images/' . $url);
            })->thumbnail(function($url) {
                return Storage::disk('public')->url('thumbnails/' . $url);
            }),

            TextField::make('Title'),

            SelectField::make('Type')->options([
                'slider' => 'Slider',
                'gallery' => 'Gallery',
                'other' => 'Other',
            ])->sortable()->displayUsingLabels(),
            TextField::make('Description')->hideFromIndex(),
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
