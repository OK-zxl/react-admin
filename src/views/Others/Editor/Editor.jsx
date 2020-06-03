import React, { Component } from "react";
import BraftEditor from "braft-editor";
import "braft-editor/dist/index.css";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import { Layout } from "antd";
import "@/style/view-style/editor.scss";

class EditorView extends Component {
  state = {
    editorState: BraftEditor.createEditorState("<p>你好 <b>世界!</b></p>"),
    outputHTML: "<p>你好 <b>世界!</b></p>"
  };

  componentDidMount() {
    this.isLiving = true;
    setTimeout(this.setEditorContentAsync, 3000);
  }

  componentWillUnmount() {
    this.isLiving = false;
  }

  handleEditorChange = editorState => {
    this.setState({
      editorState: editorState,
      outputHTML: editorState.toHTML() //输出的内容
    });
  };

  setEditorContentAsync = () => {
    this.isLiving &&
      this.setState({
        editorState: BraftEditor.createEditorState(
          "前端,<b>世界上更新最快的职业!</b>"
        )
      });
  };

  render() {
    const { editorState } = this.state;
    return (
      <Layout className="animated fadeIn">
        <div>
          <CustomBreadcrumb arr={["其他", "博文撰写"]}></CustomBreadcrumb>
        </div>
        <div className="base-style">
          <div className="editor">
            <BraftEditor
              value={editorState}
              onChange={this.handleEditorChange}
            />
          </div>
        </div>
      </Layout>
    );
  }
}

export default EditorView;
