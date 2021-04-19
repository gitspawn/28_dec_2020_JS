import React, { Component } from "react";
import Layout from "./Layout";
// import Tasks from "./Tasks/Tasks";
// import Clock from "./Clock";
// import Modal from "./Modal";
import Tabs from "./Tabs";
import tabs from "../tabs.json";
// import TestProps from './TestProps'

class App extends Component {
  // constructor() {
  //   super()
  //   console.log('App constructor')
  // }

  // componentDidMount() {
  //   console.log('App didmount in DOM')
  // }


  // componentDidUpdate(prevProps, prevState) {
  //   // return true
  // }


  state = {
    showModal: false
  }

  // toggleModal = () => {
  //   this.setState((prevState) => {
  //     return {
  //       showModal: !prevState.showModal
  //     }
  //   })
  //   console.log(this.state.showModal)
  // }

  toggleModal = () => {
    this.setState((prevState) => ({ showModal: !prevState.showModal }))
    console.log(this.state.showModal)
  }


  render() {
    // console.log('App render')
    let { showModal } = this.state
    return <Layout>
      {/* <Clock /> */}
      {/* Modal */}
      {/* {!showModal && (
        <button type="button" onClick={this.toggleModal}>
          Show modal
        </button>
      )}
      {showModal && (
        <div>
          <Modal onClose={this.toggleModal}>
            <h1>Modal window title</h1>
            <p>
              Modal window content
             </p>
            <button type="button" onClick={this.toggleModal}>Close modal</button>
          </Modal>
        </div>
      )} */}

      {/* <Tabs items={tabs}></Tabs> */}

    </Layout>;
  }
}


{/* <Tabs />
new Tabs */}

export default App;






import React, { Component } from 'react'

export default class App extends Component {
  // constructor() {
  //   super()
  //   this.state = {

  //   }
  // }


  state = {

  }

  componentDidMount() {
    // http,
    // addEventListener
    // this.setState()
  }

  componentDidUpdate() {
    // this.setState()
    // http,
    // Отдать на сторону
  }

  componentWillUnmount() {
    // http,
    // снимаем слушетели
    // снимаем таймеры
    // исключаем утечки памяти

  }

  shouldComponentUpdate(nextProps, nextState) {
    // чтобы небыло ререндера если ничего не поменялось 
  }


  render() {
    return (
      <div>

      </div>
    )
  }
}
