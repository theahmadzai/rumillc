<?php

namespace App\Http\Controllers;

use App\Feedback;
use Illuminate\Http\Request;
use App\Http\Resources\FeedbackResource;

class FeedbackController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (\Request::has('product')) {
            $product_id = \Request::query('product');
            return FeedbackResource::collection(Feedback::where('product_id', $product_id)->latest()->get());
        }
        return FeedbackResource::collection(Feedback::all());
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
        $this->validate($request, [
            'rating' => 'required|numeric|between:1,5',
            'name' => 'required',
            'title' => 'required',
            'message' => 'required|min:50',
            'product' => 'required|exists:products,id'
        ]);

        try {
            $feedback = new Feedback;
            $feedback->rating = $request->rating;
            $feedback->name = $request->name;
            $feedback->title = $request->title;
            $feedback->message = $request->message;
            $feedback->product_id = $request->product;
            $feedback->save();
        } catch (\Exception $e) {
            return $e->getMessage();
        }

        return ['status' => 'Thanks for your feedback.'];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Feedback  $feedback
     * @return \Illuminate\Http\Response
     */
    public function show(Feedback $feedback)
    {
        return new FeedbackResource($feedback);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Feedback  $feedback
     * @return \Illuminate\Http\Response
     */
    public function edit(Feedback $feedback)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Feedback  $feedback
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Feedback $feedback)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Feedback  $feedback
     * @return \Illuminate\Http\Response
     */
    public function destroy(Feedback $feedback)
    {
        Feedback::destroy($feedback->id);
    }
}
