import React, { Component, Fragment } from 'react';

//Partial Components
import QuestionCell from './pFAQ/QuestionCell'

class FAQSection extends Component {
    render() {
        const { state: { currentQuestion }, props: { questions: { loading, results } } } = this
        return (
            <div className='FAQSection'>
                <div className="d-flex">
                    <h1>FAQ - Perguntas Frequentes</h1>
                </div>

                <table className="cw-100 mar-t-20 br-low overflow-hide c-white s-14">
                    <thead>
                        <tr className="table-head">
                            <th className="pad-l-20 txa-left">Pergunta</th>
                            <th style={{width: "13%"}}>
                                <i className="fas fa-plus-circle s-21 d-flex a-center clickable">
                                    <span className="pad-l-6 s-14 type-roboto">Nova Pergunta</span>
                                </i>
                            </th>
                            <th style={{width: "7%"}}>Ordem</th>
                            <th style={{width: "7%"}}>Editar</th>
                            <th style={{width: "7%"}}>Excluir</th>
                        </tr>
                    </thead>
                </table>
                
                <table className="cw-100 br-collapse s-14">
                    <tbody>
                        {
                            loading ?
                                null
                            :
                                results.map(({objectId, visible, answer, position, question}) => {
                                    if(visible){
                                        return (
                                            <Fragment>
                                                <h1>FAZER BUSCA</h1>
                                                <QuestionCell key={objectId} toggle={this.toggleQuestion} question={{position, question, objectId}}/>
                                                <div className={`answer-box ${currentQuestion.includes(objectId) ? "active" : "inactive"}`} id={`question-${objectId}`}>
                                                    <p className="lh-long">{answer}</p>
                                                </div>
                                            </Fragment>
                                        )
                                    }
                                })
                        }
                    </tbody>
                </table>
            </div>
        );
    }

    state = {
        currentQuestion: []
    }

    toggleQuestion = (id) => this.setState({
        currentQuestion: this.state.currentQuestion.includes(id) 
        ? 
            this.state.currentQuestion.filter(questionId => questionId !== id) 
        : 
            [...this.state.currentQuestion, id] 
    })
}

export default FAQSection;