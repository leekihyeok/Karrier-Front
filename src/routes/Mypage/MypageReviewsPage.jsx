import React, { useState } from "react";
import CommunityPostDiv from "../../organisms/CommunityPostDiv/index.jsx";
import CommunityNavbar from "../../organisms/CommunityNavbar/index.jsx";
import ControllBar from "../../organisms/ControllBar/index.jsx";
import * as S from "./style.js";

import { Text, Modal } from "@mantine/core";

const sortTypeOptions = [
  { value: "latest", name: "최신순" },
  { value: "unsolved", name: "미해결" },
  { value: "solved", name: "해결" },
];

const searchTypeOptions = [
  { value: "content", name: "질문내용" },
  { value: "title", name: "질문제목" },
  { value: "nickname", name: "닉네임" },
];

const dummyData = [
  {
    programNo: 1,
    programName: "컴공 맛보기",
    averageStar: 4.42857,
    reviewStar: 4.5,
    reviewNo: 1,
    nickname: "행복한바지",
    title: "수강후기 제목",
    content: "수강후기 내",
    comment: false,
    registerDate: "2022-08-19T18:00:23.460696",
    reviewLikeNo: 1,
  },
  {
    programNo: 1,
    programName: "컴공 맛보기",
    averageStar: 4.42857,
    reviewStar: 4.5,
    reviewNo: 3,
    nickname: "행복한바지",
    title: "수강후기 제목",
    content: "수강후기 내",
    comment: false,
    registerDate: "2022-08-20T15:14:52.563823",
    reviewLikeNo: 0,
  },
  {
    programNo: 1,
    programName: "컴공 맛보기",
    averageStar: 4.42857,
    reviewStar: 4.5,
    reviewNo: 4,
    nickname: "행복한바지",
    title: "수강후기 제목",
    content: "수강후기 내",
    comment: false,
    registerDate: "2022-08-20T15:14:57.326689",
    reviewLikeNo: 0,
  },
  {
    programNo: 1,
    programName: "컴공 맛보기",
    averageStar: 4.42857,
    reviewStar: 4.5,
    reviewNo: 5,
    nickname: "행복한바지",
    title: "수강후기 제목",
    content: "수강후기 내용 ",
    comment: false,
    registerDate: "2022-08-21T17:33:27.814259",
    reviewLikeNo: 0,
  },
  {
    programNo: 1,
    programName: "컴공 맛보기",
    averageStar: 4.42857,
    reviewStar: 4.5,
    reviewNo: 6,
    nickname: "행복한바지",
    title: "수강후기 제목",
    content: "수강후기 내용 ",
    comment: false,
    registerDate: "2022-08-21T17:35:29.620842",
    reviewLikeNo: 0,
  },
  {
    programNo: 1,
    programName: "컴공 맛보기",
    averageStar: 4.42857,
    reviewStar: 4,
    reviewNo: 7,
    nickname: "행복한바지",
    title: "수강후기 제목",
    content: "수강후기 내용 ",
    comment: false,
    registerDate: "2022-08-21T17:35:36.510593",
    reviewLikeNo: 0,
  },
  {
    programNo: 4,
    programName: "라라",
    averageStar: 2,
    reviewStar: 4,
    reviewNo: 1,
    nickname: "행복한바지",
    title: "수강후기 제목",
    content: "수강후기 내용 ",
    comment: false,
    registerDate: "2022-08-24T21:27:32.247857",
    reviewLikeNo: 0,
  },
  {
    programNo: 4,
    programName: "라라",
    averageStar: 2,
    reviewStar: 5,
    reviewNo: 2,
    nickname: "행복한바지",
    title: "수강후기 제목",
    content: "수강후기 내용 ",
    comment: false,
    registerDate: "2022-08-24T21:27:37.999857",
    reviewLikeNo: 0,
  },
  {
    programNo: 4,
    programName: "라라",
    averageStar: 2,
    reviewStar: 3.5,
    reviewNo: 3,
    nickname: "행복한바지",
    title: "수강후기 제목",
    content: "수강후기 내용 ",
    comment: false,
    registerDate: "2022-08-24T21:27:42.096914",
    reviewLikeNo: 0,
  },
];

// const dummyData = {
//   program_no: "1",
//   title: "고3 대비 컴퓨터 공학과의 진실",
//   questions: [
//     {
//       question_no: "1",
//       nickname: "소식돼지",
//       title: "경북대학교 컴퓨터 공학과 세부 학과는 뭐가있나요?",
//       content:
//         "안녕하세요 현재 컴퓨터공학과에 진학하고 싶어하는 고3입니다. 안녕하세요 현재 컴퓨터공학과에 진학하고 싶어하는 고3입니다. 안녕하세요 현재 컴퓨터공학과에 진학하고 싶어하는 고3입니다. 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라",
//       modify_date: new Date().toLocaleDateString() + "",
//       question_like_no: "10",
//       solve: "true",
//     },
//     {
//       question_no: "2",
//       nickname: "소식돼지",
//       title: "경북대학교 컴퓨터 공학과 세부 학과는 뭐가있나요?",
//       content:
//         "안녕하세요 현재 컴퓨터공학과에 진학하고 싶어하는 고3입니다. 저는 평소에 컴퓨터에 대해 좋아하고 관심이 참 많은데요..",
//       modify_date: new Date().toLocaleDateString() + "",
//       question_like_no: "9",
//       solve: "false",
//     },
//   ],
// };

function MypageQnAPage() {
  const [sortType, setSortType] = useState("latest");
  const [searchType, setSearchType] = useState("content");
  const [searchValue, setSearchValue] = useState("");
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <>
      <CommunityNavbar isAdVisible={false} type="reviews">
        마이페이지 수강후기
      </CommunityNavbar>
      <S.Wrapper>
        <Text style={{ marginTop: "0.5em" }} weight={"bold"} size="2rem">
          {"MY 질의응답"}
        </Text>
        <ControllBar
          type="reviews"
          withBtn={true}
          onClickBtn={setIsModalOpened}
          sortType={sortType}
          sortTypeOptions={sortTypeOptions}
          onChangeSortType={setSortType}
          onChangeSearchType={setSearchType}
          searchType={searchType}
          searchValue={searchValue}
          onChangeSearchValue={setSearchValue}
          searchTypeOptions={searchTypeOptions}
        ></ControllBar>
        <div>여기에 셀렉트 들어가야함</div>
        <Modal
          size="60%"
          centered
          opened={isModalOpened}
          onClose={() => setIsModalOpened(false)}
        >
          <S.CenterWrapper>
            <S.H1>질문이 해결되셨습니까?</S.H1>
            <div>
              <S.Button
                onClick={() => {
                  console.log("API");
                  alert("질문해결완료");
                }}
                type="yes"
              >
                예
              </S.Button>
              <S.Button onClick={() => setIsModalOpened(false)} type="no">
                아니오
              </S.Button>
            </div>
          </S.CenterWrapper>
        </Modal>
        {dummyData.map((question) => (
          <CommunityPostDiv data={question} />
        ))}
      </S.Wrapper>
    </>
  );
}

export default MypageQnAPage;
