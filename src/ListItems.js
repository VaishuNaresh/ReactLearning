import React from 'react';
import './ListItem.css'
import FlipMove from 'react-flip-move'
function ListItems(props)
{
const items=props.items;
//here we are going to use map as equal to as for loop
const listItems= items.map(item =>
{return <div className="list" keys={item.key}>
{/*If we want to change or update the list item
we cannot edit the paragraph as item.texthere so we change as input 
<p>{item.text}*/}
<p>
{/*here it makes only read attribute for input type
<input type="text" id={item.key} value={item.text}/>
warning: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.
    at input
so we will use onchange now*/}
<input type="text"
 id={item.key} 
value={item.text} 
onChange ={
(e) => {
props.setUpdate(e.target.value,item.key)}}
/>
{/*on change we use arrow function with synthetic event with parameters.here parameters arevalues and keys*/}
<span>
<i className="fa fa-trash" onClick={() =>props.deleteItem(item.key)}></i></span></p>
</div>})
return(
<div>
<FlipMove duration={500} easing="ease-in-out">
{listItems}
</FlipMove>
</div>
)
}
export default ListItems;