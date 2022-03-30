import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class CartLink extends Component {
  state = { count: 0 };
  componentDidMount() {
    const data = { ...localStorage };
    this.setState({ count: Object.keys(data).length });
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps);
  }

  render() {
    // console.log(this.props.cartCount.count);
    return (
      <div>
        <div className="cart">
          <Link to="/cart">
            <span
              className="p-1 rounded-circle text-white cart_count"
              style={{ background: "rgb(255, 102, 0)" }}
            >
              {this.props.cartCount.count}
            </span>
            <img src="images/cart.svg" />
          </Link>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { cartCount: state.cartCount };
};

export default connect(mapStateToProps, {})(CartLink);
