import React from "react";

class Pokemon extends React.Component {
  render(){
    const { name, type, averageWeight, image } = this.props.prop
    return(
      <div className='bordas'>
        <img src={image} alt={name} />
        <p>{name}</p>
        <p>{type}</p>
        <p>{averageWeight.value}{averageWeight.measurementUnit}</p>     
      </div>

    )
  }
}

export default Pokemon;