<?php

namespace App\Http\Controllers;

use Validator;
use Storage;
use App\Testimonial;
use Illuminate\Http\Request;
use App\Http\Resources\TestimonialResource;

class TestimonialController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
         return TestimonialResource::collection(Testimonial::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'image' => 'required|file|image',
            'message' => 'required|min:25|max:300'
        ]);

        if($validator->fails()) {
            return back()->withInput()->withErrors($validator);
        }

        $name = $request->name;
        $image = $request->image->store('testimonials');
        $message = $request->message;

        $t = new Testimonial;

        $t->name = $name;
        $t->image = $image;
        $t->message = $message;

        $t->save();

        return back()->with('status', 'Testimonial Added Successfully!');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Testimonial $testimonial)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Testimonial $testimonial)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Testimonial $testimonial)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Testimonial $testimonial)
    {
        Storage::delete($testimonial->image);

        Testimonial::destroy($testimonial->id);

        return back()->with('status', 'Testimonial Deleted Successfully!');
    }
}
