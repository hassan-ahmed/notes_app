import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';

// Import Style
// import styles from '../../components/NoteListItem/NoteListItem.css';

// Import Actions
import { fetchNote } from '../../NoteActions';
import { protectedTestRequest } from '../../../Auth/AuthActions';

// Import Selectors
import { getNote } from '../../NoteReducer';

// export function NoteDetailPage(props) {
class NoteDetailPage extends Component {

  constructor(props) {
    super(props);

    this.props.dispatch(protectedTestRequest());
  }

  render() {
    const { note } = this.props;

    return(
      <Card>
        <CardTitle title={note.title} />
        <CardText>
          {note.content}
        </CardText>
      </Card>
    );
  }
}

// Actions required to provide data for this component to render in server side.
NoteDetailPage.need = [params => {
  return fetchNote(params.cuid);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    note: getNote(state, props.params.cuid),
  };
}

NoteDetailPage.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(NoteDetailPage);
