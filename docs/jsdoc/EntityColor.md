# EntityColor

<a name="EntityColor"></a>

## EntityColor : <code>object</code>
**Kind**: global namespace  
**Properties**

| Name | Type |
| --- | --- |
| getDarker | <code>function</code> | 
| getBuildingColor | <code>function</code> | 
| getHumanColor | <code>function</code> | 
| getColor | <code>function</code> | 


* [EntityColor](#EntityColor) : <code>object</code>
    * [.getDarker(color)](#EntityColor.getDarker) ⇒ <code>Array.&lt;float&gt;</code>
    * [.getBuildingColor(fieryness)](#EntityColor.getBuildingColor) ⇒ <code>Array.&lt;float&gt;</code>
    * [.getHumanColor(type, hp)](#EntityColor.getHumanColor) ⇒ <code>Array.&lt;float&gt;</code>
    * [.getColor(entity)](#EntityColor.getColor) ⇒ <code>Array.&lt;float&gt;</code>

<a name="EntityColor.getDarker"></a>

### EntityColor.getDarker(color) ⇒ <code>Array.&lt;float&gt;</code>
Darken the color

**Kind**: static method of [<code>EntityColor</code>](#EntityColor)  
**Returns**: <code>Array.&lt;float&gt;</code> - - dark color  

| Param | Type | Description |
| --- | --- | --- |
| color | <code>Array.&lt;float&gt;</code> | color |

<a name="EntityColor.getBuildingColor"></a>

### EntityColor.getBuildingColor(fieryness) ⇒ <code>Array.&lt;float&gt;</code>
Get building color

**Kind**: static method of [<code>EntityColor</code>](#EntityColor)  
**Returns**: <code>Array.&lt;float&gt;</code> - color  

| Param | Type | Description |
| --- | --- | --- |
| fieryness | <code>integer</code> | fieryness value of building (0-8) |

<a name="EntityColor.getHumanColor"></a>

### EntityColor.getHumanColor(type, hp) ⇒ <code>Array.&lt;float&gt;</code>
Get Human color

**Kind**: static method of [<code>EntityColor</code>](#EntityColor)  
**Returns**: <code>Array.&lt;float&gt;</code> - - color  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | human's EntityName |
| hp | <code>integer</code> | HP value of human |

<a name="EntityColor.getColor"></a>

### EntityColor.getColor(entity) ⇒ <code>Array.&lt;float&gt;</code>
Get color of Entity

**Kind**: static method of [<code>EntityColor</code>](#EntityColor)  
**Returns**: <code>Array.&lt;float&gt;</code> - - color  

| Param | Type | Description |
| --- | --- | --- |
| entity | <code>Object</code> | Entity object |


