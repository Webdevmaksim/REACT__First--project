import React from 'react';

const HistoryItem = ({ transction }) => (
                        <li className="history__item history__item-plus"> {transction.description}
                        <span className="history__money">
                        {transction.amount} ₽
                        </span>
                        <button className="history__delete">
                            x
                        </button>
                    </li>

                    
);
export default HistoryItem;
    // <li className="history__item  history__item-minus">Отдал долг
    //     <span className="history__money">-10000 ₽</span>
    //     <button className="history__delete">x</button>
    // </li>

