const posts = [];

exports.getPost = (id) =>{
  return posts[id];
}

exports.getPosts = () => {
  return posts;
}

exports.addPost = (title, text) =>{
  posts.push(new Post(title,text))
}

exports.getSize = () =>{
  return posts.length;
}



class Post {
  constructor(title, text) {
    this.title = title;
    this.text = text;
  }

  get shortText() {
    return this.shortenText();
  }

  shortenText() {
    if (this.text.length > 100) {
      return this.text.substr(0, 100-1) + '...';
    } else {
      return this.text;
    }
  }

}
