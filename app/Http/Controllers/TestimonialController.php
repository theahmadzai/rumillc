<?php

namespace App\Http\Controllers;

use App\Http\Resources\TestimonialResource;
use App\Testimonial;
use Illuminate\Http\Request;
use Storage;
use Validator;

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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'    => 'required',
            'image'   => 'file|image',
            'message' => 'required|min:25|max:300',
        ]);

        if ($validator->fails()) {
            return back()->withInput()->withErrors($validator);
        }

        try {
            $testimonial          = new Testimonial;
            $testimonial->name    = $request->name;
            $testimonial->message = $request->message;
            if ($request->hasFile('image')) {
                $testimonial->image = $request->image->store('public');
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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Testimonial $testimonial)
    {
        $validator = Validator::make($request->all(), [
            'name'    => 'required',
            'image'   => 'file|image',
            'message' => 'required|min:25|max:300',
        ]);

        if ($validator->fails()) {
            return back()->withInput()->withErrors($validator);
        }

        try {
            $testimonial          = Testimonial::find($testimonial->id);
            $testimonial->name    = $request->name;
            $testimonial->message = $request->message;
            if ($request->hasFile('image')) {
                if (Storage::exists($testimonial->getOriginal('image'))) {
                    Storage::move($testimonial->getOriginal('image'), 'updated/testimonials/' . basename($testimonial->image));
                }
                $testimonial->image = $request->image->store('public');
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
            Storage::move($testimonial->getOriginal('image'), 'deleted/testimonials/' . basename($testimonial->image));
        }

        Testimonial::destroy($testimonial->id);

        return back()->with('status', 'Testimonial Deleted Successfully!');
    }
}
