import React, { Component } from 'react'

class EventPractice extends Component {
  state = {
    username: '',
    message: ''
  }

  /*
  traunsform-class-properties 문법 사용을 위하여 아래는 주석 처리

    constructor(props) {
      super(props)
      this.handleChange = this.handleChange.bind(this)
      this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e) {
      this.setState({
        message: e.target.value
      })
    }

    handleClick() {
      alert(this.state.message)
      this.setState({
        message: ''
      })
    }

  traunsform-class-properties 문법 사용을 위하여 위에는 주석 처리
  */

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message)
    this.setState({
      username: '',
      message: ''
    })
  }

  // 사용자가 편하도록 enter키 눌렀을 때 입력완료(?) 처리하기
  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleClick()
    }
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="유저명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해보세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    )
  }
}

export default EventPractice
