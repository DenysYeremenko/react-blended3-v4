import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from 'redux/users/usersSelector';
import Avatar from 'react-avatar';
import { deleteUser, toogleStatus } from 'redux/users/userSlice';
import { Table } from './HomeView.styled';

export const HomeView = () => {
  const users = useSelector(getUsers);
  const dispatch = useDispatch();

  const delethandler = id => {
    dispatch(deleteUser(id));
  };

  const statusHandler = id => {
    dispatch(toogleStatus(id));
  };

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>№</th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Age</th>
            <th>Status</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>
                  <Avatar round={true} size={40} name={user.avatar} />
                </td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>
                  {' '}
                  <span onClick={() => statusHandler(user.id)}>
                    {user.status === 'yes' ? 'online' : 'offline'}
                  </span>{' '}
                </td>
                <td onClick={() => delethandler(user.id)}>Delete</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
