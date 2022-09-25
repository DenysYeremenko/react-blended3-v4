import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { getStatus } from 'services/service';
import { addUser } from 'redux/users/userSlice';

export const AddContacts = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const dispatch = useDispatch();

  const onChangeHandler = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'age':
        setAge(e.target.value);
        break;
      default:
        break;
    }
  };

  const onSubmitHandler = async e => {
    e.preventDefault();
    const status = await getStatus();
    const newUser = {
      id: nanoid(),
      name,
      age,
      avatar: name,
      status,
    };
    dispatch(addUser(newUser));
    setName('');
    setAge('');
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <label>
          Name
          <input
            type="text"
            value={name}
            name="name"
            onChange={onChangeHandler}
          />
        </label>
        <label>
          Age
          <input
            type="text"
            value={age}
            name="age"
            onChange={onChangeHandler}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </>
  );
};
