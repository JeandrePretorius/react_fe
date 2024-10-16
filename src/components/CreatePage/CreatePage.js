import React from 'react';
import './CreatePage.css';
import ExploreSection from './ExploreSection/ExploreSection';
import Input from './Input/Input';
import Button from '../Button/Button';
import TextArea from './TextArea/TextArea';

const CreatePage = () => (
  <div className="page-container">
        <div className="section section-1">
            <div className="container p-5">
                <div className="row">
                    <div className="col d-flex justify-content-between">
                        <Input/>
                        <Button text="Delete"/>
                    </div>
                </div>

                <div className="row row-textarea">
                    <TextArea/>
                </div>

                <div className="row">
                    <div className="col d-flex justify-content-between">
                        <Button text="Back"/>
                        <Button text="Save"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="section section-2">
            <ExploreSection/>
        </div>
    </div>
);

export default CreatePage;
