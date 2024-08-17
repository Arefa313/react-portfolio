function BlogItem(){
    return(
        <div className="col-4">
        <div className="blog-box">
          <div classname="blog-img">
            <img src="./img/post-1.jpg" classname="img-fluid" />
          </div>
          <div classname="blog-content">
            <h3 classname="blog-title">post title 1</h3>
            <p classname="blog-desc">
              Proin eget tortor risus. Pellentesque in ipsum id orci porta
              dapibus. Praesent sapien massa, convallis a pellentesque nec,
              egestas non nisi.
            </p>
          </div>
          <div classname="blog-footer">
            <div classname="post-author">
              <p classname="author">Milad Bahrami</p>
            </div>
            <div classname="post-date">
              <span classname="bi bi-clock"></span> 10 min
            </div>
          </div>
        </div>
      </div>
    )
}
export default BlogItem