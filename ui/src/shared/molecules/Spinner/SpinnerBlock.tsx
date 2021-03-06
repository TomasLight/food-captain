import clsx from 'clsx';
import React from 'react';
import { makeStyles } from '@material-ui/core/';

import { Spinner } from './Spinner';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'rgba(255, 255, 255, 0.36)',
    display: 'flex',
    height: '100%',
    position: 'absolute',
    textAlign: 'center',
    top: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  holder: {
    height: 60,
    width: 60,
  },
});

interface SpinnerBlockProps {
  visible: boolean;
  className?: string;
}

type Props = SpinnerBlockProps;

const SpinnerBlock = (props: Props) => {
  const { visible, className } = props;
  const classes = useStyles();

  const rootClasses = clsx(
    classes.root,
    className
  );

  return (
    <div className={rootClasses}>
      <div className={classes.holder}>
        <Spinner visible={visible}/>
      </div>
    </div>
  );
};

export { SpinnerBlock };
