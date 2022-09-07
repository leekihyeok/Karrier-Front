import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import BasicInfo from "./BasicInfo";
import DetailInfo from "./DetailInfo";
import MentorContact from "./MentorContact";
import LeftSidebar from "../../components/molecules/LeftSidebar";

//component

const navMenu = [
  {
    name: "기본 정보",
    link: "/mentor/account/management/basicinfo",
  },
  {
    name: "상세 정보",
    link: "/mentor/account/management/detailinfo",
  },
  {
    name: "멘토 연락처",
    link: "/mentor/account/management/mentorcontact",
  },
];

//styled-components
const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const PageWrapper = styled.div`
  width: 89%;
  display: flex;
  justify-content: center;
  margin-top: 2%;
`;

const MentorAccountMangement = () => {
  return (
    <Wrapper>
      {/* nav */}
      <LeftSidebar items={navMenu} />
      {/* route */}
      <PageWrapper>
        <Routes>
          <Route index element={<BasicInfo />} />
          <Route path="/basicinfo" element={<BasicInfo />} />
          <Route path="/detailinfo" element={<DetailInfo />} />
          <Route path="/mentorcontact" element={<MentorContact />} />
        </Routes>
      </PageWrapper>
    </Wrapper>
  );
};
export default React.memo(MentorAccountMangement);
