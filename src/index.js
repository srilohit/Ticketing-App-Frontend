import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './features/login/loginForm';
import CustomerPage from './features/dashboard/customer/Customer';
import AdminPage from './features/dashboard/admin/admin';
import AddTicketPage from './features/dashboard/customer/addTicket';
import TicketListPage from './features/dashboard/customer/listTickets';
import EmployeePage from './features/dashboard/employees/employee';
import SignPage from './features/signup/signUpForm';

const router = createBrowserRouter([
  {
    path : '/',
    element : <App></App>,
    children : [
      {
        path : '/signUp',
        element : <SignPage></SignPage>
      },
      {
        path : '/login',
        element : <LoginPage></LoginPage>
      },
      {
        path : '/customerDashboard/:username/:id',
        element : <CustomerPage></CustomerPage>,
        children : [
          {
            path : '/customerDashboard/:username/:id/toAddTicket',
            element : <AddTicketPage></AddTicketPage>
          },
          {
            path : '/customerDashboard/:username/:id/ticketList',
            element : <TicketListPage></TicketListPage>
          }
        ]
      },
      {
        path : '/adminDashboard/:username/:id',
        element : <AdminPage></AdminPage>
      },
      {
        path : '/employeeDashboard/:username/:id',
        element : <EmployeePage></EmployeePage>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={router} />
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
