<?php

namespace app\widgets\weather;

use yii\web\AssetBundle;

class WeatherWidgetAsset extends AssetBundle
{
    public $js = [
             'js/custom.js'
        
    ];

    public $css = [
        'css/style.css',
        'css/font-awesome.min.css'
    ];

    public $depends = [
        'yii\web\JqueryAsset',
   
    ];

    public function init()
    {
        $this->sourcePath = __DIR__ . "/assets";
        parent::init();
    }
}
