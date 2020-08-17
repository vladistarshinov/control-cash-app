import React, { Component } from 'react';

import HistoryItem from './HistoryItem';

class History extends Component {

    render() {
        return (
            <section className="history">
                <h3>История расходов</h3>
                <ul className="history__list">
                    <HistoryItem />
                </ul>
            </section>
        )
    }
};

export default History;