import React, { Component, PropTypes } from 'react';
import InstString from './instrument-string';

const chord = {
    name: 'dm',
    instrument: 'mandolin',
    fingerings: [
        { string: 'G', fret: 2 },
        { string: 'D', fret: 3 },
        { string: 'A', fret: 5 },
        { string: 'E', fret: 0 },
    ],
};

export default class Chord extends Component {
    render() {
        console.log(InstString);
        const maxFret = Math.max.apply(null, chord.fingerings.map(string => string.fret));
        return (
            <div className={`chord ${chord.name} max-fret-${maxFret} strings-${chord.fingerings.length}`}>
                {chord.fingerings.map(string => {
                    return <InstString
                        string={string}
                        maxFret={maxFret}
                    />
                })}
            </div>
        );
    }
}
