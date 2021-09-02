/* eslint-disable */
import React from 'react';
import { Tabs } from './Components/Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

class App extends React.Component {
  state = {
    selectedTab: tabs[0],
  }

  //!принимает в парам Таб и записывает его в стейт
  onTabSelected = (tab) => {
    this.setState({
      selectedTab: tab,
    })
  };

  render() {
    return (
      <div className="App">
        <h1>Selected tab is&nbsp;{this.state.selectedTab.title}</h1>
        <Tabs
          tabs={tabs}
          selectedTabId={this.state.selectedTab.id}
          onSelect={this.onTabSelected}
        />
      </div>
    )
  }
}

export default App;
