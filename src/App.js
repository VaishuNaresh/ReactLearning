//import logo from './logo.svg';
import './App.css';
import React from 'react';
import ListItems from './ListItems'
import 'font-awesome/css/font-awesome.min.css';
import FlipMove from 'react-flip-move';

class App extends React.Component{
constructor(props){
super(props);
//creating a state
//Two variables---items array and object for current item
//initially the key and text are empty value
this.state={items:[],
currentItem:{
text:'',
key:' '}}

//why we use this line because without this we get an error as
//typeError:cannot read property 'setState' of undefined
//we should declare inside the constructor and outside state for this example only
this.handleInput =this.handleInput.bind(this);
this.addItem =this.addItem.bind(this);
this.deleteItem=this.deleteItem.bind(this);
this.setUpdate=this.setUpdate.bind(this);
}

handleInput(e)
{
this.setState({
currentItem:{
text:e.target.value,
key:Date.now()}})}

addItem(e)
{
e.preventDefault();
const newItem=this.state.currentItem;
console.log(newItem);

if(newItem.text!=="")
//destructuring
{const newItems =[...this.state.items,newItem];
this.setState({
items:newItems,
currentITem:{
text:'',
key:''
}

})}}
deleteItem(key){
const filteredItems=this.state.items.filter(item =>item.key!==key);
this.setState({
items:filteredItems})}
setUpdate(text,key)
{
const items=this.state.items;
items.map(item=>{
if(item.key===key)
{item.text=text;}})
/*here we do update the state with the new items*/
this.setState({
items:items})


}


render()
{
return(
<div className="App">
<header>
<form id="to-do-form" onSubmit={this.addItem}>
<input type="text" placeholder="Enter text" value={this.state.currentItem.text}
onChange={this.handleInput}/>
<button type="submit">Add</button></form>
</header>

<ListItems items={this.state.items}
deleteItem={this.deleteItem}
setUpdate={this.setUpdate}></ListItems></div>
);
}}
//we call listitem upline
export default App;
//why we use curly braces in variables and methods because it is jsx(in js variables and methods are including inside the html file)