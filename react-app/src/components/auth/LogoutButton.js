import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { OptionContext } from '../../context/OptionContext';
import { clearNotes } from '../../store/note';
import { clearNotebooks } from '../../store/notebook';
import { logout } from '../../store/session';
import { clearTags } from '../../store/tag';

const LogoutButton = () => {
  const dispatch = useDispatch()
  const { setOption } = useContext(OptionContext);

  const onLogout = async (e) => {
    await dispatch(logout());
    await dispatch(clearNotebooks());
    await dispatch(clearNotes());
    await dispatch(clearTags());
    setOption('home');
  };

  return <button className='edit-button' onClick={onLogout}><i class="fa-solid fa-right-from-bracket edit-pencil"></i></button>;
};

export default LogoutButton;
