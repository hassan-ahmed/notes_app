import React, { PropTypes } from 'react';

// Import Components
import NoteListItem from './NoteListItem/NoteListItem';

function NoteList(props) {
  return (
    <div className="listView">
      {
        props.notes.map(note => (
          <NoteListItem
            note={note}
            key={note.cuid}
            onDelete={() => props.handledeleteNote(note.cuid)}
          />
        ))
      }
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  handledeleteNote: PropTypes.func.isRequired,
};

export default NoteList;
