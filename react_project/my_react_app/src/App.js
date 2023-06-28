import './App.css';
import React/*, { useState }*/ from 'react';
//import ReactPaginate from 'react-paginate';

import CharacterList from './CharacterList';
import InputComponent from './InputComponent';

const characters = [
  {
    key: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human"
  },
  {
    key: 2,
    name: "Adjudicator Rick",
    status: "Dead",
    species: "Human"
  },
  {
    key: 3,
    name: "Alien Rick",
    status: "unknown",
    species: "Alien"
  },
  {
    key: 4,
    name: "Antenna Rick",
    status: "unknown",
    species: "Human"
  },
  
];

/*function PaginatedCharacters({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = characters.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(characters.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % characters.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div>
      <CharacterList currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}*/

const App = () => (
    <div className={'app'}>
      <InputComponent />
      <CharacterList items={characters}/>
      {/*<PaginatedCharacters itemsPerPage={2} />*/}
    </div>
);

export default App;
