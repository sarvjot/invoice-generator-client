import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Root from './components/Root';
import ErrorPage from './utils/ErrorPage';
import ItemList from './components/ItemList';
import Item from './components/Item';
import EditItem from './components/EditItem';
import BillForm from './components/BillForm';
import BillRender from './components/BillRender';

import itemListLoader from './loaders/itemListLoader';
import itemLoader from './loaders/itemLoader';
import billLoader from './loaders/billLoader';

import createAction from './actions/createAction';
import deleteAction from './actions/deleteAction';
import editAction from './actions/editAction';
import billAction from './actions/billAction';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        // pathless route for catching the children's errors in the Root outlet
        errorElement: <ErrorPage />,
        children: [
          {
            path: 'items',
            element: <ItemList />,
            loader: itemListLoader,
          }, 
          {
            path: 'item/new',
            action: createAction,
          },
          {
            path: 'item/:itemId',
            element: <Item />,
            loader: itemLoader,
          },
          {
            path: 'item/:itemId/delete',
            action: deleteAction,
          },
          {
            path: 'item/:itemId/edit',
            element: <EditItem />,
            action: editAction,
            loader: itemLoader,
          },
          {
            path: 'billing',
            element: <BillForm />,
            loader: itemListLoader,
            action: billAction,
          },
          {
            path: 'bill/render',
            element: <BillRender />,
            loader: billLoader,
          },
        ]
      },
    ]
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider 
      router={router}  
    />
  </React.StrictMode>
);
