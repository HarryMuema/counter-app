import React, { Component } from "react";

class Counter extends Component {
    state={
        value:this.props.value,
        // tags:["tag1", "tag2", "tag3"]
    }
    handleIncrement=product=>{
      console.log(product)
      this.setState({value:this.state.value+1})
    }
  render() {
    return(
        <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm" onClick={()=>this.handleIncrement({id:1})}>Increment</button>
            <button onClick={()=>this.props.onDelete(this.props.id)} className="btn btn-danger m-2 btn-sm">Delete</button>
            {/* <ul>
                {this.state.tags.map(tag=><li key={tag}>{tag}</li>)}
            </ul> */}
        </div>
    );
  }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? 'warning' : 'primary';
        return classes;
    }

  formatCount(){
    const {value}=this.state
    return value===0?'Zero':value
  }
}

export default Counter;
