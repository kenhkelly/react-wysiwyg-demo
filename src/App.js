import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import { convertToHTML } from 'draft-convert';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    }, () => console.log(convertToRaw(this.state.editorState.getCurrentContent())));
  };

  render() {
    const { editorState } = this.state;
    const html = convertToHTML(editorState.getCurrentContent());
    console.log(editorState.getCurrentContent().getPlainText(), html);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={this.onEditorStateChange}
          />

          <textarea value={html} />

          <div dangerouslySetInnerHTML={{__html: html}} />
        </div>
      </div>
    );
  }
}

export default App;
