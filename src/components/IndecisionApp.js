import React from 'react';
import AddOptions from './AddOptions';
import Options from './Options';
import Header from './Header';
import Actions from './Actions';
import OptionModal from './OptionModal';


class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption = optionToRemove => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }))
  }

  handlePick = () => {
    const rundomNum = Math.floor(Math.random() * this.state.options.length);
    const options = this.state.options[rundomNum];
    this.setState({selectedOption: options});
  }

  handleAddOption = option => {
    if(!option) {
      return 'You can not add empty element';
    } else if(this.state.options.indexOf(option) > -1) {
      return 'This options already exist'
    }
    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  }

  closeModal = () => {
    this.setState({selectedOption: false})
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


  render() {
    const subtitle = 'Put your life in the hands of a computer';
    const {
      selectedOption,
      options
    } = this.state;

    return (
      <div>
        <Header subtitle={subtitle}/>
        <div className="container">
          <Actions
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOptions
              handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
        <OptionModal
          selectedOption={selectedOption}
          hideModal={this.closeModal}
        />
      </div>
    )
  }
}

export default IndecisionApp;
