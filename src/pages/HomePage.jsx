import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { postDetailState } from "../store/atom";
import { useRecoilState } from "recoil";
const HomePage = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [posts, setPosts] = useRecoilState(postDetailState);

  useEffect(() => {
    setPosts([
      {
        id: 0,
        title: "산간 풍경",
        content:
          "산이 어루만지는 푸르름이 가슴 깊숙이 와 닿는 아름다운 풍경입니다. 여기서 시간이 멈춘 듯한 평온함을 느낄 수 있습니다.",
        imageUrl:
          "https://source.unsplash.com/800x600?mountain&" + Math.random(),
      },
      {
        id: 1,
        title: "도시의 밤",
        content:
          "번화가의 불빛이 반짝이는 도시의 밤. 이곳에서는 언제나 새로운 일이 일어나고 있습니다. 밤거리의 흥미로운 이야기에 빠져보세요.",
        imageUrl: "https://source.unsplash.com/800x600?city&" + Math.random(),
      },
      {
        id: 2,
        title: "멍멍이의 하루",
        content:
          "우리의 충실한 친구, 강아지. 그들의 단순하고 사랑스러운 모습에 항상 행복을 느낄 수 있습니다. 그들과 함께하는 하루는 언제나 행복이 가득합니다.",
        imageUrl: "https://source.unsplash.com/800x600?dog&" + Math.random(),
      },
      {
        id: 3,
        title: "커피 한 잔의 여유",
        content:
          "커피 한 잔과 함께하는 여유로운 시간. 따뜻한 햇살과 함께 커피 향을 느껴보세요. 일상의 소소한 행복이 여기에 있습니다.",
        imageUrl: "https://source.unsplash.com/800x600?coffee&" + Math.random(),
      },
      {
        id: 4,
        title: "스포츠의 열정",
        content:
          "스포츠는 열정의 무대입니다. 땀과 열정이 넘치는 현장에서 최고의 순간을 경험해보세요. 여기에서만 느낄 수 있는 짜릿함이 있습니다.",
        imageUrl: "https://source.unsplash.com/800x600?sport&" + Math.random(),
      },
    ]);
  }, []);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleCloseFullscreen = () => {
    setSelectedPost(null);
  };

  return (
    <HomeWrapper>
      {posts.map((post) => (
        <Post key={post.id} onClick={() => handlePostClick(post)}>
          <PostImage src={post.imageUrl} alt="Post Image" />
          <PostTitle>{post.title}</PostTitle>
          <PostContent>{post.content}</PostContent>
        </Post>
      ))}

      {selectedPost && (
        <FullscreenPost onClick={handleCloseFullscreen}>
          <PostImage src={selectedPost.imageUrl} alt="Post Image" />
        </FullscreenPost>
      )}
    </HomeWrapper>
  );
};

export default HomePage;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Post = styled.div`
  width: 100%;
  min-width: 300px;
  max-width: 500px;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const PostContent = styled.p`
  margin: 0;
  width: 100%;
  word-wrap: break-word;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
`;

const PostTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 24px;
  color: #000;
`;

const PostImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

const FullscreenPost = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 20px;
  box-sizing: border-box;

  ${PostImage}, ${PostTitle}, ${PostContent} {
    color: #fff;
  }
`;
