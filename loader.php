<?php
use Illuminate\Database\Capsule\Manager as DB;
$db = new DB;

$db->addConnection([
'driver' => 'mysql',
'host' => 'localhost',
'database' => 'test',
'username' => 'root',
'password' => 'root',
'charset' => 'utf8',
'collation' => 'utf8_unicode_ci',
'prefix' => '',
]);

$db->setAsGlobal();

$db->bootEloquent();