<?php
require './vendor/autoload.php';
use \NoahBuscher\Macaw\Macaw;

use Illuminate\Database\Capsule\Manager as DB;
use App\User;

$db = new DB;
//数据库配置
$db->addConnection([
    'driver' => 'mysql',
    'host' => 'localhost',
    'database' => 'test',
    'username' => 'root',
    'password' => '',
    'charset' => 'utf8',
    'collation' => 'utf8_unicode_ci',
    'prefix' => '',
]);

$db->setAsGlobal();

$db->bootEloquent();

//推广页控制器
Macaw::get('/(:any).php(:all)', function($slug,$slug2) {
    Twig_Autoloader::register();
    $loader = new Twig_Loader_Filesystem('./template');
    $twig = new Twig_Environment($loader, array(
        'cache' => './cache',
    ));
    $template = $twig->load("$slug.twig");
    echo $template->render(array('names' => $slug, 'go' => $slug));
});

//推广数据提交^^
Macaw::get('/add', function() {
});
try {
//        $results = DB::select('select * from users');
//        var_dump($results);
} catch (PDOException $e) {
    echo $e->getMessage();
} catch (Exception $e) {
    var_dump($e->getTrace());
}

Macaw::dispatch();
