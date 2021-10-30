import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    background: "#203040",
    "& a": {
      color: "#fff",
      marginLeft: 10,
    },
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.3rem",
  },
  grow: {
    flexGrow: "1",
  },
  main: {
    minHeight: "80vh",
  },
  footer: {
    textAlign: "center",
  },
  section:{
    marginTop: 10,
    marginBottom: 10
  }
});
export default useStyles;