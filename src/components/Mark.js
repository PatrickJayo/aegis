import React, { Component } from 'react';

import './Mark.css';

import axios from 'axios';
import ReactMarkdown from 'react-markdown';

function Mark() {
  return (
    <div className="Mark">
      <MarkdownViewer />
    </div>
  );
}

class MarkdownViewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: null,
      urlGitHubFile: 'https://patrickjayo.github.io/budgety/README.md',
    };
  }

  componentDidMount() {
    axios
      .get(this.state.urlGitHubFile)
      .then((response) => {
        console.log(
          'Success in fetching the file from ' + this.state.urlGitHubFile
        );
        this.setState({ content: response.data });
      })
      .catch((error) => {
        console.err(
          'Error in fetching the file from ' + this.state.urlGitHubFile
        );
      });
  }

  render() {
    const { urlGitHubFile, content } = this.state;

    return (
      <div>
        <h3> Fetched from: </h3> {urlGitHubFile}
        <hr />
        <p>
          <ReactMarkdown source={content} />
        </p>
      </div>
    );
  }
}

export default Mark;
