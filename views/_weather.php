<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=<?=$map_api_key?>&libraries=places"></script>
<div class="widgetwrapper">
 <nav role='navigation' id="widgetnav">
    <ul> 
      <li class="active"><a href="#" class="fontawesome-search"></a></li>
      <li><a href="#" class="fontawesome-th-large"></a></li>
      <li><a href="#" class="fontawesome-file-alt"></a></li>
      <li><a href="#" class="fontawesome-calendar"></a></li>
      <li class="last"><a href="#" class="fontawesome-cog"></a></li>
    </ul>
  </nav>

  <section class="widgetsection">
   
<form class="form-horizontal" role="form">
        
            <div class="form-group">
                <input class="form-control places-autocomplete" onFocus="getWeather()" type="text" id="address" name="address" placeholder="" value="" autocomplete="address">
            </div>
       
               <input class="form-control places-autocomplete" type="hidden" id="lat" name="lat" >
                 <input class="form-control places-autocomplete" type="hidden" id="lon" name="lon" >
   
</form>
    <h1 id="cityName">Los Angeles, CA <a href="#" class="add">+</a></h1>
    <div class="temperature entypo-light-up">
      <h2><span id="temp">64</span></h2>
    </div>

    <ul>
      <li class="fontawesome-leaf left">
        <span id="windSpd">4 mph</span>
      </li>
      <li class="fontawesome-tint center">
        <span id="humidity">65%</span>
      </li>
     
      
    </ul> 

    <div class="bullets">
      <span class="entypo-record active"></span>
      <span class="entypo-record"></span>
      <span class="entypo-record"></span>
    </div>

    
  </section>
  
</div>

<div class="result"></div>

