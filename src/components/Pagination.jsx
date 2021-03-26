import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Pagination } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function BasicPagination(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    props.pageChange(value);
  };
  return (
    <div className={classes.root}>
      <Pagination
        count={props.count}
        onChange={handleChange}
        defaultPage={page}
        color="primary"
      />
    </div>
  );
}
