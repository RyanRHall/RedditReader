import { connect } from 'react-redux';
import SubSearch from './sub_search';
import { requestSubs } from '../../../actions/filter_actions';

const mapDispatchToProps = {
  requestSubs
};

export default connect(
  null,
  mapDispatchToProps
)(SubSearch);
