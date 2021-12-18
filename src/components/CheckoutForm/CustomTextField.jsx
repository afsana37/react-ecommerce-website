// import React from 'react'
// import { TextField, Grid } from '@material-ui/core';
// import { useFormContext, Controller } from 'react-hook-form';

// const FormInput = ({name, label, required}) => {
  
//     return (

//         <Grid item xs={12} sm={6}>
//             <Controller
//                 as={TextField}
//                 name={name}
//                 control={control}
//                 label={label}
//                 fullWidth
//                 required={required}
//             />
//         </Grid>   

//         // <Grid item xs={12} sm={6}>
//         //     {/* <Controller
//         //         as={TextField}
//         //         control={control}
//         //         fullWidth
//         //         name={name}
//         //         label={label}
//         //         required={required}
//         //     /> */}
            
//         // </Grid>
//     )
// }

// export default FormInput


import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

function FormInput({ name, label}) {
  const { control } = useFormContext();
 

  return (
    <Grid item xs={12} sm={6}>
      <Controller as={TextField} name={name} control={control} label={label} />
    </Grid>
  );
}

export default FormInput;
