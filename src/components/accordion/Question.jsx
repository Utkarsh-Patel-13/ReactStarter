import React, { Component } from "react";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

class SingleQuestion extends Component {
    state = {
        title: this.props.question.title,
        info: this.props.question.info,
        showInfo: false,
    };

    setShowInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo,
        });
    };

    // shadowToggle = () => {
    //     if (!this.state.showInfo) {
    //         return "dark-shadow";
    //     }
    // };

    render() {
        return (
            <div className={this.shadowToggle}>
                <article className="question m-6 p-2 font-bold">
                    <header className="font-semibold">
                        <h4>{this.state.title}</h4>
                        <button
                            className="btn-accordian"
                            onClick={this.setShowInfo}
                        >
                            {this.state.showInfo ? (
                                <AiOutlineMinus />
                            ) : (
                                <AiOutlinePlus />
                            )}
                        </button>
                    </header>
                    {this.state.showInfo && <p>{this.state.info}</p>}
                </article>
            </div>
        );
    }
}

export default SingleQuestion;
