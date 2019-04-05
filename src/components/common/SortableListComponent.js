import React, { Component } from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const SortableItem = SortableElement(({valueObject, valueProperty}) =>{
  return <li style={{"color": "#fff", "listStyleType": "none", "fontSize": "1.2em"}}>{valueObject[valueProperty]}</li>}
);

const SortableList = SortableContainer(({items, valueProperty}) => {
  return (
    <ul>
      {items.map((valueObject, index) => (
        <SortableItem key={`item-${index}`} index={index} valueObject={valueObject} valueProperty={valueProperty}/>
      ))}
    </ul>
  );
});

class SortableListComponent extends Component {
constructor(props){
super(props)
    this.state = {
      items: props.players
    };
}
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };
  render() {
    return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} valueProperty={this.props.valueProperty} />;
  }
}

export default SortableListComponent;
