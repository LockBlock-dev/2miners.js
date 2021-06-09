# Methods

<dl>
<dt><a href="#blocks">blocks()</a> ⇒ <code>Promise</code></dt>
<dd><p>Get all pool blocks.</p>
</dd>
<dt><a href="#miners">miners()</a> ⇒ <code>Promise</code></dt>
<dd><p>Get all pool miners.</p>
</dd>
<dt><a href="#payments">payments()</a> ⇒ <code>Promise</code></dt>
<dd><p>Get all pool payments.</p>
</dd>
<dt><a href="#stats">stats()</a> ⇒ <code>Promise</code></dt>
<dd><p>Get all pool stats.</p>
</dd>
<dt><a href="#wallet">wallet(address)</a> ⇒ <code>Promise</code></dt>
<dd><p>Get an account stats.</p>
</dd>
</dl>

---

<a name="blocks"></a>

## blocks(coin) ⇒ <code>Promise</code>
Get all pool blocks.

**Kind**: method  
**Returns**: <code>Promise</code>  
**Example**  
```js
blocks()
```

<a name="miners"></a>

## miners() ⇒ <code>Promise</code>
Get all pool miners.

**Kind**: method  
**Returns**: <code>Promise</code>  
**Example**  
```js
miners()
```

<a name="payments"></a>

## payments() ⇒ <code>Promise</code>
Get all pool payments.

**Kind**: method  
**Returns**: <code>Promise</code>  
**Example**  
```js
payments()
```

<a name="stats"></a>

## stats() ⇒ <code>Promise</code>
Get all pool stats.

**Kind**: method  
**Returns**: <code>Promise</code>  
**Example**  
```js
stats()
```

<a name="wallet"></a>

## wallet(address) ⇒ <code>Promise</code>
Get an account stats.

**Kind**: method  
**Returns**: <code>Promise</code>  

| Param | Type | Description |
| --- | --- | --- |
| address | <code>String</code> | wallet address |

**Example**  
```js
wallet("0xfd2D76F7Cf04863F2B221E56Af6fF94105EC2e5e")
```
