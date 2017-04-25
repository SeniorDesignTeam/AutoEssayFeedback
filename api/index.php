<?php

    use \Psr\Http\Message\ServerRequestInterface as Request;
    use \Psr\Http\Message\ResponseInterface as Response;

    require 'vendor/autoload.php';
    $app = new \Slim\App;

    //Get synonyms
    $app->get('/synonyms', function() {
        $word = $_GET['word'];
        $response = Unirest\Request::get("https://wordsapiv1.p.mashape.com/words/".$word."/synonyms",
            array(
                "X-Mashape-Key" => "nEF6VUn8mumsh3HQTy04iCX7ov6tp1dU1TgjsnNc0lPJi7UZq3",
                "Accept" => "application/json"
            )
        );

        return $response->raw_body;
    });

    $app->get('/synonyms2', function() {
        $api_key = '2a9d5d8853e13bcd23c3f1fced27767c';
        $word = $_GET['word'];

        $response = file_get_contents("http://words.bighugelabs.com/api/2/".$api_key."/".$word."/json");
        // $json = json_encode($response, true);
        // var_dump($json);
        return $response;
    });

    $app->get('/similar', function() {
        $response = Unirest\Request::get("https://wordsapiv1.p.mashape.com/words/good/similarTo",
            array(
                "X-Mashape-Key" => "nEF6VUn8mumsh3HQTy04iCX7ov6tp1dU1TgjsnNc0lPJi7UZq3",
                "Accept" => "application/json"
            )
        );

        echo $response->raw_body;
    });

    // $app -> get('/parse', function() {
    //     $response = Unirest\Request::get("https://snegirigens-dependency-parser-v1.p.mashape.com/parse?query=My+name+is+Ashley",
    //         array(
    //             "X-Mashape-Key" => "70EvBkoEQDmshAv1Ayt9k59Q2tOEp1xKa76jsnc1KCB2jrJXDa",
    //             "Accept" => "text/plain"
    //         )
    //     );
    //
    //     return $response->raw_body;
    // });



$app->run();
?>
