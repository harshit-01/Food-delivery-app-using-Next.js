import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import AddTaskIcon from '@mui/icons-material/AddTask';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { useRouter } from 'next/router'
import Button from '@mui/material/Button';


const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#784af4',
  }),
  '& .QontoStepIcon-completedIcon': {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <SoupKitchenIcon />,
    2: <DeliveryDiningIcon />,
    3: <DinnerDiningIcon />,
    4: <TakeoutDiningIcon />,
    5: <AddTaskIcon />
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = ['Preparing your food', 'Delivery excecutive has arrived to pick the order', 'Food prepared' , 'Delivery executive is on his way to the your destination','Delivery executive has reached the destination'];

export default function CustomizedSteppers() {
    const router = useRouter();
    const [activeStep,setActiveStep] = React.useState(0); 
    const timeoutFunction = (x,val)=>{
        setTimeout(()=>{
            sessionStorage.setItem('activeStep',JSON.stringify(val));
            setActiveStep(val);
            if(JSON.parse(sessionStorage.getItem('activeStep'))){
                setActiveStep(JSON.parse(sessionStorage.getItem('activeStep')));
            }
        },x)
    }
    React.useEffect(()=>{
        let activeVal = JSON.parse(sessionStorage.getItem('activeStep'));
        if(JSON.parse(sessionStorage.getItem('activeStep'))){
            setActiveStep(JSON.parse(sessionStorage.getItem('activeStep')));
        }
        if(typeof window !== "undefined"){
            if(!activeVal){
                let i=0;
                while(i<5){
                    let a = 4*(i);
                    timeoutFunction(a*1000,i);
                    i++;
                } 
            }
            else if(activeVal < 1){
                let i=activeVal+1;
                while(i<5){
                    let a = 4*(i);
                    timeoutFunction(a*1000,i);
                    i++;
                } 
            }
            else if(activeVal < 1){
                let i=activeVal+1;
                while(i<5){
                    let a = 5*(i);
                    timeoutFunction(a*1000,i);
                    i++;
                } 
            }
            else if(activeVal < 2){
                let i=activeVal+1;
                while(i<5){
                    let a = 4*(i);
                    timeoutFunction(a*1000,i);
                    i++;
                } 
            }
            else if(activeVal < 3){
                let i=activeVal+1;
                while(i<5){
                    let a = 5*(i);
                    timeoutFunction(a*1000,i);
                    i++;
                } 
            }
            else if(activeVal < 4){
                let i=activeVal+1;
                while(i<5){
                    let a = 4*(i);
                    timeoutFunction(a*1000,i);
                    i++;
                } 
            }
            if(activeStep == 4 || activeVal == 4){
                sessionStorage.removeItem('activeStep');
            }
        }
    },[])  
   console.log(activeStep)
   return (
    <>
        <div style={{marginTop:"25px"}}>
            <h1 style={{textAlign:"center",color:"rgb(27, 118, 160)"}}>Track order</h1>
            <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                </Step>
                ))}
            </Stepper>
        </div>
        <div style={{display: 'flex',marginTop:"40px"}}>
            <Button variant="contained" sx={{margin:"auto"}} onClick={()=>router.push('/')}>Move to home page</Button>
        </div>
    </>
  );
}
