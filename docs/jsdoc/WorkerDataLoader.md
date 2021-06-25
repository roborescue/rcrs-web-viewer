# WorkerDataLoader

## Functions

<dl>
<dt><a href="#getKeyFromColor">getKeyFromColor(color)</a> ⇒ <code>string</code></dt>
<dd><p>Get histirian key of color.</p>
</dd>
<dt><a href="#OrdinalHistorian">OrdinalHistorian()</a> ⇒ <code>Object</code></dt>
<dd><p>Creates empty Historian with empty colors</p>
</dd>
<dt><a href="#mirrorYs">mirrorYs(vertexList)</a> ⇒ <code>Array.&lt;float&gt;</code></dt>
<dd><p>Multiplies each point&#39;s Y value by -1</p>
</dd>
<dt><a href="#WorkerDataLoader">WorkerDataLoader(data, loadFunction)</a></dt>
<dd></dd>
<dt><a href="#getCycleObject">getCycleObject(cycle)</a> ⇒ <code>Array.&lt;Object&gt;</code></dt>
<dd><p>Get cycle object.</p>
</dd>
<dt><a href="#getCyclesNumber">getCyclesNumber()</a> ⇒ <code>integer</code></dt>
<dd><p>Get cycles number.</p>
</dd>
<dt><a href="#releaseCycleMemory">releaseCycleMemory(cycle)</a></dt>
<dd><p>Remove specific cycles data from memory.</p>
</dd>
<dt><a href="#getInfoObject">getInfoObject()</a> ⇒ <code>Object</code></dt>
<dd><p>Get info object.</p>
</dd>
<dt><a href="#checkForIcon">checkForIcon(entity)</a></dt>
<dd><p>Push given entity to <code>WorkerDataLoader.entitiesWithIcon</code> 
if entity has icon.</p>
</dd>
<dt><a href="#fillAndPostInfo">fillAndPostInfo(data, loadFunction)</a></dt>
<dd><p>Post info object of given data</p>
</dd>
<dt><a href="#createBaseCycle">createBaseCycle(data, loadFunction)</a></dt>
<dd><p>Create base cycle</p>
</dd>
<dt><a href="#fillCycle">fillCycle(cycle)</a></dt>
<dd><p>Fill given cycle</p>
</dd>
<dt><a href="#fillCycles">fillCycles(data, loadFunction)</a></dt>
<dd><p>Fill cycles</p>
</dd>
<dt><a href="#postCycleAfterBake">postCycleAfterBake(cycle, data, info, commands)</a></dt>
<dd><p>Post given cycles Historian. (Create Historian object from entities)</p>
</dd>
<dt><a href="#fillHistoryWithCycleCommands">fillHistoryWithCycleCommands(historyManager, commands, cycleData)</a></dt>
<dd><p>Fill history with cycle commands.</p>
</dd>
<dt><a href="#fillHistoryWithCycleCommand">fillHistoryWithCycleCommand(historyManager, command, data)</a></dt>
<dd><p>Fill history with cycle command.</p>
</dd>
<dt><a href="#fillHistoryWithCycleObject">fillHistoryWithCycleObject(historyManager, cycleObject, cycle)</a> ⇒ <code>Object</code></dt>
<dd><p>Fill history with cycle object.</p>
</dd>
<dt><a href="#fillHistoryWithHumanObjects">fillHistoryWithHumanObjects(historyManager, objectList)</a> ⇒ <code>Object</code></dt>
<dd><p>Fill history with object of humans.</p>
</dd>
<dt><a href="#fillHistoryWithObject">fillHistoryWithObject(historyManager, objectList)</a> ⇒ <code>Object</code></dt>
<dd><p>Fill history with object.</p>
</dd>
<dt><a href="#fillHistoryWithObjectIcons">fillHistoryWithObjectIcons(historyManager, entities)</a></dt>
<dd><p>Fill history with object icons.</p>
</dd>
<dt><a href="#createLinesList">createLinesList(objectList, list)</a></dt>
<dd><p>Create and add border lines to the specific array.</p>
</dd>
<dt><a href="#fillBorderLines">fillBorderLines(historyManager, lines)</a></dt>
<dd><p>Fill history with border lines.</p>
</dd>
<dt><a href="#consturctor">consturctor(data, loadFunction)</a></dt>
<dd></dd>
</dl>

<a name="getKeyFromColor"></a>

## getKeyFromColor(color) ⇒ <code>string</code>
Get histirian key of color.

**Kind**: global function  
**Returns**: <code>string</code> - key  

| Param | Type | Description |
| --- | --- | --- |
| color | <code>Array.&lt;float&gt;</code> | color |

<a name="OrdinalHistorian"></a>

## OrdinalHistorian() ⇒ <code>Object</code>
Creates empty Historian with empty colors

**Kind**: global function  
**Returns**: <code>Object</code> - history manager  
<a name="mirrorYs"></a>

## mirrorYs(vertexList) ⇒ <code>Array.&lt;float&gt;</code>
Multiplies each point's Y value by -1

**Kind**: global function  
**Returns**: <code>Array.&lt;float&gt;</code> - mirrored vertex list  

| Param | Type | Description |
| --- | --- | --- |
| vertexList | <code>Array.&lt;float&gt;</code> | vertex list |

