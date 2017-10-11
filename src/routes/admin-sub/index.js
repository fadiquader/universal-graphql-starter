import React from 'react';
import Layout from '../../components/Layout';
import AdminSub from './AdminSub';

const title = 'Admin sub Page';
const isAdmin = true;

function action() {
  return {
    chunks: ['admin-sub'],
    title,
    component: (
      <div>
        <AdminSub title={title} />
      </div>
    ),
  };
}

export default action;
