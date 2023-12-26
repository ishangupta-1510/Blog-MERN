import { useEffect, useState } from "react";
import Post from "../Post";
export default function IndexPgae() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);
  // console.log(posts.length);
  return (
    <>
      {console.log(posts.length)}
      {posts.map((post) => {
        return <Post {...post} />;
      })}
    </>
  );
}
