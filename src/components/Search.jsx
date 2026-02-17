import React from 'react';
import { Search as SearchIcon } from 'lucide-react';
import '../styles/Search.css';

const Search = () => {
    return (
        <div className="hero-search-container">
            <div className="search-box">
                <SearchIcon size={24} color="#666" className="search-icon" />
                <input
                    type="text"
                    placeholder="What are you craving for today?"
                    className="search-input"
                />
                <button className="search-btn">
                    Search
                </button>
            </div>
        </div>
    );
};

export default Search;
