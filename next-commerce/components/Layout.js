import React from "react";
import Head from "next/head";
import { AppBar, Toolbar } from "@material-ui/core";

export default function Layout() {
  return (
    <div>
      <Head>
          <title>Shop your Thing!</title>
      </Head>
      <AppBar position="static" >
      <Toolbar>
        
      </Toolbar>
      </AppBar>
    </div>
  );
}
