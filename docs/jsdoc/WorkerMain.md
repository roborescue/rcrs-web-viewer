# WorkerMain

## Functions

<dl>
<dt><a href="#wl">wl(log)</a></dt>
<dd><p>Submit log for Worker.</p>
</dd>
<dt><a href="#loadFunction">loadFunction(text, progress, end)</a></dt>
<dd><p>Load function.</p>
</dd>
<dt><a href="#progressReport">progressReport(text, progress, end)</a></dt>
<dd><p>Progress report.</p>
</dd>
<dt><a href="#postMapbounds">postMapbounds(minX, minY, maxX, maxY)</a></dt>
<dd><p>Post map bounds.</p>
</dd>
<dt><a href="#postCycleData">postCycleData(cycle, data)</a></dt>
<dd><p>Post cycle data object.</p>
</dd>
<dt><a href="#postBaseData">postBaseData(cycle, data)</a></dt>
<dd><p>Post cycle data object.</p>
</dd>
<dt><a href="#postInfo">postInfo(info)</a></dt>
<dd><p>Post info object.</p>
</dd>
<dt><a href="#handleIncomingMassage">handleIncomingMassage(e)</a></dt>
<dd><p>handle incoming massage</p>
</dd>
</dl>

<a name="wl"></a>

## wl(log)
Submit log for Worker.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| log | <code>string</code> | log content |

<a name="loadFunction"></a>

## loadFunction(text, progress, end)
Load function.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| text | <code>string</code> |  | status content |
| progress | <code>integer</code> |  | percentage of progress |
| end | <code>boolean</code> | <code>false</code> | is end of progress |

<a name="progressReport"></a>

## progressReport(text, progress, end)
Progress report.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | status content |
| progress | <code>integer</code> | percentage of progress |
| end | <code>boolean</code> | is end of progress |

<a name="postMapbounds"></a>

## postMapbounds(minX, minY, maxX, maxY)
Post map bounds.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| minX | <code>number</code> | Minimum X |
| minY | <code>number</code> | Minimum Y |
| maxX | <code>number</code> | Maximum X |
| maxY | <code>number</code> | Maximum Y |

<a name="postCycleData"></a>

## postCycleData(cycle, data)
Post cycle data object.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| cycle | <code>integer</code> | cycle number |
| data | <code>Object</code> | data object |

<a name="postBaseData"></a>

## postBaseData(cycle, data)
Post cycle data object.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| cycle | <code>integer</code> | cycle number |
| data | <code>Object</code> | data object |

<a name="postInfo"></a>

## postInfo(info)
Post info object.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| info | <code>Object</code> | info object |

<a name="handleIncomingMassage"></a>

## handleIncomingMassage(e)
handle incoming massage

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>Object</code> | massage object |


