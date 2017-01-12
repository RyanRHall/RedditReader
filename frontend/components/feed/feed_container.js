import { connect } from 'react-redux';
import Feed from './feed';
import { listingsInView } from './selectors';

const mapStateToProps = state => ({
  listings: listingsInView(state)
});

export default connect(
  mapStateToProps
)(Feed);
