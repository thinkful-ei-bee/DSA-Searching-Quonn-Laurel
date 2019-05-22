import React from 'react';

export default function Form (props){
    
      return (
        <form onSubmit={props.handleSubmit}>
            <input type="text" />
          <input type="submit" value="Submit" />
        </form>
      );
  }