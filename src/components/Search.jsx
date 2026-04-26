import React from 'react';
import { Search as SearchIcon } from 'lucide-react';
import '../styles/Search.css';

const Search = ({ value = '', onChange, onSubmit, placeholder = 'What are you craving for today?' }) => {
    const handleKey = (e) => {
        if (e.key === 'Enter' && onSubmit) onSubmit(value);
    };

    return (
        <div className="hero-search-container">
            <div className="search-box">
                <SearchIcon size={24} color="#666" className="search-icon" />
                <input
                    type="text"
                    placeholder={placeholder}
                    className="search-input"
                    value={value}
                    onChange={onChange ? (e) => onChange(e.target.value) : undefined}
                    onKeyDown={handleKey}
                />
            </div>
        </div>
    );
};

export default Search;
