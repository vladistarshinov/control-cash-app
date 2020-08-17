import React, { Component } from 'react';

import HistoryItem from './HistoryItem';

class History extends Component {
    render() {
        return (
            <section className="history">
                <h3>История расходов</h3>
                <ul className="history__list">
                    {this.props.transactions.length ? (this.props.transactions.map(t => 
                        <HistoryItem 
                            key={t.id} 
                            transaction={t} 
                        />
                    ))
                    : (
                        <>
                            <br/>
                            <p>Нет операций</p>
                        </>
                    )}
                </ul>
            </section>
        )
    }
};

export default History;