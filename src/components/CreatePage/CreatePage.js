import React from 'react';
import './CreatePage.css';
import ExploreSection from './ExploreSection/ExploreSection';
import Input from './Input/Input';
import Button from '../Button/Button';
import TextArea from './TextArea/TextArea';
import { useLocation } from 'react-router-dom';


const CreatePage = () => {

    const location = useLocation();
    const haiku = location.state;

    console.log("haiku:" + JSON.stringify(haiku));

    return (
        <div className="page-container">
            <div className="section section-1">
                <div className="container p-5">
                    <div className="row">
                        <div className="col d-flex justify-content-between">
                            <Input title={haiku.title}/>
                            <Button text="Delete"/>
                        </div>
                    </div>

                    <div className="row row-textarea">
                        <TextArea description={haiku.description}/>
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
    )
  
};

export default CreatePage;
