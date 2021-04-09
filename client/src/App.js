import { Component } from 'react'

import * as postService from './services/PostService'

import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Posts from './components/Posts/Posts';
import './App.css';


class App extends Component {
   
   state = {
      posts: []
   }

   componentDidMount() {
      postService.getAll().then(posts => {
         this.setState({ posts });
      })
   }

   render() {
      return (
         <div className="app">
            <Header />
            <div className="container">
               <Menu />
               <Posts posts={this.state.posts} />
            </div>
         </div>
      );
   }
}

export default App;