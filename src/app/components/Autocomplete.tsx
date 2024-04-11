'use client'
import { useState } from 'react';
import Time from './Time';

interface AutocompleteProps {
  suggestions: string[];
}


const Autocomplete: React.FC<AutocompleteProps> = ({ suggestions }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);

    if (inputValue.length >= 3) {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions(["type min 3 values"]);
    }
  };
  

  return (
    <div className='bg-gray-600 w-[80vw] h-screen mx-auto mt-[5vw]'>
        <h2 className='text-white font-bold text-center'>Enter text to search</h2>
     <div className='flex justify-center my-[2vw]'>
      <input type="text" value={inputValue} onChange={handleInputChange} className='w-[50vw] h-[2vw] bg-gray-300 ' 
      placeholder='enter your text '
      />
      </div >
      {filteredSuggestions.length > 0 && (
        <ul>
          {filteredSuggestions.map((suggestion) => (
            <li key={suggestion}>{suggestion}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;