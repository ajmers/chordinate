import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import ChordCard from '../components/chord-card/chord-card';

import { fetchChords } from '../state/actions';

import './app-wrapper.scss';

class AppWrapper extends Component {
    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(fetchChords());
    }

    render() {
        const { chords } = this.props;
        return (
            <div className='chords'>
                <div id='chord-wrapper'>
                    {chords.map(chord => {
                        return <ChordCard chord={chord}/>
                     })}
                </div>
            </div>
        );
    }
}

export default connect(state => ({ chords: state.chords }))(AppWrapper);