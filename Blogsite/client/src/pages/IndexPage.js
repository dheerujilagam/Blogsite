// import { response } from "express";
import Post from "../Post";
import React, { useEffect, useState } from "react";

function IndexPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/post').then(response => {
            response.json().then(posts => {
                setPosts(posts);
            });
        });
    }, []);
    return (
        <>
            {/* console.log(posts.length); */}
            {posts.length > 0 && posts.map(post => (
                <Post {...post}/>
            ))}
        </>
    );
}

export default IndexPage;