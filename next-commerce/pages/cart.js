import React, { useContext } from "react";
import { Store } from "../utils/Store";
import Layout from "../components/Layout";
import NextLink from "next/link";
import Image from "next/image";
import { Link } from "@material-ui/core";
import {
  Grid,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  MenuItem,
  Select,
  Button,
} from "@material-ui/core";

export default function CartScreen() {
  const { state } = useContext(Store);
  const { cartItems } = state.cart;
  function Handler() {
    console.log("cartItems:", cartItems);
  }

  return (
    <Layout title="Your cart">
      <Typography variant="h1" component="h1" color="primary">
        Shopping Cart
      </Typography>
      {cartItems.legth === 0 ? (
        <div>
          Cart is empty!<NextLink href="/">Go shopping</NextLink>
        </div>
      ) : (
        <Grid container spacing={1}>
          <Grid md={9} xs={12}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Quantity</TableCell>
                    <TableCell align="center">Price</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableRow key={item._id}>
                      <TableCell>
                        <NextLink href={`/product/${item.slug}`} passHref>
                          <Link>
                            <Image
                              src={item.image}
                              alt={item.slug}
                              width={50}
                              height={50}
                            ></Image>
                          </Link>
                        </NextLink>
                      </TableCell>
                      <TableCell align="center">{item.name}</TableCell>

                      {/* const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step)); */}
                      {/* range(1,5,1)=[1,2,3,4,5] */}
                      {/* const range = function*(from,to) { for(let i = from; i <= to; i++) yield I;}; [...range(3,5)]// => [3, 4, 5] */}

                      <TableCell align="center">
                        <Select value={item.quantity}>
                          {[...Array(item.countInStock).keys()].map((x) => 
                            (<MenuItem key={x + 1} value={x+1 } align="center">
                              {x + 1}
                            </MenuItem>)
                        )}
                        </Select>
                      </TableCell>
                      <TableCell align="center">{item.price}</TableCell>
                      <TableCell align="center">
                        <Button onClick={Handler} variant="text">
                          ❎
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid md={3} xs={12}>
            cart actions
          </Grid>
        </Grid>
      )}
    </Layout>
  );
}
