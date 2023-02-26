import {Posts} from "./components/Posts/Posts";
import {PostDetail} from "./components/PostDetail/PostDetail";
import {useState} from "react";

const App = ()=> {
    const [postDetails, setPostDetails] = useState(null)
  return (
    <div>
        <Posts setPostDetails={setPostDetails}/>
        {postDetails && <PostDetail postDetails={postDetails}/>}
    </div>
  );
}

export {App}
