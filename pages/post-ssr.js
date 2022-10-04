import NavbarComponent from "../components/NavbarComponent";
export default function Users(props) {
  return (
    <div>
      <>
        <NavbarComponent />
      </>
      <div className="container">
        <h1>Posts-SSR</h1>
        <div className="row justify-content-center d-flex">
          {props.posts.map((post) => (
            <div className="card w-25 m-3 " key={post.id}>
              <div class="card-body">
                <div className="mb-3" key={post.id}>
                  <h5 class="card-title">{post.title}</h5>
                  <p className="card-text">{post.body}</p>
                  <a href="#" className="btn btn-primary mb-5">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: { posts },
  };
}
