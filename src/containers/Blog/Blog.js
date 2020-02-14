import React, { Component } from 'react';
import axios from '../../axios';
import { Route, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import FullPost from '../../components/BlogSection/FullPost/FullPost';
import Spinner from '../../components/UI/Spinner/Spinner';
import PlayGame from '../../components/UI/PlayGame/PlayGame';
import Game from '../../components/Game/Game';
import Auxi from '../../hoc/Auxi/Auxi';
import Bottom from '../../components/Navigation/Bottom/Bottom';
import PostNav from '../../components/BlogSection/PostNav/PostNav';

class Blog extends Component {
  state = {
    posts: [],
    error: false
  }

  componentDidMount(){
       axios.get('/blog-posts.json')
        .then(response => {
          const posts = [];
           for(let key in response.data){
              if(key !== "underConstruction"){
                posts.push({
                  post: response.data[key].post,
                  config: response.data[key].config,
                  id: key
                })
              }

           };
           this.setState({posts: posts, error: false});
           console.log(this.state);
        })
         .catch( error => {
            this.setState({error: true});
         });
  }
  fullPostHandler = (id) => {
    this.props.history.push({pathname: '/my-blog/' + id});
    
  }
  gameOpenHandler = () => {
    this.props.history.push({pathname: '/my-blog/game'});
  }
  render(){
    let spinner = this.state.error
    ? <div style={{margin: "100px auto auto"}}>
          <h5>Something went wrong.</h5>
      </div>
    : <Spinner />;

     if(this.state.posts[0]){
        spinner = (
        <Auxi>
        <section className="Section-Blog">
          <div className="my-blog-section">
             <nav className="side-nav">
             <p className="side-main-text">So'nggi postlar</p>
             {this.state.posts.map(object => {
                return (
                <PostNav
                  key={object.id}
                  config={object.config}
                  title={object.post.title}
                  clicked={() => this.fullPostHandler(object.id)}/>
                );
             })}
             <PlayGame clicked={this.gameOpenHandler} />
             </nav>
             <article className="blog-content">
            <Switch>
               <Route path="/my-blog/game" exact component={Game} />
               <Redirect from="/my-blog/error" to="/my-blog" />
               <Route path={this.props.match.url+'/:id'} exact component={FullPost} />
             </Switch>
             </article>


         </div>

         </section>
         <Bottom />
         </Auxi>
        );
     }
     return(
      <Auxi>
             {spinner}
      </Auxi>
     );
  }
}

export default Blog;


// import { Nav } from 'react-bootstrap';
// import Post from '../../components/BlogSection/Post/Post';
// import Auxi from '../../hoc/Auxi/Auxi';
// import image from '../../assets/imgs/1.jpg';
