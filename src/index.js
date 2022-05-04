import React from 'react';
// React v18 new root API: https://blog.saeloun.com/2021/07/15/react-18-adds-new-root-api.html
import { createRoot } from 'react-dom/client';
import Interface from './components/Interface';

const root = createRoot(document.getElementById('app'));
root.render(<Interface />);
