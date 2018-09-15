<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactPrice extends Mailable
{
    use Queueable, SerializesModels;

    public $email        = null;
    public $name         = null;
    public $subject      = null;
    public $text         = null;
    public $product_id   = null;
    public $product_name = null;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($request)
    {
        $this->email        = $request['email'];
        $this->name         = $request['name'];
        $this->subject      = $request['subject'];
        $this->text         = $request['message'];
        $this->product_id   = $request['product_id'];
        $this->product_name = $request['product_name'];
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from($this->email)->view('mails.product-price');
    }
}
