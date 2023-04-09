import { NavLink, Outlet } from 'react-router-dom';

export default function(){
  return (
    <div>
      <div>
        <NavLink to="/items">Stock</NavLink>
        <NavLink to="/billing">Billing</NavLink>
      </div>
      <Outlet />
    </div>
  );
}
