import React from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";
import PropTypes from "prop-types";

import { createBlogs } from "../../../actions/OtherActions";
import AdminHeader from "../AdminHeader";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import FileBase64 from "react-file-base64";

class AddBlogs extends React.Component {
  state = {
    image: "",
    description: "",
    title: "",
    month: "",
    date: 0,
    year: 2021,
    description1: "",
  };

  clearValues() {
    this.setState({
      description: "",
      title: "",
      description1: "",
    });
  }

  setDate() {
    const date = new Date();
    // const formatter = new Intl.dateTimeFormat("fr", { month: "short" });
    // const month = formatter.format(new Date());
    this.setState({
      date: date.getDate(),
      month: "Dec",
      year: date.getFullYear(),
    });
    // console.log(this.state);
  }

  onSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("photo", this.state.image);
    trackPromise(this.props.createBlogs(this.state, formData));
    // this.clearValues();
    // console.log(this.state);
  }

  handleKeyDown(e) {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  render() {
    return (
      <div>
        <AdminHeader />

        <div className="row">
          <div className="col-md-10 offset-md-2 ">
            <div className="op-header">
              <div className="section-header text-center">
                {/* <!-- <h2 className="f2 c3">Contact us</h2> --> */}
                <h1 className="f1 fw-7 cw">Recent posts and updates</h1>
                {/* <h2 className="f2 c3">Select Category</h2> */}
              </div>
            </div>
            <br />
            <div className="container">
              <form action="" onSubmit={this.onSubmit.bind(this)}>
                <div className="form-group">
                  <label>
                    Blog Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    className="form-control products_input"
                    value={this.state.title}
                    onChange={(e) => {
                      this.setState({ title: e.target.value });
                    }}
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>
                    Short Description <span className="text-danger">*</span>
                  </label>
                  <textarea
                    type="text"
                    name="description1"
                    className="form-control products_input"
                    value={this.state.description1}
                    onChange={(e) => {
                      this.setState({ description1: e.target.value });
                    }}
                    autoComplete="off"
                    required
                  ></textarea>
                </div>
                <label>
                  Description <span className="text-warning">*</span>
                </label>
                <CKEditor
                  editor={ClassicEditor}
                  data={this.state.description}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    this.setState({ description: data });
                    // console.log(this.state.description);
                  }}
                />
                <label>
                  Image <span className="text-warning">*</span>
                </label>
                <div className="form-control">
                  {/* <FileBase64
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) => this.setState({ image: base64 })}
                    required
                    className="form-control"
                  /> */}
                  <input
                    name="image"
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      this.setState({ image: e.currentTarget.files[0] });
                    }}
                  />
                </div>
                <br />
                <br />
                <input
                  type="submit"
                  value="submit"
                  className="btn btn-primary sub_btn mr-3"
                  onClick={() => this.setDate()}
                />
                <button
                  className="btn btn-danger sub_btn"
                  onClick={() => {
                    this.clearValues();
                  }}
                >
                  Clear
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddBlogs.propTypes = {
  aws_s3_image_url: PropTypes.string,
  msg: PropTypes.string,
  type: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
  };
};

export default connect(mapStateToProps, {
  createBlogs,
})(AddBlogs);
