import { connect } from 'react-redux';
import SubList from './sub_list';
import { toggleSub } from '../../../actions/sub_list_actions';


const mapStateToProps = state => ({
  subList: state.subList
});

const mapDispatchToProps = {
  toggleSub
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubList);
