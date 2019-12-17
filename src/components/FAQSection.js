import React, { Component, Fragment } from 'react';

//Partial Components
import QuestionCell from './pFAQ/QuestionCell'
import SearchBar from './pFAQ/SearchBar'
import Button from "./pMisc/Button"

class FAQSection extends Component {
    render() {
        const { state: { currentQuestion, searchInput }, props: { questions: { loading, results } } } = this
        const filteredResults = results.filter(({question}) => question.toLowerCase().includes(searchInput.toLowerCase()))

        return (
            <div className='FAQSection'>
                <div className="faq-heading d-flex a-between">
                    <h1>FAQ - Perguntas Frequentes</h1>
                    <SearchBar applySearch={this.applySearch}/>
                </div>

                <table className="cw-100 mar-t-20 br-low overflow-hide c-white s-14">
                    <thead>
                        <tr className="table-head">
                            <th className="pad-l-20 txa-left">Pergunta</th>
                            <th className="head-cell" style={{width: "13%"}}>
                                <i className="fas fa-plus-circle s-21 d-flex a-center clickable">
                                    <span className="pad-l-6 s-14 type-roboto">Nova Pergunta</span>
                                </i>
                            </th>
                            <th className="head-cell" style={{width: "7%"}}>Ordem</th>
                            <th className="head-cell" style={{width: "7%"}}>Editar</th>
                            <th className="head-cell" style={{width: "7%"}}>Excluir</th>
                        </tr>
                    </thead>
                </table>
                    {
                        !loading ?
                            filteredResults.length > 0 ?
                                <table className="cw-100 br-collapse s-14">
                                    <tbody>
                                        {
                                            filteredResults.map(({objectId, visible, answer, position, question}) => {
                                                if(visible){
                                                    return (
                                                        <Fragment key={objectId}>
                                                            <QuestionCell toggle={this.toggleQuestion} question={{position, question, objectId}}/>
                                                            <tr className={`answer-box ${currentQuestion.includes(objectId) ? "active" : "inactive"}`} id={`question-${objectId}`}>
                                                                <td className="answer-box-text lh-long">{answer}</td>
                                                                <td className="d-flex a-evenly">
                                                                    <Button onClick={() => null} color="blue" icon="edit" label="EDITAR"/>
                                                                    <Button onClick={() => null} color="red" icon="trash" label="EXCLUIR"/>
                                                                </td>
                                                            </tr>
                                                        </Fragment>
                                                    )
                                                }
                                                return null;
                                            }) 
                                        }
                                    </tbody>
                                </table>
                            :
                                <h2>Nenhum resultado encontrado para "{searchInput}"</h2>
                        :
                            null
                    }
            </div>
        );
    }

    state = {
        currentQuestion: [],
        searchInput: ""
    }

    applySearch = (input) => this.setState({...this.state, searchInput: input})

    toggleQuestion = (id) => this.setState({
        currentQuestion: this.state.currentQuestion.includes(id) 
        ? 
            this.state.currentQuestion.filter(questionId => questionId !== id) 
        : 
            [...this.state.currentQuestion, id] 
    })
}

export default FAQSection;