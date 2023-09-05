import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { postDetailState } from "../store/atom";

const Modal = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const [posts, setPosts] = useRecoilState(postDetailState);
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    if (image) {
      const url = URL.createObjectURL(image);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [image]);

  const handleUpload = () => {
    if (title && content && image) {
      const imageUrl = URL.createObjectURL(image);
      const newPost = {
        id: Date.now(),
        title,
        content,
        imageUrl,
      };

      setPosts((prevPosts) => [newPost, ...prevPosts]);

      setTitle("");
      setContent("");
      setImage(null);
      setPreviewUrl(null);
      onClose();
    } else {
      alert("제목, 내용 및 이미지를 모두 입력하세요.");
    }
  };

  return isOpen ? (
    <ModalWrapper onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {previewUrl && <ImagePreview src={previewUrl} alt="Image preview" />}
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목"
        />
        <TextArea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="내용"
        />

        <FileInputWrapper>
          <FileInputLabel>이미지 선택</FileInputLabel>
          <FileInput
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </FileInputWrapper>
        <Button onClick={handleUpload}>올리기</Button>
      </ModalContent>
    </ModalWrapper>
  ) : null;
};

const Header = ({ setPosts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <HeaderWrapper>
      <Logo href="/">Daily App</Logo>
      <Nav>
        <NavLink href="/daily">사진첩</NavLink>
        <NavLink
          href="/post"
          onClick={(e) => {
            e.preventDefault();
            toggleModal();
          }}
        >
          글쓰기
        </NavLink>
      </Nav>
      <Modal isOpen={isModalOpen} onClose={toggleModal} setPosts={setPosts} />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #ccc;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 1000;
`;

const Logo = styled.a`
  font-size: 1.5em;
  font-weight: bold;
  text-decoration: none;
  color: #000;
`;

const Nav = styled.nav`
  display: flex;
  gap: 15px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #000;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  max-width: 100%;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  height: 100px;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 10px;
  width: 100%;
  background-color: #28a745;
  border: none;
  color: #fff;
  cursor: pointer;
`;
const FileInputWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  margin-bottom: 30px;
  background-color: #f8f9fa;
  border: 1px solid #ced4da;
  border-radius: 4px;
  padding: 10px;
  width: 100%;
  cursor: pointer;
  text-align: center;
`;

const FileInput = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const FileInputLabel = styled.label`
  display: block;
  text-align: center;
`;

const ImagePreview = styled.img`
  display: block;
  width: 100%;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
