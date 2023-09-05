import React from "react";
import styled from "styled-components";

function HomeGuidePage(props) {
  return (
    <GuideWrapper>
      <GuideHeader>홈 페이지 소개</GuideHeader>
      <GuideContent>
        <Section>
          <SectionTitle>1. 포스트 작성</SectionTitle>
          <SectionContent>
            Daily App에서는 사용자들이 간편하게 포스트를 작성할 수 있습니다.
            '글쓰기' 링크를 클릭하여 제목, 내용, 그리고 이미지를 추가하여 새로운
            포스트를 생성할수 있습니다.
          </SectionContent>
        </Section>
        <Section>
          <SectionTitle>2. 사진첩 탐색</SectionTitle>
          <SectionContent>
            '사진첩' 링크를 통해 다른 사용자들이 올린 포스트들을 살펴보세요.
            다양한 사진과 이야기들을 확인 할 수 있으며 마음에 드는 포스트는 풀
            스크린으로 감상 할 수 있습니다.
          </SectionContent>
        </Section>
      </GuideContent>
    </GuideWrapper>
  );
}

export default HomeGuidePage;

const GuideWrapper = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  margin-top: 50px;
`;

const GuideHeader = styled.h1`
  text-align: center;
  margin-bottom: 50px;
  color: #343a40;
`;

const GuideContent = styled.div`
  font-size: 1rem;
  color: #495057;
  line-height: 1.5;
`;

const Section = styled.div`
  margin-bottom: 50px;
`;

const SectionTitle = styled.h2`
  margin-bottom: 10px;
  font-weight: bold;
  color: #212529;
`;

const SectionContent = styled.p`
  line-height: 1.5;
  margin-left: 10px;
`;
