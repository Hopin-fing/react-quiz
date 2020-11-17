import React from 'react';
import styles from './AnswerItem.module.css';

const AnswerItem = props => {
    const cls =[styles.AnswerItem]

        if(props.state) {
            cls.push(styles[props.state])
        }

        return (
            <li
                className={cls.join(' ')}
                onClick={() => props.onAnswerClick(props.answers.id)}
            >
                {props.answers.text}
            </li>
        )

};
export default AnswerItem;