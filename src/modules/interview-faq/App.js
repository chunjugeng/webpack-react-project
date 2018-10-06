import React from 'react';
import './body.scss';

export default class InterviewFaq extends React.PureComponent {
    componentDidMount() {
    }
    render() {
        return (
            <React.Fragment>
                <div className="container interview-faq">
                    <div className="content">

                        <div className="box">
                            <header>
                                <div class="column">
                                    <span class="item">*</span>
                                    <span class="item">*</span>
                                </div>
                                <div class="column">
                                    <span class="item">*</span>
                                    <span class="item">*</span>
                                </div>
                            </header>
                            <section>section</section>
                            <footer>footer</footer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}