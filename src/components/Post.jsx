import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/posts/postSlice";

export default function Posts() {
    const { posts, isLoading, isError, error } = useSelector(
        (state) => state.posts
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    let content;

    if (isLoading) {
        content = <h1>Loading posts ...</h1>;
    }
    if (!isLoading && isError) {
        content = <h1>{error}</h1>;
    }
    if (!isLoading && !isError && posts.length === 0) {
        content = <h1>No posts found!</h1>;
    }

    
    if (!isLoading && !isError && posts.length > 0) {
        content = (
           <div className="bg-black/30 w-[80%] mx-auto text-center text-black font-md">
             <ul className="border-1 rounded-md">
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
           </div>
        );
    }

    return <div>{content ? content : "no post"}</div>;
}