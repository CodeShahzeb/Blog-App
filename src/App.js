import './App.css';
import React from 'react';
import NavBar from './widgets/Nav';
import Home from './components/Home'
import EditBlog from './components/EditBlog';
import AddBlog from './components/AddBlog';
import { BrowserRouter, Route ,Switch } from 'react-router-dom'
import store from './redux/store';
import {Provider} from 'react-redux';
import SinglePost from './components/singlePost';



function App() {
  return (
    
    <Provider store={store}>
       
      <BrowserRouter>
      <NavBar />
       <Switch>
      
         <Route path='/' exact={true} component={Home} />
         <Route path='/home'  component={Home} />
         <Route path='/edit-blog/:id' component={EditBlog} />
         <Route path='/detail-blog/:id' component={SinglePost} />
         <Route path='/add-blog' component={AddBlog}/>
       </Switch>
       </BrowserRouter>
    </Provider>
  );
}

export default App;
