import { NoteData, Tag } from '../App';
import NoteForm from './NoteForm';
import { useNote } from './NoteLayout';

type EditProps = {
  onSubmit: (id: string, data: NoteData) => void
  onAddTag: (tag: Tag) => void,
  availableTags: Tag[],
}

const EditNote = ({ onSubmit, onAddTag, availableTags }: EditProps) => {
  const note = useNote();
  return (
    <>
      <h1 className="mb-4">Edit Note</h1>
      <NoteForm 
        title={note.title}
        tags={note.tags}
        markdown={note.markdown}
        onAddTag={onAddTag} 
        onSubmit={data => onSubmit(note.id, data)} 
        availableTags={availableTags} />
    </>
  )
}

export default EditNote;