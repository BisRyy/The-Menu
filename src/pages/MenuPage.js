import { Helmet } from 'react-helmet-async';
import MenuListTable from '../sections/@dashboard/menu/MenuListTable'

export default function MenuPage(){
  return (
    <>
      <Helmet>
        <title> Menu | Minimal UI </title>
      </Helmet>
      <MenuListTable />
    </>
  );
};
