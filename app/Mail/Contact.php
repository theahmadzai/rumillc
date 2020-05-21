<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Contact extends Mailable
{
    use Queueable, SerializesModels;

    public $email   = null;
    public $name    = null;
    public $subject = null;
    public $text    = null;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->email   = $request['email'];
        $this->name    = $request['name'];
        $this->subject = $request['subject'];
        $this->text    = $request['message'];
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from($this->email)->view('mails.contact');
    }
}
