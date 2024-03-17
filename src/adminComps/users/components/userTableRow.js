import React from 'react'
import UserTableData from './userTableData';
import { useSearchParams } from 'react-router-dom';
import { updataUserPatch } from '../../../services/apiServices';
import { toast } from 'react-toastify';

export default function UserTableRow({ item, setArr, index }) {
  const [query] = useSearchParams()
  const page = query.get("page") || 1;
  const changeRole = e => {
    // e.target.balue = "user"/ "admin"
    updataUserPatch(`http://localhost:3002/users/${e.target.value}/${item._id}`, "PATCH");
    toast.success("role update");

  }
  return (
    <tr>
      <td>{((page - 1) * 5) + index + 1}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.date_created.substring(0, 10)}</td>
      <td>
        <select onChange={changeRole} defaultValue={item.role}>
          <option>user</option>
          <option>admin</option>
        </select>
      </td>
      <UserTableData setArr={setArr} item={item} />
    </tr>
  )
}
