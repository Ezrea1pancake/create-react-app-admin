import { connect } from 'react-redux';
import { setVisibilityFilter } from 'store/actions';
import Link from '../components/Link';

const mapStateToProps = (state, onwProps) => {
    return {
        active: onwProps.filter === state.visibilityFilter,
    };
};

const mapDispatchToProps = (dispatch, onwProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(onwProps.filter));
        },
    };
};

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;
