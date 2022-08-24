import * as S from "./style";
import { useState, useRef } from "react";
import { Text, Space } from "@mantine/core";
import CircleWithText from "../../components/molecules/CircleWithText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const CommunityPostDiv = ({ data: question }) => {
  const [clicked, setClicked] = useState(false);

  const textRef = useRef();

  return (
    <S.Wrapper>
      <S.RowWrapper>
        <S.ColWrapper clicked={clicked}>
          <Text size="2em">{question.title}</Text>
          <Space h="xs"></Space>
          <Text
            ref={textRef}
            className={clicked ? "onClicked" : "notClicked"}
            size="1em"
            color={"gray"}
          >
            {question.content}
          </Text>
          {clicked ? (
            <FontAwesomeIcon
              onClick={() => setClicked((prev) => !prev)}
              className="icon"
              icon={faChevronUp}
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => setClicked((prev) => !prev)}
              className="icon"
              icon={faChevronDown}
            />
          )}
        </S.ColWrapper>
        <S.ColWrapperCntr>
          <CircleWithText upper={question.question_like_no} lower={"좋아요"} />
        </S.ColWrapperCntr>
      </S.RowWrapper>
      <S.LowerRowWrapper>
        <div style={{ display: "flex", width: "80%" }}>
          <Text color={"gray"}>{question.nickname}</Text>
          {/* <Space w="xs"></Space>
          <Text color={"gray"}>{question.nickname}</Text> */}
        </div>
        <div style={{ display: "flex", width: "10%" }}>
          <Text color="gray">{question.modify_date}</Text>
        </div>
        <div
          style={{ display: "flex", width: "10%", justifyContent: "center" }}
        >
          <Text color={question.solve === "true" ? "var(--primary-color)" : ""}>
            {question.solve === "true" ? "해결" : "미해결"}
          </Text>
        </div>
      </S.LowerRowWrapper>
    </S.Wrapper>
  );
};

export default CommunityPostDiv;