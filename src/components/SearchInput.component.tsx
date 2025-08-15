import { memo } from "react";

const SearchInput = ({
  searchText,
  changeSearchText,
}: {
  searchText: string;
  changeSearchText: (text: string) => void;
}) => {
  console.log("render SearchInput");

  return (
    <div>
      <input
        value={searchText}
        onChange={(e) => changeSearchText(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
};

export default memo(SearchInput);
