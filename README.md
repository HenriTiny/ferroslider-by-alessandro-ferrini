# Ferroslider jQuery plugin by Alessandro Ferrini
Ferroslider jQuery plugin by Alessandro Ferrini http://www.alessandroferrini.it/lab/jQueryPlugins/ferroSlider/

### Notice
This is a backup of the Ferroslider files created by Alessandro Ferrini, since the source files and documentation are no longer online at http://www.alessandroferrini.it/lab/jQueryPlugins/ferroSlider/  
Documentation collected on https://js-tutorial.com/ferroslider-jquery-plugin-532

## Installation

Include CSS:
```
<link rel="stylesheet" href="jquery.ferro.ferroSlider.css" type="text/css">
```

Include JS scripts:
```
<script src="jquery.transit.min.js" type="text/javascript"></script>
<script src="jquery.ferro.ferroSlider.min.js" type="text/javascript"></script>
```
FerroSlider require jQuery:
```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
```

HTML:
```
<div id="div1" class="slidingSpaces" title="Page 1">
    first page
</div>
<div id="div2" class="slidingSpaces" title="Page 2">
    second page 
</div>
<div id="div3" class="slidingSpaces" title="Page 3">
    third page  
</div>
<div id="div4" class="slidingSpaces" title="Page 4">
    fourth page 
</div>
<div id="div5" class="slidingSpaces" title="Page 5">
    fifth page  
</div>
```

Call:
```
$(document).ready(function() {
    $('.slidingSpaces').ferroSlider();
});
```

## Properties

| Parameter      | Available values | Default | Description |
| -----------    | ----------- | ----------- | ----------- |
| ajaxLoading    | true / false | false |  use AJAX to load contents |
| ajaxScript |	path to the script |	null |	script used to load contents via AJAX |
| autoSlide |	true / false |	false |	use it for image galleries. If set to true the sliding effect will be fired automatically|
| autoSlideTime |	number |	5000 |	autoslide transition time |
| axis |	'xy' / 'yx' |	null |	transition path. With 'xy' transition first moves horizontal then vertical, with 'yx' first vertical then horizontal. With default value (blank) transition moves in every direction: horizontal, vertical or diagonal. |
| container |	jQuery selector |	'none' |	container of sliding contents. By default the container is the <body> element |
| createLinks | true / false | false | create navigation links |
| createMap | true / false | false | create navigation map |
| createPlayer | true / false | false | create a visual player to manage transitions (play/pause, go next slide, go previous slide) |
| createSensibleAreas | true / false | false | create sensible areas at the edge of the slides. They will appear when you move over the edge of the slide |
| createTimeBar | true / false | false | create a visual countdown timebar as visual feedback of autosliding |
| displace | 'row' / 'column' /`<object>` | 'row' | displacement mode of the contents. By default they're positioned as row. With 'column' they'll be displaced as a column. You can pass an <object> that defines the position of every single content. This is "The Matrix". For a deeper explanation of this option see The Matrix section. |
| disableSwipe | true / false | false | disable swiping feature |
| easing | any standard easing provided by CSS3 transition property | 'ease' | easing function to use for the transition. See "Transitions" section at jQuery Transit's homepage. |
| linksPosition | 'top_left' / 'top_center' / 'top_right' / 'bottom_right' / 'bottom_center' / 'bottom_left' / 'center_right' / 'center_left' / 'center_center' / [custom pixels or percentage positioning] | bottom_center | set the position of the navigation link. The value is composed by `<vertical position>_<horizontal position>`. Vertical position can be 'top', 'bottom', 'center', pixels (e.g. 10px) or percentage (e.g. 10%). Horizontal position can be 'left', 'right', 'center', pixels (e.g. 10px) or percentage (e.g. 10%). |
| linksStyle | 'row' / 'column' | row | display navigation links like a row (inline) or a column (like a list) |
| mapPosition | 'top_left' / 'top_center' / 'top_right' / 'bottom_right' / 'bottom_center' / 'bottom_left' / 'center_right' / 'center_left' / 'center_center' / [custom pixels or percentage positioning] | 'bottom_right' | set the position of the navigation map. The value is composed by `<vertical position>_<horizontal position>`. Vertical position can be 'top', 'bottom', 'center', pixels (e.g. 10px) or percentage (e.g. 10%). Horizontal position can be 'left', 'right', 'center', pixels (e.g. 10px) or percentage (e.g. 10%) |
| playerPosition | 'top_left' / 'top_center' / 'top_right' / 'bottom_right' / 'bottom_center' / 'bottom_left' / [custom pixels or percentage positioning] | 'bottom_center' | set the position of the player. The value is composed by `<vertical position>_<horizontal position>`. Vertical position can be 'top', 'bottom', 'center', pixels (e.g. 10px) or percentage (e.g. 10%). Horizontal position can be 'left', 'right', 'center', pixels (e.g. 10px) or percentage (e.g. 10%) |
| preventArrowNavigation | true / false | false | prevent navigation with keyboard arrows |
| swipeTime | number | 100 | minimum number of milliseconds to accept a swipe action |
| swipeTreshold | number | 80 | minimum number of swiped pixels to accept a swipe action |
| time | number | 300 | transition time in millisecs |
| timeBarPosition | 'top' / 'bottom' | 'top' | position of the timebar: at the top of the container or at the bottom |
| timeBarInsidePlayer | true / false | true | encapsulate timeBar inside player. The position of the timeBar is still specified with thetimeBarPosition parameter: with top timeBar will be rendered over the player, with bottom it will render under the player |
| tips | true / false | false | render map title attribute with nice tooltips |
| tipsPosition | 'top' / 'right' / 'left' / 'bottom' | 'top' | position of tooltips related to the navigation dot |
| updateLocation | true / false | true | enable or disable url update |

