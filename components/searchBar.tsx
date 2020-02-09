import React, { useContext, useState } from 'react';
import { Characters } from '../context/charactersContext';
import styled from '@emotion/styled';

const SearchContainer = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 20px;
`;

const SearchInput = styled.input`
    flex: 1 1 auto;
    padding: 6px;
`;

const SearchButton = styled.button`
    flex: 0 0 auto;
`;

const SearchBar = () => {
    const [query, setQuery] = useState();
    const { updateQuery } = useContext(Characters);

    function executeSearch(searchQuery: string) {
        if (typeof updateQuery === 'function') {
            updateQuery(searchQuery);
        }
    }

    return (
        <SearchContainer>
            <SearchInput
                type="text"
                value={query}
                onChange={event => setQuery(event.target.value)}
                onKeyPress={event => {
                    if (event.charCode === 13 && query.length > 0) {
                        executeSearch(query);
                    }
                }}
            />
            <SearchButton
                onClick={() => {
                    query && query.length > 0 && executeSearch(query);
                }}
            >
                Search
            </SearchButton>
        </SearchContainer>
    );
};

export default SearchBar;
