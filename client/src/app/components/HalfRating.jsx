import React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function HalfRating(props) {
  return (
    <Stack spacing={1}>
      <Rating 
        name={props.name}
        value={props.value}
        precision={0.5} 
        onChange={props.onChange}
        readOnly={props.readOnly}
      />
    </Stack>
  );
}