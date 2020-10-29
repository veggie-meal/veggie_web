import React from 'react';
import { Calendar, Avatar } from 'antd';
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

function dateCellRender(value) {
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
        <Avatar style={{ backgroundColor: color, verticalAlign: 'middle' }} size="small"/>
    );
}

class MainCalendar extends React.Component {
    state = {
        value: moment('2017-01-25'),
        selectedValue: moment('2017-01-25'),
    };

    onSelect = value => {
        this.setState({
            value,
            selectedValue: value,
        });

        this.props.history.push(`/today/${value.format('YYYY-MM-DD')}`)

    };

    render() {
        const { value, selectedValue } = this.state;
        const history = this.props;
        return (
            <div className="site-calendar-demo-card">
                <Calendar
                    dateCellRender={dateCellRender}
                    fullscreen={false}
                    value={value}
                    onSelect={this.onSelect}
                />
            </div>
        );
    }
}

export default withRouter(MainCalendar);
