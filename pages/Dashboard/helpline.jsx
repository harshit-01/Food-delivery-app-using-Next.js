import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// This is the way to import an SVG file and then pass it as a props
// import { ReactComponent as CompanyIcon } from './assets/crown.svg';

import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

const App = () => {
    return (
        <WhatsAppWidget  phoneNumber="XXXXXXXXXX" />
    );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function helpline() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' , mt: 1 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Call" {...a11yProps(0)} />
          <Tab label="Chat" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <span>
            Helpline No: 9898989810
        </span>
        <br />
        <span>
            Helpline No: 9898989811
        </span>
        <br />
        <br />
        <em>*Our customer care service providers might be unavailable due to unavoidable circumstances</em>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <span>
            Chat on whatsapp ? 
        </span>
        <span>
            <App />
        </span>
      </TabPanel>
    </Box>
  );
}

