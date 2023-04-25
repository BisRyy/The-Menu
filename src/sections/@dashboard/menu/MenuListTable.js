import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
// @mui
import {
  Card,
  Table,
  Stack,
  Paper,
  Avatar,
  Button,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
  Link,
} from '@mui/material';
// components
import Label from '../../../components/label';
import Iconify from '../../../components/iconify';
import Scrollbar from '../../../components/scrollbar';
// sections
import { MenuListHead, MenuListToolbar } from '.';

// mock
import MENU from '../../../data/menuItem';
import { add, get, remove, update } from '../../../redux/menuSlice';
import AddMenuDialog from './AddMenuDialog';
import EditMenuDialog from './EditMenuDialog';
import MenuDetails from '../menus/MenuDetails';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'price', label: 'Price', alignRight: false },
  { id: 'availability', label: 'Availability', alignRight: false },
  { id: 'description', label: 'Description', alignRight: false },
  // { id: 'isVerified', label: 'Verified', alignRight: false },
  { id: 'options' },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_menu) => _menu.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function MenuListTable() {
  const MENULIST = useSelector((state) => state.menu.list);
  const dispatch = useDispatch();

  useEffect(() => {
    const hotelId = JSON.parse(localStorage.getItem('user'))._id;
    axios.get(`https://menuserver.onrender.com/api/menus/hotel/${hotelId}`).then((res) => {
      console.log('res', res.data);
      dispatch(get(res.data));
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [MENULIST]);
  // dispatch(get(MENU));

  const [open, setOpen] = useState([null, null]);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleOpenMenu = (event, _id) => {
    console.log(_id);
    setOpen([event.currentTarget, _id]);
  };

  const handleCloseMenu = () => {
    setOpen([null, null]);
  };

  const handleDeleteSelected = () => {
    selected.forEach((_id) => {
      axios
<<<<<<< HEAD
        .delete(`https://menuserver.onrender.com/api/menus/${_id}`, {
=======
        .delete(`/api/menus/${_id}`, {
>>>>>>> 28a68572a2e7de414acb691664c19eae044df9ea
          headers: {
            'x-auth-token': JSON.parse(localStorage.getItem('user')).token,
          },
        })
        .then((res) => {
          console.log(res);
          dispatch(remove(_id));
        })
        .catch((err) => {
          console.log(err);
        });
      setSelected([]);
    });
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = MENULIST.map((n) => n._id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - MENULIST.length) : 0;

  const filteredList = applySortFilter(MENULIST, getComparator(order, orderBy), filterName);

  const isNotFound = !filteredList.length && !!filterName;

  const [openAddMenu, setOpenAddMenu] = useState(false);

  const handleOpenAddMenu = () => {
    setOpenAddMenu(true);
  };

  const handleCloseAddMenu = () => {
    setOpenAddMenu(false);
  };

  const handleAddMenu = async (menu) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = user.token;
    console.log('menu', menu);
    console.log('user', user);
    console.log('token', token);

    const formData = axios.toFormData(menu);
    console.log('formData', formData);

    const response = await axios({
      method: 'post',
<<<<<<< HEAD
      url: 'https://menuserver.onrender.com/api/menus',
=======
      url: '/api/menus',
>>>>>>> 28a68572a2e7de414acb691664c19eae044df9ea
      data: formData,
      files: menu.images,
      headers: {
        'Content-Type': `multipart/form-data boundary=${formData._boundary}`,
        'x-auth-token': token,
      },
    })
      .then((res) => {
        console.log('res', res);
      })
      .catch((err) => {
        console.log('err', err);
      });

    console.log('response', response);
    // axios
<<<<<<< HEAD
    //   .post('https://menuserver.onrender.com/api/menus', formData, {
=======
    //   .post('/api/menus', formData, {
>>>>>>> 28a68572a2e7de414acb691664c19eae044df9ea
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //       'x-auth-token': token,
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     dispatch(add(res.data));
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

<<<<<<< HEAD
    // axios.post(`https://menuserver.onrender.com/api/menus/${menu._id}/images`, formData, {
=======
    // axios.post(`/api/menus/${menu._id}/images`, formData, {
>>>>>>> 28a68572a2e7de414acb691664c19eae044df9ea
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //     'x-auth-token': token,
    //   },
    // }).then((res) => {
    //   console.log(res);
    // }).catch((err) => {
    //   console.log(err);
    // });

    handleCloseAddMenu();
  };

  // axios.interceptors.request.use(
  //   (config) => {
  //     const token = JSON.parse(localStorage.getItem('user')).token;
  //     config.headers['x-auth-token'] = token;
  //     return config;
  //   }
  // );

  const [openEditMenu, setOpenEditMenu] = useState([false, null]);

  const handleOpenEditMenu = () => {
    console.log('open Edit', open);
    setOpenEditMenu([true, openEditMenu[1]]);
  };

  const handleCloseEditMenu = () => {
    setOpenEditMenu(false);
    handleCloseMenu();
  };

  const handleEditMenu = async (menu, id) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = user.token;
    console.log('menu', menu);
    console.log('user', user);
    console.log('token', token);

    const formData = axios.toFormData(menu);
    console.log('formData', formData);

    const response = await axios
<<<<<<< HEAD
      .put(`https://menuserver.onrender.com/api/menus/${id}`, menu, {
=======
      .put(`/api/menus/${id}`, menu, {
>>>>>>> 28a68572a2e7de414acb691664c19eae044df9ea
        headers: {
          // 'Content-Type': `multipart/form-data boundary=${formData._boundary}`,
          'x-auth-token': token,
        },
      })
      .then((res) => {
        console.log('res', res);
      })
      .catch((err) => {
        console.log('err', err);
      });

    console.log('response', response);

    handleCloseEditMenu();
  };

  const handleDelete = () => {
    console.log('open', open);
    axios
<<<<<<< HEAD
      .delete(`https://menuserver.onrender.com/api/menus/${open[1]}`, {
=======
      .delete(`/api/menus/${open[1]}`, {
>>>>>>> 28a68572a2e7de414acb691664c19eae044df9ea
        headers: {
          'x-auth-token': JSON.parse(localStorage.getItem('user')).token,
        },
      })
      .then((res) => {
        console.log(res);
        dispatch(remove(res.data._id));
      })
      .catch((err) => {
        console.log(err);
      });
    handleCloseMenu();
  };

  const [openDetailMenu, setOpenDetailMenu] = useState(false);
  return (
    <>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Menu Items
          </Typography>
          <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} onClick={handleOpenAddMenu}>
            Add Menu
          </Button>
        </Stack>

        <Card>
          <MenuListToolbar
            numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
            handleDeleteSelected={handleDeleteSelected}
          />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <MenuListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={MENULIST.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    const { _id, name, price, image, description, availability = 'unavailable' } = row;
                    const selectedList = selected.indexOf(_id) !== -1;

                    return (
                      <TableRow hover key={_id} tabIndex={-1} role="checkbox" selected={selectedList}>
                        <TableCell padding="checkbox">
                          <Checkbox checked={selectedList} onChange={(event) => handleClick(event, _id)} />
                        </TableCell>

                        <TableCell component="th" scope="row" padding="none">
                          <Stack direction="row" alignItems="center" spacing={2}>
                            <Avatar alt={name} src={image || '/assets/images/covers/cover_3.jpg'} />
                            <Link
                              color="inherit"
                              underline="hover"
                              component="div"
                              onClick={() => setOpenDetailMenu([!openDetailMenu[0], row])}
                              sx={{
                                '&:hover': {
                                  textDecoration: 'underline',
                                  color: 'text.primary',
                                  cursor: 'pointer',
                                },
                              }}
                            >
                              <Typography variant="subtitle2" noWrap>
                                {name}
                              </Typography>
                            </Link>
                          </Stack>
                        </TableCell>

                        <TableCell align="right" width={105}>
                          {price} Birr
                        </TableCell>

                        <TableCell align="left">
                          <Label color={availability === 'available' ? 'success' : 'error'}>
                            {sentenceCase(availability || 'low')}
                          </Label>
                        </TableCell>

                        <TableCell align="left">{description}</TableCell>

                        <TableCell align="right">
                          <IconButton
                            size="large"
                            color="inherit"
                            onClick={(event) => {
                              setOpenEditMenu([openEditMenu[0], row]);
                              handleOpenMenu(event, _id);
                            }}
                          >
                            <Iconify icon={'eva:more-vertical-fill'} />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>

                {isNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <Paper
                          sx={{
                            textAlign: 'center',
                          }}
                        >
                          <Typography variant="h6" paragraph>
                            Not found
                          </Typography>

                          <Typography variant="body2">
                            No results found for &nbsp;
                            <strong>&quot;{filterName}&quot;</strong>.
                            <br /> Try checking for typos or using complete words.
                          </Typography>
                        </Paper>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={MENULIST.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>

      <Popover
        open={Boolean(open[0])}
        anchorEl={open[0]}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 1,
            width: 140,
            '& .MuiMenuItem-root': {
              px: 1,
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <MenuItem onClick={handleOpenEditMenu}>
          <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem sx={{ color: 'error.main' }} onClick={handleDelete}>
          <Iconify icon={'eva:trash-2-outline'} sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>

      <AddMenuDialog open={openAddMenu} onClose={handleCloseAddMenu} onAdd={handleAddMenu} />

      {openEditMenu[0] && (
        <EditMenuDialog
          data={openEditMenu[1]}
          open={openEditMenu[0]}
          onClose={handleCloseEditMenu}
          onEdit={handleEditMenu}
        />
      )}
      {openDetailMenu && <MenuDetails menu={openDetailMenu[1]} open={openDetailMenu[0]} setOpen={setOpenDetailMenu} />}
    </>
  );
}
