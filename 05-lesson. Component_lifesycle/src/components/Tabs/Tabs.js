import React, { Component, PureComponent } from "react";
// PureComponent под капотом реализует shouldComponentUpdate

// export default class Tabs extends Component {
export default class Tabs extends Component {

  state = {
    activeIdx: 0
  }


  setActiveTabIdx = (idx) => {
    console.log(idx)
    this.setState({ activeIdx: idx })
  }


  // setActiveTabIdx = () => {
  //   console.log('Hello')
  // }
  shouldComponentUpdate(nextProps, nextState) {
    // console.log('nextProps', nextProps)
    // console.log('nextState', nextState)

    // console.log(nextState.activeIdx !== this.state.activeIdx)
    return nextState.activeIdx !== this.state.activeIdx
  }



  componentDidMount() {
    console.log(`DidMount ${Date.now()}`);
  }

  render() {
    console.log(`Tabs render ${Date.now()}`);

    let tab = this.props.items[this.state.activeIdx]

    {/* {console.log(this.props.items)} */ }
    return (
      <>
        <div>
          {this.props.items.map((item, idx) => (
            <>
              <button
                key={item.label}
                type="button"
                onClick={() => this.setActiveTabIdx(idx)}
                // on
                k={this.setActiveTabIdx}
              >
                {item.label}
              </button>
            </>
          ))}
        </div>
        <div>
          <h1>{tab.label}</h1>
          <p>{tab.content}</p>
        </div>
      </>
    );
  }
}


// let tab = this.props.items[this.state.activeIdx]

// let users = ['vova', 'sara', 'mike']
// let currentUser = users[0];