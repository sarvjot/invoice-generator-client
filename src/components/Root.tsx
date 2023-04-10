import { NavLink, Outlet } from 'react-router-dom';

export default function Root(){
  return (
    <div className="bg-cream min-h-screen">
      <nav className="bg-silver h-16 flex justify-around items-center">
        <NavLink className="text-3xl" to="/items">Stock</NavLink>
        <NavLink className="text-3xl" to="/billing">Billing</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
