import React from 'react';
import RichTextEditor from 'react-rte';

class ReactRTE extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: RichTextEditor.createEmptyValue(),
    };

    this.onChange = this.onChange.bind(this);
    this.onChangeSource = this.onChangeSource.bind(this);
  }

  onChange(value) {
    this.setState({ value });
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(
        value.toString('html')
      );
    }
  }

  onChangeSource(event) {
    let source = event.target.value;
    let oldValue = this.state.value;
    this.setState({
      value: oldValue.setContentFromString(source, 'html'),
    });
  }

  render() {
    return (
      <div>
        <h1>React RTE (Based on Draft)</h1>
        <RichTextEditor
          value={this.state.value}
          onChange={this.onChange}
        />
        <textarea
          className="source"
          placeholder="Editor Source"
          value={this.state.value.toString('html')}
          onChange={this.onChangeSource}
        />
      </div>
    );
  }
}

/*
<p>hi there <a href="/asdf">asdf</a></p>
<p><br></p>
<p><br></p>
<p><img src="https://i.imgur.com/u34Kw3n.jpg" width="552" height="690"/></p>
<p><br></p>
<p><code>() =&gt; {</code></p>
<p><code>print "fat arrow"</code></p>
<h3>asdfasdf</h3>
<p><br></p>
<pre><code>class ReactRTE extends React.Component {<br>
 &nbsp;constructor(props) {<br>
 &nbsp;&nbsp;&nbsp;super(props)<br>
 &nbsp;&nbsp;&nbsp;this.state = {}<br>
 &nbsp;}<br>
<br>
 &nbsp;render() {<br>
 &nbsp;&nbsp;&nbsp;return &lt;div&gt;Hi&lt;/div&gt;<br>
 &nbsp;}<br>
}<br>
<br>
export default ReactRTE;<br>
<br>
</code></pre>
<p><br></p>
 */

export default ReactRTE;