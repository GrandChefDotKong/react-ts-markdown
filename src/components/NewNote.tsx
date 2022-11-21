import React from 'react';
import { NoteData, Tag } from '../App';
import NoteForm from './NoteForm';

type NewNoteProps = {
  onSubmit: (data: NoteData) => void
  onAddTag: (tag: Tag) => void,
  availableTags: Tag[],
}

const NewNote = ({ onSubmit, onAddTag, availableTags }: NewNoteProps) => {
  return (
    <>
      <h1 className="mb-4">New Note</h1>
      <NoteForm onAddTag={onAddTag} onSubmit={onSubmit} availableTags={availableTags} />
    </>
  )
}

export default NewNote;