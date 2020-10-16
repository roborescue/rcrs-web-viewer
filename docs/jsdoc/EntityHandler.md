# EntityHandler

<a name="EntityHandler"></a>

## EntityHandler : <code>object</code>
**Kind**: global namespace  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| humans | <code>Array.&lt;string&gt;</code> |  |
| surfaces | <code>Array.&lt;string&gt;</code> |  |
| buildings | <code>Array.&lt;string&gt;</code> |  |
| roads | <code>Array.&lt;string&gt;</code> |  |
| blockades | <code>Array.&lt;string&gt;</code> |  |
| getColor | <code>function</code> | Get color of entity |
| getType | <code>function</code> | Get EntityName of Entity |
| getHP | <code>function</code> | Get HP value of Entity |
| getIcon | <code>function</code> | Get related icon of entity |
| isRoad | <code>function</code> | Is Road |
| isHuman | <code>function</code> | Is Humand |
| isSurface | <code>function</code> | Is Surface |
| isBlockade | <code>function</code> | Is Blockade |
| isBuilding | <code>function</code> | Is Building |
| getId | <code>function</code> | Get ID |
| getCenterOfPolygon | <code>function</code> | Get center of polygon |
| getHumanVertices | <code>function</code> | Get vertices of humans shape |
| getVertices | <code>function</code> | Get vertices of entity |


