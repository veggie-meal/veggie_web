import React from 'react';

import DateRangePicker from 'react-daterange-picker'
import 'react-daterange-picker/dist/css/react-calendar.css' // For some basic styling. (OPTIONAL)
//import moment from 'moment-range';
import * as Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

export class Calendar extends React.PureComponent {
    state = {
        value: null,
        printval: null,
    }

    onSelect = (range, states) => {
        console.log(range.format('YYYY/MM/DD'))
        console.log(states)
        this.setState({value: range, printval: range.format('YYYY/MM/DD')})
    }
    // handleSelect(range, states) {
    //     // range is a moment-range object
    //     this.setState({
    //         value: range,
    //         states: states,
    //     });
    // }

    render() {
        const stateDefinitions = {
            available: {
                color: null,
                label: 'Available',
            },
            enquire: {
                color: '#ffd200',
                label: 'Enquire',
            },
            unavailable: {
                color: '#78818b',
                label: 'Unavailable',
            },
        };

        const dateRanges = [
            {
                state: 'enquire',
                range: moment.range(
                    moment().add(2, 'weeks').subtract(5, 'days'),
                    moment().add(2, 'weeks').add(6, 'days')
                ),
            },
            {
                state: 'unavailable',
                range: moment.range(
                    moment().add(3, 'weeks'),
                    moment().add(3, 'weeks').add(5, 'days')
                ),
            },
        ];

        return (
            <div style={{backgroundColor:"yellow", padding:"5px"}}>
                <div style={{backgroundColor:"white"}}>
                <DateRangePicker
                    defaultState="available"
                    dateStates={dateRanges}
                    onSelect={this.onSelect}
                    value={this.state.value}
                    selectionType={"single"}
                    stateDefinitions={stateDefinitions}
                />
                </div>
                <span>{this.state.printval}</span>
            </div>
        )
    }
}
