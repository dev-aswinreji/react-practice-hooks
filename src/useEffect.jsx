import { useEffect, useState } from "react";

function UseEffectLearning() {
  const [resourceType, setResourseType] = useState("users");
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("render ", count);
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
    // If we put empty array it means it is when initialized then this effect will work
    // onMount
  }, []);
  return (
    <>
      <div>
        <button onClick={() => setResourseType("users")}>users</button>
        <button onClick={() => setResourseType("posts")}>posts</button>
        <button onClick={() => setResourseType("comments")}>comments</button>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Increment
        </button>
      </div>
      <h1>{resourceType}</h1>
      <h1>{count}</h1>
    </>
  );
}

export default UseEffectLearning;
