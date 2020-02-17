import React, { Component } from 'react';
import axios from '../../../axios';

import './Newpost.css';

class Newpost extends Component {
  state = {
      title: '',
      content: '',
      author: 'Sulaymon',
      submitted: false
  }
  postDataHandler = () => {
     const newDate = new Date();
    const post = {
      post: {
        title: this.state.title,
        content: this.state.content,
        author: this.state.author
      },
      config: {
         time: newDate.toLocaleTimeString("en-GB", {hour: '2-digit', minute:'2-digit'}),
         date: newDate.toLocaleDateString(),
         seen: 0
       }

    };
    axios.post('/blog-posts.json', post)
       .then(response => {
          console.log(response);

       })
       .catch(error => {
         console.log(error);
       });
      }
   render(){

      return(
        <div className="NewPost">
                <h2>Add a Post</h2>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea style={{whiteSpace: "pre-line"}} rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>

                <div className="select-auth">
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Sulaymon">Sulaymon</option>
                    <option value="Akmal">Akmal</option>
                </select>
                </div>
                <button onClick ={this.postDataHandler}>Add Post</button>
            </div>
      );
   }
}

export default Newpost;
