<?php
namespace app\widgets\weather;

class WeatherWidget extends \yii\base\Widget
{

    public $api_key = '';

    public $map_api_key = 'AIzaSyA7JVuTOfwxZy4GQVtIQC8ai10fzASQq0c';

    public function init()
    {
        parent::init();
    }

    public function run()
    {
        parent::run();
        WeatherWidgetAsset::register($this->getView());
        return $this->render('_weather', [
            'map_api_key' => $this->map_api_key
        ]);
    }
}
