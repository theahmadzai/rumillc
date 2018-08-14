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
            'image' => 'file|image',
            'message' => 'required|min:25|max:300'
        ]);

        if ($validator->fails()) {
            return back()->withInput()->withErrors($validator);
        }

        try {
            $testimonial = new Testimonial;
            $testimonial->name = $request->name;
            $testimonial->message = $request->message;
            if ($request->hasFile('image')) {
                $testimonial->image = $request->image->store('testimonials');
            }
            $testimonial->save();
        } catch (\Exception $e) {
            return $e->getMessage();
        }

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
        return new TestimonialResource($testimonial);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Testimonial $testimonial)
    {
        return view('admin.testimonials-edit', ['testimonial' => $testimonial]);
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
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'image' => 'file|image',
            'message' => 'required|min:25|max:300'
        ]);

        if ($validator->fails()) {
            return back()->withInput()->withErrors($validator);
        }

        try {
            $testimonial = Testimonial::find($testimonial->id);
            $testimonial->name = $request->name;
            $testimonial->message = $request->message;
            if ($request->hasFile('image')) {
                $testimonial->image = $request->image->store('testimonials');
            }
            $testimonial->save();
        } catch (\Exception $e) {
            return $e->getMessage();
        }

        return redirect('admin/testimonials')->with('status', 'Testimonial Updated Successfully!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Testimonial $testimonial)
    {
        if (Storage::exists($testimonial->getOriginal('image'))) {
            Storage::move($testimonial->image, 'deleted/testimonials/' . basename($testimonial->image));
        }

        Testimonial::destroy($testimonial->id);

        return back()->with('status', 'Testimonial Deleted Successfully!');
    }
}
