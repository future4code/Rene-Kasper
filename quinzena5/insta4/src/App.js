import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'gabriel'}
          fotoUsuario={'https://picsum.photos/seed/a/50/50'}
          fotoPost={'https://picsum.photos/seed/a/200/150'}
        />
        <Post
          nomeUsuario={'renezeras'}
          fotoUsuario={'https://picsum.photos/seed/b/50/50'}
          fotoPost={'https://picsum.photos/seed/b/200/150'}
        />
      </div>
    );
  }
}

export default App;
