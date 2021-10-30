import React, { useContext } from 'react';
import Head from "next/head";
import NextLink from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
} from "@material-ui/core";
import useStyles from "../utils/styles";

export default function Layout({ title, children, description }) {
  console.log('description:', description)
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title> {title? `${title} - Shop your Thing!`:'Shop your Thing!'} </title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>ShopYourThing</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href='/cart' passHref >
              <Link>Cart</Link>
            </NextLink>
            <NextLink href='/login' passHref >
              <Link>Login</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <Typography className={classes.footer}>
        All rights reserved. ShopYourThing
      </Typography>
    </div>
  );
}
