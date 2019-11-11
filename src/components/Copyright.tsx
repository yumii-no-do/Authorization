import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';
import { BoxProps } from '@material-ui/core/Box';


const COPYRIGHT_TEXT = 'Copyright© Ваш сайт 2019.'

const Copyright: FC<BoxProps> = (props) => 
    <Box {...props}>
        <Typography variant='body2' color="textSecondary" gutterBottom>
            {COPYRIGHT_TEXT}
        </Typography>
    </Box>

export default Copyright