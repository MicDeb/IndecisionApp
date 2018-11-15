import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <button onClick={props.handleDeleteOptions}>Remove all</button>
    {props.options.length === 0 && <p>Please add an options to get started</p>}
      {
        props.options.map((elem) =>
          <Option
            key={elem}
            option={elem}
            handleDeleteOption={props.handleDeleteOption}
          />
        )
      }
  </div>
);

export default Options;
