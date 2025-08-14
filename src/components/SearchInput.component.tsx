const SearchInput = ({
  searchText,
  changeSearchText,
}: {
  searchText: string;
  changeSearchText: (text: string) => void;
}) => {
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

export default SearchInput;
