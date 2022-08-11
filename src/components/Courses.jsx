import React, { useState } from 'react'
import { FormControl, NewWrapper } from '../style/New.Style'
import CouseGoales from './CouseGoales'
import Button from './inc/Button'
import { COURSEITEMS } from './data/CoursesItem'

function Courses() {


    //
    const [isValid, setisValid] = useState(true);

    // Courses Item
    const [courseItems, setcourseItems] = useState(COURSEITEMS)

    //Input entered Value
    const [valueEntered, setvalueEntered] = useState("")

    // Input Function
    const inputHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setisValid(true);
        }
        setvalueEntered(event.target.value);
    }

    //Form submit function
    const submitHanlder = (event) => {
        event.preventDefault();

        const newItem = {
            id: Math.random().toString(),
            title: valueEntered
        }

        if (valueEntered.trim().length === 0) {
            setisValid(false)
            return;
        }

        // push new item to onAddHandler
        onAddHandler(newItem)

        // reset Input filed
        setvalueEntered("");
    }


    //push new item to items lists function
    const onAddHandler = (item) => {
        setcourseItems((prevItems) => {
            return [item, ...prevItems]
        })
    }


    //Delete Item function
    const deleteHandler = (id) => {
        setcourseItems(items => items.filter((item) => item.id !== id));
    }


    return (
        <NewWrapper >
            <FormControl invalid={!isValid}>
                <form onSubmit={submitHanlder} >

                    <label >Course Goal</label>
                    <input type="text" value={valueEntered}
                        onChange={inputHandler}
                    />
                    <Button text="Add Goal" />

                </form>
            </FormControl>

            <CouseGoales courseItems={courseItems} handDelete={deleteHandler} />

        </NewWrapper>

    )
}

export default Courses
