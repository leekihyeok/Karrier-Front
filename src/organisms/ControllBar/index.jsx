import { useSearchParams } from "react-router-dom";
import SortingBar from "../../components/molecules/SortingBar";
import { Space } from "@mantine/core";
import Btn from "../../components/atoms/Btn";
import * as S from "./style";

const ControllBar = ({
  searchBarToTheRight,
  type,
  lefttxt,
  leftnum,
  withBtn,
  onClickBtn,
  sortType,
  sortTypeOptions,
  onChangeSortType,
  searchTypeOptions,
  searchType,
  onChangeSearchType,
  onChangeSearchValue,
  searchValue,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <S.Wrapper>
      {lefttxt && (
        <div>
          <S.Text type={type}>{lefttxt}</S.Text>
          <S.Text style={{ marginLeft: "1em" }}>{leftnum}</S.Text>
        </div>
      )}
      <SortingBar
        type={type}
        sortType={sortType}
        sortTypeOptions={sortTypeOptions}
        onChangeSortType={onChangeSortType}
      ></SortingBar>
      {/* <SearchBar
        type={type}
        withBtn={withBtn}
        onClickBtn={onClickBtn}
        searchType={searchType}
        searchValue={searchValue}
        searchTypeOptions={searchTypeOptions}
        onChangeSearchType={onChangeSearchType}
        onChangeSearchValue={onChangeSearchValue}
      ></SearchBar> */}
      {searchTypeOptions && (
        <S.SearchBar searchBarToTheRight={searchBarToTheRight}>
          <select
            style={{
              height: "2.25em",
              border: "none",
            }}
            name="searchOption"
            id="searchOption"
            onChange={(event) => {
              searchParams.delete(searchType);
              onChangeSearchType(event.target.value);
            }}
          >
            {searchTypeOptions.map((searchType, idx) => (
              <option key={idx} value={searchType.value}>
                {searchType.name}
              </option>
            ))}
          </select>
          <S.Input
            value={searchValue}
            onChange={(event) => {
              onChangeSearchValue(event.target.value);
              // 원래 있던 쿼리에 다른 쿼리 더하기!
              searchParams.set(searchType, event.target.value);
              setSearchParams(searchParams);
            }}
            placeholder="입력하세요."
          ></S.Input>
        </S.SearchBar>
      )}
      {withBtn ? (
        <Btn type={type} handleClick={onClickBtn}>
          작성하기
        </Btn>
      ) : null}
    </S.Wrapper>
  );
};

export default ControllBar;
