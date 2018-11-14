import React from 'react';
import AddOptions from './AddOptions';
import Options from './Options';
import Header from './Header';
import Actions from './Actions';


class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    }
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if(options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {

    }

    console.log('componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json)
      console.log('saving data');
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }))
  }

  handlePick() {
    const rundomNum = Math.floor(Math.random() * this.state.options.length);
    const options = this.state.options[rundomNum];
    alert(options);
  }

  handleAddOption(option) {
    if(!option) {
      return 'You can not add empty element';
    } else if(this.state.options.indexOf(option) > -1) {
      return 'This options already exist'
    }
    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer';
    return (<div>
      <Header subtitle={subtitle}/>
      <Actions
        hasOptions={this.state.options.length > 0}
        handlePick={this.handlePick}
      />
      <Options
        options={this.state.options}
        handleDeleteOptions={this.handleDeleteOptions}
        handleDeleteOption={this.handleDeleteOption}
      />
      <AddOptions
        handleAddOption={this.handleAddOption}
      />
    </div>)
  }
}

export default IndecisionApp;
