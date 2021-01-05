let posts = []

function OnClickCriarPost() {
    const title = document.getElementById("titulo-post")
    const author = document.getElementById("autor-post")
    const content = document.getElementById("conteudo-post")
    
    const newPost = {
        title: title.value,
        author: author.value,
        content: content.value
    }

    posts.push(newPost)
    title.value = ""
    author.value = ""
    content.value = ""
    console.log(posts)
    insertPost()
}

function insertPost() {
    const containerPosts = document.getElementById("container-de-posts")
    containerPosts.innerHTML = ""
    for (let item of posts) {
        containerPosts.innerHTML += createPost(item)
    }
}

function createPost(iPost) {
    return "<div class='container-de-posts'>" +
    "<h3>" + iPost.title + "</h3>" +
    "<p><i>" + iPost.author + "</i></p>" +
    "<p>" + iPost.content + "</p>"+
    "</div>"
}