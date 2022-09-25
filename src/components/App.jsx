import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { AddContacts } from 'pages/AddContact/AddContact';
import { Box } from 'constants';
import { HomeView } from 'pages/HomeView/HomeView';

export const App = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path="/add" element={<AddContacts />} />
        </Route>
      </Routes>
    </Box>
  );
};
