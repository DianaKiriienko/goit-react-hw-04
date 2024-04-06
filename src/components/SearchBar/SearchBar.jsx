import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import css from "./SearchBar.module.css";
import { GoSearch } from "react-icons/go";

const SearchBar = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!/^[a-zA-Z\s]*$/.test(query.trim())) {
            toast("❌   Please enter valid letters only.");
            return;
        }
        if (query.trim() === '') {
            toast.error("Please enter a search query.");
            return;
        }
        onSubmit(query);
        setQuery('');
    };

    return (
        <header className={css.header}>
            <form className={css.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search images and photos..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className={css.input}
                />
                <button type="submit" className={css.btn}><GoSearch size={20} /></button>
            </form>
            <Toaster position="top-right" />
        </header>
    );
};

export default SearchBar;