import React from 'react';
// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.css';
import 'froala-editor/css/froala_editor.pkgd.css';

// Require Font Awesome.
import '@fortawesome/fontawesome-free/css/all.css';

import FroalaEditor from 'react-froala-wysiwyg';

class Froala extends React.Component {

  constructor() {
    super();

    this.handleModelChange = this.handleModelChange.bind(this);

    this.state = {
      model: 'Example text'
    };
  }

  handleModelChange(model) {
    this.setState({
      model: model
    });
  }

  render() {
    return <div style={{ height: '400px' }}>
      <FroalaEditor
        model={this.state.model}
        onModelChange={this.handleModelChange}
      />
    </div>
  }
}

export default Froala;