* [EntityHandler](#EntityHandler) : <code>object</code>
    * [.humans](#EntityHandler.humans) : <code>Array.&lt;string&gt;</code>
    * [.surfaces](#EntityHandler.surfaces) : <code>Array.&lt;string&gt;</code>
    * [.buildings](#EntityHandler.buildings) : <code>Array.&lt;string&gt;</code>
    * [.roads](#EntityHandler.roads) : <code>Array.&lt;string&gt;</code>
    * [.blockades](#EntityHandler.blockades) : <code>Array.&lt;string&gt;</code>
    * [.getColor(entity)](#EntityHandler.getColor) ⇒ <code>Array.&lt;float&gt;</code>
    * [.getType(entity)](#EntityHandler.getType) ⇒ <code>string</code>
    * [.getHP(entity)](#EntityHandler.getHP) ⇒ <code>integer</code>
    * [.getIcon(entity)](#EntityHandler.getIcon) ⇒ <code>string</code> \| <code>boolean</code>
    * [.isRoad(entity)](#EntityHandler.isRoad) ⇒ <code>boolean</code>
    * [.isHuman(entity)](#EntityHandler.isHuman) ⇒ <code>boolean</code>
    * [.isSurface(entity)](#EntityHandler.isSurface) ⇒ <code>boolean</code>
    * [.isBlockade(entity)](#EntityHandler.isBlockade) ⇒ <code>boolean</code>
    * [.isBuilding(entity)](#EntityHandler.isBuilding) ⇒ <code>boolean</code>
    * [.getId(entity)](#EntityHandler.getId) ⇒ <code>integer</code>
    * [.getPositionHistory(entity)](#EntityHandler.getPositionHistory) ⇒ <code>Array.&lt;float&gt;</code>
    * [.getCenterOfPolygon(entity)](#EntityHandler.getCenterOfPolygon) ⇒ <code>Array.&lt;float&gt;</code> \| <code>boolean</code>
    * [.getHumanVertices(cx, cy, r, cuts)](#EntityHandler.getHumanVertices) ⇒ <code>Array.&lt;float&gt;</code>
    * [.getVertices(entity)](#EntityHandler.getVertices) ⇒ <code>Array.&lt;float&gt;</code>

<a name="EntityHandler.humans"></a>

### EntityHandler.humans : <code>Array.&lt;string&gt;</code>
Array includes EntityName of humans

**Kind**: static property of [<code>EntityHandler</code>](#EntityHandler)  
<a name="EntityHandler.surfaces"></a>

### EntityHandler.surfaces : <code>Array.&lt;string&gt;</code>
Array includes EntityName of surfaces

**Kind**: static property of [<code>EntityHandler</code>](#EntityHandler)  
<a name="EntityHandler.buildings"></a>

### EntityHandler.buildings : <code>Array.&lt;string&gt;</code>
Array includes EntityName of buildings

**Kind**: static property of [<code>EntityHandler</code>](#EntityHandler)  
<a name="EntityHandler.roads"></a>

### EntityHandler.roads : <code>Array.&lt;string&gt;</code>
Array includes EntityName of roads

**Kind**: static property of [<code>EntityHandler</code>](#EntityHandler)  
<a name="EntityHandler.blockades"></a>

### EntityHandler.blockades : <code>Array.&lt;string&gt;</code>
Array includes EntityName of blockades

**Kind**: static property of [<code>EntityHandler</code>](#EntityHandler)  
<a name="EntityHandler.getColor"></a>

### EntityHandler.getColor(entity) ⇒ <code>Array.&lt;float&gt;</code>
Get color of Entity

**Kind**: static method of [<code>EntityHandler</code>](#EntityHandler)  
**Returns**: <code>Array.&lt;float&gt;</code> - - color  

| Param | Type | Description |
| --- | --- | --- |
| entity | <code>Object</code> | entity object |

<a name="EntityHandler.getType"></a>

### EntityHandler.getType(entity) ⇒ <code>string</code>
Get EntityName of Entity

**Kind**: static method of [<code>EntityHandler</code>](#EntityHandler)  
**Returns**: <code>string</code> - entity name  

| Param | Type | Description |
| --- | --- | --- |
| entity | <code>Object</code> | entity object |

<a name="EntityHandler.getHP"></a>

### EntityHandler.getHP(entity) ⇒ <code>integer</code>
Get HP value of Entity

**Kind**: static method of [<code>EntityHandler</code>](#EntityHandler)  
**Returns**: <code>integer</code> - HP  

| Param | Type | Description |
| --- | --- | --- |
| entity | <code>Object</code> | entity object |

<a name="EntityHandler.getIcon"></a>

### EntityHandler.getIcon(entity) ⇒ <code>string</code> \| <code>boolean</code>
Get related icon of entity

**Kind**: static method of [<code>EntityHandler</code>](#EntityHandler)  
**Returns**: <code>string</code> \| <code>boolean</code> - returns boolean if entity hasn't any icon  

| Param | Type | Description |
| --- | --- | --- |
| entity | <code>Object</code> | entity object |

<a name="EntityHandler.isRoad"></a>

### EntityHandler.isRoad(entity) ⇒ <code>boolean</code>
Is Road

**Kind**: static method of [<code>EntityHandler</code>](#EntityHandler)  
**Returns**: <code>boolean</code> - Is Road  

| Param | Type | Description |
| --- | --- | --- |
| entity | <code>Object</code> | entity object |

<a name="EntityHandler.isHuman"></a>

### EntityHandler.isHuman(entity) ⇒ <code>boolean</code>
Is Human

**Kind**: static method of [<code>EntityHandler</code>](#EntityHandler)  
**Returns**: <code>boolean</code> - Is Human  

| Param | Type | Description |
| --- | --- | --- |
| entity | <code>Object</code> | entity object |

<a name="EntityHandler.isSurface"></a>

### EntityHandler.isSurface(entity) ⇒ <code>boolean</code>
Is Surface

**Kind**: static method of [<code>EntityHandler</code>](#EntityHandler)  
**Returns**: <code>boolean</code> - Is Surface  

| Param | Type | Description |
| --- | --- | --- |
| entity | <code>Object</code> | entity object |

<a name="EntityHandler.isBlockade"></a>

### EntityHandler.isBlockade(entity) ⇒ <code>boolean</code>
Is Blockade

**Kind**: static method of [<code>EntityHandler</code>](#EntityHandler)  
**Returns**: <code>boolean</code> - Is Blockade  

| Param | Type | Description |
| --- | --- | --- |
| entity | <code>Object</code> | entity object |

<a name="EntityHandler.isBuilding"></a>

### EntityHandler.isBuilding(entity) ⇒ <code>boolean</code>
Is Building

**Kind**: static method of [<code>EntityHandler</code>](#EntityHandler)  
**Returns**: <code>boolean</code> - Is Building  

| Param | Type | Description |
| --- | --- | --- |
| entity | <code>Object</code> | entity object |

<a name="EntityHandler.getId"></a>

### EntityHandler.getId(entity) ⇒ <code>integer</code>
Get ID

**Kind**: static method of [<code>EntityHandler</code>](#EntityHandler)  
**Returns**: <code>integer</code> - entity id  

| Param | Type | Description |
| --- | --- | --- |
| entity | <code>Object</code> | entity object |

<a name="EntityHandler.getPositionHistory"></a>

### EntityHandler.getPositionHistory(entity) ⇒ <code>Array.&lt;float&gt;</code>
Get position history

**Kind**: static method of [<code>EntityHandler</code>](#EntityHandler)  
**Returns**: <code>Array.&lt;float&gt;</code> - line sequence  

| Param | Type | Description |
| --- | --- | --- |
| entity | <code>Object</code> | entity object |

<a name="EntityHandler.getCenterOfPolygon"></a>

### EntityHandler.getCenterOfPolygon(entity) ⇒ <code>Array.&lt;float&gt;</code> \| <code>boolean</code>
Get center of polygon

**Kind**: static method of [<code>EntityHandler</code>](#EntityHandler)  
**Returns**: <code>Array.&lt;float&gt;</code> \| <code>boolean</code> - coordinates (returns false when entity hasn't apexes)  

| Param | Type | Description |
| --- | --- | --- |
| entity | <code>Object</code> | entity object |

<a name="EntityHandler.getHumanVertices"></a>

### EntityHandler.getHumanVertices(cx, cy, r, cuts) ⇒ <code>Array.&lt;float&gt;</code>
Get vertices of humans shape

**Kind**: static method of [<code>EntityHandler</code>](#EntityHandler)  
**Returns**: <code>Array.&lt;float&gt;</code> - - apexes  

| Param | Type | Description |
| --- | --- | --- |
| cx | <code>float</code> | X value of humans position |
| cy | <code>\*</code> | Y value of humans position |
| r | <code>\*</code> | Radius |
| cuts | <code>\*</code> | Circle cuts |

<a name="EntityHandler.getVertices"></a>

### EntityHandler.getVertices(entity) ⇒ <code>Array.&lt;float&gt;</code>
Get vertices of entity

**Kind**: static method of [<code>EntityHandler</code>](#EntityHandler)  
**Returns**: <code>Array.&lt;float&gt;</code> - - vertices  

| Param | Type | Description |
| --- | --- | --- |
| entity | <code>Object</code> | entity object |


