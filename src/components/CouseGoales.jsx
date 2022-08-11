import React from 'react';
import { CousesContainer } from '../style/CouseGoal.style';

import CoursesItem from './inc/CoursesItem';

const CouseGoales = (props) => {

    return (
        <CousesContainer>
            {
                props.courseItems.length > 0 ? (
                    props.courseItems.map((item) => (
                        <CoursesItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            handDelete={props.handDelete}
                        />
                    ))
                ) : (<p>No Goal found yet!</p>)
            }

        </CousesContainer>

    );
}

export default CouseGoales;