<a name="WorkerDataLoader"></a>

## WorkerDataLoader(data, loadFunction)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | data object |
| loadFunction | <code>function</code> | load function |

<a name="getCycleObject"></a>

## getCycleObject(cycle) ⇒ <code>Array.&lt;Object&gt;</code>
Get cycle object.

**Kind**: global function  
**Returns**: <code>Array.&lt;Object&gt;</code> - cycle object  

| Param | Type | Description |
| --- | --- | --- |
| cycle | <code>integer</code> | cycle number |

<a name="getCyclesNumber"></a>

## getCyclesNumber() ⇒ <code>integer</code>
Get cycles number.

**Kind**: global function  
**Returns**: <code>integer</code> - cycles number  
<a name="releaseCycleMemory"></a>

## releaseCycleMemory(cycle)
Remove specific cycles data from memory.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| cycle | <code>integer</code> | cycle number |

<a name="getInfoObject"></a>

## getInfoObject() ⇒ <code>Object</code>
Get info object.

**Kind**: global function  
**Returns**: <code>Object</code> - info object  
<a name="checkForIcon"></a>

## checkForIcon(entity)
Push given entity to ``WorkerDataLoader.entitiesWithIcon`` 
if entity has icon.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| entity | <code>Object</code> | entity object |

<a name="fillAndPostInfo"></a>

## fillAndPostInfo(data, loadFunction)
Post info object of given data

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | data object |
| loadFunction | <code>function</code> | load function |

<a name="createBaseCycle"></a>

## createBaseCycle(data, loadFunction)
Create base cycle

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | data object |
| loadFunction | <code>function</code> | load function |

<a name="fillCycle"></a>

## fillCycle(cycle)
Fill given cycle

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| cycle | <code>Object</code> | changes of the cycle |

<a name="fillCycles"></a>

## fillCycles(data, loadFunction)
Fill cycles

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | data object |
| loadFunction | <code>function</code> | load function |

<a name="postCycleAfterBake"></a>

## postCycleAfterBake(cycle, data, info, commands)
Post given cycles Historian. (Create Historian object from entities)

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| cycle | <code>integer</code> | cycle number |
| data | <code>Object</code> | cycle data |
| info | <code>Object</code> | info object |
| commands | <code>Array.&lt;Object&gt;</code> | array of command objects |

<a name="fillHistoryWithCycleCommands"></a>

## fillHistoryWithCycleCommands(historyManager, commands, cycleData)
Fill history with cycle commands.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| historyManager | <code>Object</code> | object of ``HistoryManager`` |
| commands | <code>Array.&lt;Object&gt;</code> | array of command objects |
| cycleData | <code>Object</code> | cycle data |

<a name="fillHistoryWithCycleCommand"></a>

## fillHistoryWithCycleCommand(historyManager, command, data)
Fill history with cycle command.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| historyManager | <code>Object</code> | object of ``HistoryManager`` |
| command | <code>Object</code> | command object |
| data | <code>Object</code> | cycle data |

<a name="fillHistoryWithCycleObject"></a>

## fillHistoryWithCycleObject(historyManager, cycleObject, cycle) ⇒ <code>Object</code>
Fill history with cycle object.

**Kind**: global function  
**Returns**: <code>Object</code> - object of ``HistoryManager``  

| Param | Type | Description |
| --- | --- | --- |
| historyManager | <code>Object</code> | object of ``HistoryManager`` |
| cycleObject | <code>Object</code> | cycle object |
| cycle | <code>integer</code> | cycle number |

<a name="fillHistoryWithHumanObjects"></a>

## fillHistoryWithHumanObjects(historyManager, objectList) ⇒ <code>Object</code>
Fill history with object of humans.

**Kind**: global function  
**Returns**: <code>Object</code> - object of ``HistoryManager``  

| Param | Type | Description |
| --- | --- | --- |
| historyManager | <code>Object</code> | object of ``HistoryManager`` |
| objectList | <code>Object</code> | object of objects |

<a name="fillHistoryWithObject"></a>

## fillHistoryWithObject(historyManager, objectList) ⇒ <code>Object</code>
Fill history with object.

**Kind**: global function  
**Returns**: <code>Object</code> - object of ``HistoryManager``  

| Param | Type | Description |
| --- | --- | --- |
| historyManager | <code>Object</code> | object of ``HistoryManager`` |
| objectList | <code>Object</code> | object of objects |

<a name="fillHistoryWithObjectIcons"></a>

## fillHistoryWithObjectIcons(historyManager, entities)
Fill history with object icons.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| historyManager | <code>Object</code> | object of ``HistoryManager`` |
| entities | <code>Array.&lt;Object&gt;</code> | array of entity objects |

<a name="createLinesList"></a>

## createLinesList(objectList, list)
Create and add border lines to the specific array.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| objectList | <code>Object</code> | object of objects |
| list | <code>Array.&lt;float&gt;</code> | array that lines added to |

<a name="fillBorderLines"></a>

## fillBorderLines(historyManager, lines)
Fill history with border lines.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| historyManager | <code>Object</code> | object of ``HistoryManager`` |
| lines | <code>Array.&lt;float&gt;</code> | apexes |

<a name="consturctor"></a>

## consturctor(data, loadFunction)
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | data |
| loadFunction | <code>function</code> | load function |


