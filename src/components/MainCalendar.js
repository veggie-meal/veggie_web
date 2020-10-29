import React from 'react';
import { Button, Calendar, Avatar } from 'antd';
import { withRouter} from "react-router-dom";
import moment from 'moment';

const listData = {};
listData['2020-03-05'] = 'vegan';
listData['2020-03-06'] = 'vegan';
listData['2020-03-07'] = 'vegan';
listData['2020-03-08'] = 'vegan';
listData['2020-03-15'] = 'ovo';
listData['2020-03-25'] = 'ovo';
listData['2020-03-09'] = 'ovo';

function dateFullCellRender(value) {
    var color = '#faf3dd';
    console.log(listData[value.format('YYYY-MM-DD')])
    switch (listData[value.format('YYYY-MM-DD')]) {
        case ('vegan'):
            color = '#68b0ab';
            break;
        case ('ovo'):
            color = '#c8d5b9';
            break;

    }
    return (
        <Avatar style={{ textDecorationStyle: 'bold', color: 'black', backgroundColor: color, verticalAlign: 'middle' }} size="medium">
            {value.date()}
        </Avatar>
    );
}

class MainCalendar extends React.Component {
    state = {
        value: moment('2020-03-25'),
        selectedValue: moment('2020-03-25'),
    };

    onSelect = value => {
        if (this.state.value.format('YYYY-MM') == value.format('YYYY-MM')) {
            this.props.history.push(`/today/${value.format('YYYY-MM-DD')}`)
        }
        this.setState({
            value,
            selectedValue: value,
        });
    };

    onPanelChange = (value, mode) => {
        console.log(mode);
    }

    render() {
        const { value, selectedValue } = this.state;
        return (
            <div className="site-calendar-demo-card">
                <Calendar
                    dateFullCellRender={dateFullCellRender}
                    fullscreen={false}
                    value={value}
                    onSelect={this.onSelect}
                    onPanelChange={this.onPanelChange}
                />
            </div>
        );
    }
}

export default withRouter(MainCalendar);
