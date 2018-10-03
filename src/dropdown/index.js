import React, { Component } from "react";
import "./dropdown.css";

class Dropdown extends Component {
  constructor(props) {
    super(props);

    // https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
    this.dropdownMenu = null;

    this.setDropdownMenuRef = element => {
      this.dropdownMenu = element;
    };

    this.showList = this.showList.bind(this);
    this.closeList = this.closeList.bind(this);
    this.listButtonClick = this.listButtonClick.bind(this);

    this.state = {
      showList: false
    };
  }

  showList(event) {
    event.preventDefault();

    this.setState({ showList: true }, () => {
      document.addEventListener("click", this.closeList);
    });
  }

  closeList(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showList: false }, () => {
        document.removeEventListener("click", this.closeList);
      });
    }
  }

  listButtonClick(event) {
    console.log(this.props.label, event.target.textContent);
  }

  render() {
    return (
      <div className="dropdown">
        <button onClick={this.showList}>{this.props.label}</button>

        {this.state.showList ? (
          <div ref={this.setDropdownMenuRef} className="menu">
            <button onClick={this.listButtonClick}> Menu item 1 </button>
            <button onClick={this.listButtonClick}> Menu item 2 </button>
            <button onClick={this.listButtonClick}> Menu item 3 </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Dropdown;
