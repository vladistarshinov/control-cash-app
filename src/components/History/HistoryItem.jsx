import React, { Component } from 'react';


class HistoryItem extends Component {
    render() {
        return (
            <li className={`history__item history__item-${this.props.transaction.plus 
                    ? 'plus'
                    : 'minus'
                }`
            }>
                {this.props.transaction.description}
                <span className="history__money">{this.props.transaction.amount}</span>
                <button className="history__delete">x</button>
            </li>
        )
    }
};

export default HistoryItem;

/* <li class="history__item  history__item-minus">Отдал долг
    <span class="history__money">-10000 ₽</span>
    <button class="history__delete">x</button>
</li> */