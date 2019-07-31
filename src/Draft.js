import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { convertToRaw, EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertToHTML } from 'draft-convert';


class Draft extends React.Component {
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

    return <div>
      <h1>Draft</h1>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={this.onEditorStateChange}
      />

      <textarea value={html} />

      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>

  }
}

export default Draft;
