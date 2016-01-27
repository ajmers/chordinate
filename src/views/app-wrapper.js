import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import ChordCard from '../components/chord-card/chord-card';
import ChordFilters from './chord-filter';

import { fetchChords } from '../state/actions';

import './app-wrapper.scss';

class AppWrapper extends Component {
    static propTypes = {
        fetchChords: PropTypes.func.isRequired,
        chords: PropTypes.arrayOf(PropTypes.object),
    };

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(fetchChords());
    }

    render() {
        const { chords } = this.props;
        return (
            <div>
                <div className='filters'>
                    <ChordFilters />
                </div>
                <div className='chords'>
                    {chords.map((chord, index) => {
                        return <ChordCard className='chordCard'
                            chord={chord} key={index}/>;
                    })}
                </div>
            </div>
        );
    }
}

export default connect(state => ({ chords: state.chords }))(AppWrapper);
