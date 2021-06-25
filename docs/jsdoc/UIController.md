# UIController

## Members

<dl>
<dt><a href="#info">info</a> : <code>Object</code></dt>
<dd><p>Info object</p>
</dd>
<dt><a href="#currentCycle">currentCycle</a> : <code>integer</code></dt>
<dd><p>Current showing cycle</p>
</dd>
<dt><a href="#isPlaying">isPlaying</a> : <code>boolean</code></dt>
<dd><p>Is playing</p>
</dd>
<dt><a href="#lastLoadedCycle">lastLoadedCycle</a> : <code>integer</code></dt>
<dd><p>Last loaded cycle</p>
</dd>
<dt><a href="#getScore">getScore</a></dt>
<dd></dd>
<dt><a href="#showCycle">showCycle</a></dt>
<dd></dd>
<dt><a href="#lastCycle">lastCycle</a></dt>
<dd><p>Last cycle number.</p>
</dd>
<dt><a href="#playingDelay">playingDelay</a></dt>
<dd><p>Playing delay.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#UIController">UIController(info)</a></dt>
<dd></dd>
<dt><a href="#loadDataFromInfo">loadDataFromInfo(name, defaultValue)</a> ⇒ <code>*</code></dt>
<dd></dd>
<dt><a href="#start">start()</a></dt>
<dd><p>Play logs</p>
</dd>
<dt><a href="#pause">pause()</a></dt>
<dd><p>Pause logs</p>
</dd>
<dt><a href="#reset">reset()</a></dt>
<dd><p>Reset player to #0 cycle</p>
</dd>
<dt><a href="#setLoadedCycle">setLoadedCycle(cycle)</a></dt>
<dd><p>Set cycle as loaded and controller updated.</p>
</dd>
<dt><a href="#reloadControllPanel">reloadControllPanel()</a></dt>
<dd><p>Update controll buttons status</p>
</dd>
<dt><a href="#setCycle">setCycle(cycle)</a></dt>
<dd><p>Show cycle</p>
</dd>
<dt><a href="#nextCycle">nextCycle()</a></dt>
<dd><p>Show next cycle</p>
</dd>
<dt><a href="#prevCycle">prevCycle()</a></dt>
<dd><p>Show previous cycle</p>
</dd>
</dl>

<a name="info"></a>

## info : <code>Object</code>
Info object

**Kind**: global variable  
<a name="currentCycle"></a>

## currentCycle : <code>integer</code>
Current showing cycle

**Kind**: global variable  
<a name="isPlaying"></a>

## isPlaying : <code>boolean</code>
Is playing

**Kind**: global variable  
<a name="lastLoadedCycle"></a>

## lastLoadedCycle : <code>integer</code>
Last loaded cycle

**Kind**: global variable  
<a name="getScore"></a>

## getScore
**Kind**: global variable  

| Param | Type |
| --- | --- |
| cycle | <code>integer</code> | 

<a name="showCycle"></a>

## showCycle
**Kind**: global variable  

| Param | Type |
| --- | --- |
| cycle | <code>integer</code> | 

<a name="lastCycle"></a>

## lastCycle
Last cycle number.

**Kind**: global variable  
<a name="playingDelay"></a>

## playingDelay
Playing delay.

**Kind**: global variable  
<a name="UIController"></a>

## UIController(info)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| info | <code>Object</code> | info object |


* [UIController(info)](#UIController)
    * [~teamName](#UIController..teamName)
    * [~mapName](#UIController..mapName)

<a name="UIController..teamName"></a>

### UIController~teamName
Team name

**Kind**: inner property of [<code>UIController</code>](#UIController)  
<a name="UIController..mapName"></a>

### UIController~mapName
Map name

**Kind**: inner property of [<code>UIController</code>](#UIController)  
<a name="loadDataFromInfo"></a>

## loadDataFromInfo(name, defaultValue) ⇒ <code>\*</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 
| defaultValue | <code>\*</code> | 

<a name="start"></a>

## start()
Play logs

**Kind**: global function  
<a name="pause"></a>

## pause()
Pause logs

**Kind**: global function  
<a name="reset"></a>

## reset()
Reset player to #0 cycle

**Kind**: global function  
<a name="setLoadedCycle"></a>

## setLoadedCycle(cycle)
Set cycle as loaded and controller updated.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| cycle | <code>integer</code> | cycle number |

<a name="reloadControllPanel"></a>

## reloadControllPanel()
Update controll buttons status

**Kind**: global function  
<a name="setCycle"></a>

## setCycle(cycle)
Show cycle

**Kind**: global function  

| Param | Type |
| --- | --- |
| cycle | <code>integer</code> | 

<a name="nextCycle"></a>

## nextCycle()
Show next cycle

**Kind**: global function  
<a name="prevCycle"></a>

## prevCycle()
Show previous cycle

**Kind**: global function  

