import React, { memo, useState, useEffect } from "react";
import * as S from "./style";
import { colleges } from "../../../common/Navbar/colleges";
import { useLocalStorage } from "@mantine/hooks";

// components
import LabeledInput from "../../molecules/LabeledInput";
import Btn from "../../atoms/Btn";
import LabeledSelector from "../../molecules/LabeledSelector";
import ApplyPageUpperDiv from "../../molecules/ApplyPageUpperDiv";

const converted_colleges = (colleges) => {
  return colleges.map((college) => {
    return { value: college.value, name: college.college };
  });
};

function MentorBasicInformation() {
  // eslint-disable-next-line no-unused-vars
  const [storage, setStorage] = useLocalStorage({
    key: "mentor_apply_info",
  });

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [college, setCollege] = useState("");
  const [university, setUniversity] = useState("");
  const [major, setMajor] = useState("");
  const [student_id, setStudent_id] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    setStorage((prev) => ({
      ...prev,
      name,
      gender,
      college,
      university,
      major,
      student_id,
      year,
      setStorage,
    }));
  }, [name, gender, college, university, major, student_id, year, setStorage]);

  return (
    <>
      <S.Wrapper>
        <ApplyPageUpperDiv
          title={"기본정보"}
          subtitle={"학과별 페이지에 나타나는 기본정보입니다."}
          contents={[
            "대학교, 단과대학, 학과 정보를 정확하게 작성해주세요.",
            "기본정보는 캐리어에서 사용하는 멘토님의 명합입니다.",
          ]}
        />
        <LabeledInput
          storage={"name"}
          value={name}
          handleChange={setName}
          placeholder="이름을 기입해주세요."
          name="이름"
        ></LabeledInput>
        <LabeledSelector
          name={"성별"}
          handleChange={setGender}
          options={[
            { value: "male", name: "남성" },
            { value: "female", name: "여성" },
          ]}
        ></LabeledSelector>
        <LabeledInput
          storage={"university"}
          value={university}
          handleChange={setUniversity}
          placeholder="본인의 대학교를 기입해주세요."
          name="대학교"
        ></LabeledInput>
        <LabeledSelector
          name={"단과대학"}
          handleChange={setCollege}
          options={converted_colleges(colleges)}
        ></LabeledSelector>
        <LabeledInput
          storage={"major"}
          value={major}
          handleChange={setMajor}
          placeholder="본인의 전공을 기입해주세요."
          name="전공"
        ></LabeledInput>
        <LabeledInput
          storage={"student_id"}
          value={student_id}
          handleChange={setStudent_id}
          placeholder="본인의 학번을 기입해주세요."
          name="학번"
        ></LabeledInput>
        <LabeledInput
          storage={"year"}
          value={year}
          handleChange={setYear}
          placeholder="본인의 학년을 기입해주세요."
          name="학년"
        ></LabeledInput>
        <S.RowWrapper>
          <Btn hide={true}>이전</Btn>
          <Btn to="../step2">다음</Btn>
        </S.RowWrapper>
      </S.Wrapper>
    </>
  );
}

export default memo(MentorBasicInformation);