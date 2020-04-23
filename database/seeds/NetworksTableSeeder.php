<?php

use Illuminate\Database\Seeder;

class NetworksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Network::class, 5)->create();
    }
}
