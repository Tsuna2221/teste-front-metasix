import React, { Fragment } from 'react';

const QuestionCell = ({toggle, question: {objectId, position, question}}) => (
    <Fragment>
        <tr className="table-head question sd-heavy">
            <td onClick={() => toggle(objectId)} className="pad-l-20 txa-left clickable">{question}</td>
            <td className="txa-center w-bold" style={{width: "7%"}}>{position}</td>
            <td className="question-interact txa-center" style={{width: "7%"}}>
                <i className="fas fa-edit s-22 c-blue clickable"/>
            </td>
            <td className="question-interact txa-center" style={{width: "7%"}}>
                <i className="fas fa-trash s-22 c-red clickable"/>
            </td>
        </tr>
    </Fragment>
)

export default QuestionCell;