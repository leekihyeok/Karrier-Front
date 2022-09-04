import React, { memo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled, { css } from "styled-components";

import * as S from "./Navbar.style";

import { colleges } from "./colleges";

const colors = css`
  ${(props) => {
    switch (props.type) {
      case "qna":
        return "var(--primary-color)";
      case "reviews":
        return "var(--reviews-color)";
      case "notice":
        return "var(--nocie-color)";
      default:
        return "var(--primary-color)";
    }
  }}
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding-top: 1em;
  padding-bottom: 1em;
  padding-left: 3em;
  background-color: var(--bg-color-l);
`;

export const StyledH1 = styled.h1`
  font-size: 1.5rem;
  box-sizing: border-box;
  color: ${colors};
  font-weight: bold;
`;

function DropdownMajorSection({ type, college: idx }) {
  const navigate = useNavigate();
  const { major } = useParams();

  return (
    <>
      <Wrapper>
        <StyledH1 type={type}>{colleges[idx].college + " >"}</StyledH1>
        {colleges[idx].departments.map((dept, idx) => {
          return (
            <S.MajorItems
              type={type}
              className={dept === major ? "active" : null}
              onClick={() => navigate(`/community/${type || "qna"}/${dept}`)}
              key={idx}
            >
              {dept}
            </S.MajorItems>
          );
        })}
      </Wrapper>
    </>
  );
}

export default memo(DropdownMajorSection);
