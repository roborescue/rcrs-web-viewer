# GameMaker

## Members

<dl>
<dt><a href="#histories">histories</a> : <code>Array.&lt;Object&gt;</code></dt>
<dd><p>Array of cycles history</p>
</dd>
<dt><a href="#infos">infos</a> : <code>Array.&lt;Object&gt;</code></dt>
<dd><p>Array of cycles info object</p>
</dd>
<dt><a href="#currentCycle">currentCycle</a> : <code>integer</code></dt>
<dd><p>Current cycle</p>
</dd>
<dt><a href="#lastLoadedCycle">lastLoadedCycle</a> : <code>integer</code></dt>
<dd><p>Last loaded cycle</p>
</dd>
<dt><a href="#baseHistorian">baseHistorian</a></dt>
<dd><p>Base historian</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#GameMaker">GameMaker(canvasDrawer, loadFunction)</a></dt>
<dd></dd>
<dt><a href="#setBaseHistorian">setBaseHistorian(historian)</a></dt>
<dd><p>Set base historian.</p>
</dd>
<dt><a href="#drawCycle">drawCycle(cycle)</a></dt>
<dd></dd>
<dt><a href="#getScore">getScore(cycle)</a></dt>
<dd><p>Get score at given cycle</p>
</dd>
<dt><a href="#getLastCycleNumber">getLastCycleNumber()</a> ⇒ <code>integer</code></dt>
<dd><p>Get last cycle number</p>
</dd>
<dt><a href="#getLastLoadedCycleNumber">getLastLoadedCycleNumber()</a> ⇒ <code>integer</code></dt>
<dd><p>Get last loaded cycle</p>
</dd>
<dt><a href="#setCorrectScaleAndTranslation">setCorrectScaleAndTranslation(minX, minY, maxX, maxY)</a></dt>
<dd><p>Set map position on screen.</p>
</dd>
<dt><a href="#getInfo">getInfo()</a> ⇒ <code>Object</code></dt>
<dd><p>Get info object</p>
</dd>
<dt><a href="#setInfo">setInfo(info)</a></dt>
<dd><p>Set info object</p>
</dd>
<dt><a href="#constructor">constructor(dataLoader, canvasDrawer)</a></dt>
<dd></dd>
</dl>

<a name="histories"></a>

## histories : <code>Array.&lt;Object&gt;</code>
Array of cycles history

**Kind**: global variable  
<a name="infos"></a>

## infos : <code>Array.&lt;Object&gt;</code>
Array of cycles info object

**Kind**: global variable  
<a name="currentCycle"></a>

## currentCycle : <code>integer</code>
Current cycle

**Kind**: global variable  
<a name="lastLoadedCycle"></a>

## lastLoadedCycle : <code>integer</code>
Last loaded cycle

**Kind**: global variable  
<a name="baseHistorian"></a>

## baseHistorian
Base historian

**Kind**: global variable  
<a name="GameMaker"></a>

## GameMaker(canvasDrawer, loadFunction)
**Kind**: global function  

| Param | Type |
| --- | --- |
| canvasDrawer | <code>Object</code> | 
| loadFunction | <code>function</code> | 

<a name="setBaseHistorian"></a>

## setBaseHistorian(historian)
Set base historian.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| historian | <code>Object</code> | historian |

<a name="drawCycle"></a>

## drawCycle(cycle)
**Kind**: global function  

| Param | Type |
| --- | --- |
| cycle | <code>integer</code> | 

<a name="getScore"></a>

## getScore(cycle)
Get score at given cycle

**Kind**: global function  

| Param | Type |
| --- | --- |
| cycle | <code>integer</code> | 

<a name="getLastCycleNumber"></a>

## getLastCycleNumber() ⇒ <code>integer</code>
Get last cycle number

**Kind**: global function  
**Returns**: <code>integer</code> - last cycle number  
<a name="getLastLoadedCycleNumber"></a>

## getLastLoadedCycleNumber() ⇒ <code>integer</code>
Get last loaded cycle

**Kind**: global function  
**Returns**: <code>integer</code> - last loaded cycle  
<a name="setCorrectScaleAndTranslation"></a>

## setCorrectScaleAndTranslation(minX, minY, maxX, maxY)
Set map position on screen.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| minX | <code>number</code> | Minimum X |
| minY | <code>number</code> | Minimum Y |
| maxX | <code>number</code> | Maximum X |
| maxY | <code>number</code> | Maximum Y |

<a name="getInfo"></a>

## getInfo() ⇒ <code>Object</code>
Get info object

**Kind**: global function  
<a name="setInfo"></a>

## setInfo(info)
Set info object

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| info | <code>Object</code> | info object |

<a name="constructor"></a>

## constructor(dataLoader, canvasDrawer)
**Kind**: global function  

| Param | Type |
| --- | --- |
| dataLoader | <code>Object</code> | 
| canvasDrawer | <code>Object</code> | 


