import { useState } from 'react';

import classes from './UserForm.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';

const UserForm = ({onAddUser, onClearAll}) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [errorMessage, setErrorMessage] = useState();

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setErrorMessage({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).',
              });
            return;
        }

        if (+enteredAge < 0) {
            setErrorMessage({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).',
                });
            return;
        }

        onAddUser(enteredName, enteredAge);

        setEnteredName('');
        setEnteredAge('');
    };

    const clearHandler = () => {
        onClearAll();
    }

    const confirmHandler = () => {
        setErrorMessage(null);
    }

    return (
        <>
            {errorMessage && (                
                <ErrorModal 
                    title={errorMessage.title}
                    content={errorMessage.message}
                    onConfirm={confirmHandler}
                />)
            }
            <Card>
                <form className={classes.form} onSubmit={submitHandler}>
                    <div className={classes['form__control']}>
                        <label htmlFor='name' >Name:</label>
                        <input 
                            type='text' 
                            id='name' 
                            onChange={nameChangeHandler}
                            value={enteredName}
                        />
                    </div>
                    <div className={classes['form__control']}>
                        <label htmlFor='age' >Age:</label>
                        <input 
                            type='number' 
                            id='age' 
                            onChange={ageChangeHandler}
                            value={enteredAge}
                        />
                    </div>
                    <div className={classes['form__actions']}>
                        <Button type='submit'>Add user</Button>
                        <Button type='button' onClick={clearHandler}>Clear all</Button>
                    </div>
                </form>
            </Card>
        </>
    );
};

export default UserForm;