## Callback API
FerroSlider 2 provides two custom events: `startslide` and `startslide`.  
`startslide` is fired at the start of sliding transition.  
`endslide` is fired at the end of sliding transition.
```
$(document).bind("startslide",function(){
    //do stuff
});
     
$(document).bind("endslide",function(){
    //do stuff
});
```
These events add two objects to the jQuery $.event object: `moveFrom` and `moveTo`.  
Each one of this object has some information inside:

- id : id of element;
- first : true if is the first element of the sliding elements, false otherwise;
- last : true if is the last element of the sliding elements, false otherwise;
- row : row of the element in the matrix;
- column : column of the element in the matrix;
- ajaxLoading : true if the content of element is loaded by AJAX, false otherwise
- ajaxLoaded : true if the content of the element has been already loaded via AJAX, false otherwise
- axis : value of axis parameter for the single element. Default is null;

## Functions

| Function      | Parameters | Description |
| -----------    | ----------- | ----------- |
| $.fn.ferroSlider.disableSwipe(flag) | flag: true / false | disable sliding feature according to the flag parameter: if true the swiping feature is disabled, if false is enabled. Useful combined with the events to disable swiping features on certain slides |
| $.fn.ferroSlider.getActualSlideId() | - | return the id of the current slide. No parameters provided |
| $.fn.ferroSlider.play() | - | plays auto transitions. No parameters provided |
| $.fn.ferroSlider.pause() | - | pauses auto transitions. No parameters provided |
| $.fn.ferroSlider.slideTo(id) | id : the id attribute of the element to slide to | slide to a certain element |
| $.fn.ferroSlider.slideToNext() | - | slide to next element. No parameters provided. If current element is the last, slide to first element |
| $.fn.ferroSlider.slideToPrev() | - | slide to previous element. No parameters provided. If current element is the first, slide to last element. |

## Use The Matrix
"The Matrix" is an object that allows you to position the contents following a custom map.  
  
With this special object you can define a grid of placeholder, where the contents will be placed.  
This object reflects a mathematic matrix, where every cell is a little object that defines his contents behaviour.  
Pay attention: Every object can behave in a different way!  
 Every cell contains an object that can use some parameters. Some of this parameters will overwrite the value of the generic parameter with the same name mentioned above.  

| Parameter      | Available values | Default | Description |
| -----------    | ----------- | ----------- | ----------- |
| ajaxLoading | true / false | value of the generic 'ajaxLoading' param | use AJAX to load contents. Overwrites generic 'ajaxLoading' value. The script used to load content via AJAX is the same defined by 'ajaxScript' generic param |
| first | true / false | false | if set to true the object will be the first to be shown |
| full | 0 / 1 | 0 | if set to 1 in this cell will be placed a content, otherwise it will be empty |
| moveDirection | 'xy' / 'yx' | value of the generic 'axis' param | defines the axis sequence in transition when moving from this element on. The behaviour is the same as the generic 'axis' param, but applies only to the object where is set |

Example:
```
var matrix = [
    [
        {full:0},{full:1,moveDirection:'yx'},{full:0}
    ],
    [
        {full:1},{full:1,first:true},{full:1}
    ],
    [
        {full:0},{full:1,moveDirection:'yx'},{full:0}
    ]
];
$('.slidingSpaces').ferroSlider({
    displace: matrix,
});
```
## Updates

- Add new property `updateLocation` 
- Fixes to use lastest jQuery version

## License
  
FerroSlider is licensed under the Apache License, Version 2.0 
    
jQuery Transit is under MIT License
