import React, { useState, useRef } from 'react';
import './CreatePage.css';
import ExploreSection from './ExploreSection/ExploreSection';
import Input from './Input/Input';
import Button from '../Button/Button';
import TextArea from './TextArea/TextArea';
import { useLocation } from 'react-router-dom';

const CreatePage = () => {
    const location = useLocation();
    const initialHaiku = location.state || { title: '', description: '' };
    const [haiku, setHaiku] = useState(initialHaiku);

    // Create a reference to call the fetch function in ExploreSection
    const exploreSectionRef = useRef(null);

    const handleHaikuUpdate = (updatedHaiku) => {
        setHaiku(updatedHaiku);
    };

    const handleSave = () => {
        fetch(`http://localhost:3000/notes/${haiku.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(haiku),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Haiku updated:', data);
            // Trigger data refresh in ExploreSection after save
            if (exploreSectionRef.current) {
                exploreSectionRef.current.fetchData();
            }
        })
        .catch(error => {
            console.error('Error updating haiku:', error);
        });
    };

    return (
        <div className="page-container">
            <div className="section section-1">
                <div className="container p-5">
                    <div className="row">
                        <div className="col d-flex justify-content-between">
                            <Input 
                                title={haiku.title} 
                                onChange={(e) => setHaiku({ ...haiku, title: e.target.value })}
                            />
                            <Button text="Delete"/>
                        </div>
                    </div>

                    <div className="row row-textarea">
                        <TextArea 
                            description={haiku.description} 
                            onChange={(e) => setHaiku({ ...haiku, description: e.target.value })}
                        />
                    </div>

                    <div className="row">
                        <div className="col d-flex justify-content-between">
                            <Button text="Back"/>
                            <Button text="Save" onClick={handleSave}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section section-2">
                <ExploreSection
                    ref={exploreSectionRef}
                    onSelectHaiku={handleHaikuUpdate}
                    selected={haiku.id}
                />
            </div>
        </div>
    );
};

export default CreatePage;
