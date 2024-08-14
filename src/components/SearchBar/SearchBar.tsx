import css from './SearchBar.module.css';

import toast, { Toaster } from 'react-hot-toast';
import { FormEvent, useRef } from 'react';

type SearchBarProps = {
  onSubmit: (topic: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }: SearchBarProps) => {
  const inputEl = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement
    const topic = inputEl.current?.value.trim();
    if (!topic) {
      toast('The search field can not be empty!', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
      return;
    }
    onSubmit(topic);
    form.reset()
  }
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          ref={inputEl}
          name='search'
          type='text'
          autoComplete='off'
          autoFocus
          placeholder='Search images and photos'
          className={css.input}
        />
        <Toaster />
        <button className={css.btnSubmit} type='submit'>
          Search
        </button>
      </form>
    </header>
  );
}
