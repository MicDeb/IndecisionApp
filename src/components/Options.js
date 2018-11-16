import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your options</h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
      >
        Remove all
      </button>
    </div>
    {props.options.length === 0 && <p className="widget__message">Please add an options to get started</p>}
      {
        props.options.map((elem, index) =>
          <Option
            key={elem}
            option={elem}
            handleDeleteOption={props.handleDeleteOption}
            count={index + 1}
          />
        )
      }
  </div>
);

export default Options;
