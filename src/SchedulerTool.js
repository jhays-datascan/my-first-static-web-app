import React from 'react';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  Year,
  WorkWeek,
  Month,
  Inject,
  Resize,
  DragAndDrop
} from '@syncfusion/ej2-react-schedule';

const SchedulerTool = () => {
  const value = 'World';
  const [parentMessage, setParentMessage] = React.useState({ message: 'default' });
  const [origin, setOrigin] = React.useState();

  const processEvent = (event) => {
    if(event.origin === 'https://localhost:44333') {
      setParentMessage({...event.data});
      setOrigin(event.origin);
    }
  }

  if(window.addEventListener) {
    window.addEventListener('message', processEvent);
  }
  else {
    window.attachEvent("onmessage", processEvent);
  }

  const openAlert = () => {
    alert('alerting...');
  };

  const data = 
    [
      {
        "Id": 1,
        "Subject": "7-11 Store: 313377",
        "StartTime": "2023-08-04T14:30:00.000Z",
        "EndTime": "2023-08-04T20:00:00.000Z"
      },
      {
        "Id": 2,
        "Subject": "National Taco Day",
        "StartTime": "2023-08-03T14:30:00.000Z",
        "EndTime": "2023-08-03T20:00:00.000Z",
        "IsAllDay": true,
        "IsBlock": true
      },
      {
        "Id": 3,
        "Subject": "Maintenance",
        "StartTime": "2023-08-01T16:30:00.000Z",
        "EndTime": "2023-08-01T22:00:00.000Z",
        "IsBlock": true
      }
    ];
  
    const toolTipTemplate = (props) => {
        return (<div>{props.Subject}</div>);
    };

    const [eventSettings] = React.useState({
        dataSource: data,
        enableTooltip: true,
        tooltipTemplate: toolTipTemplate
    });

    const timeScale = {
        enable: false,
        interval: 5,
        slotCount: 2,
        majorSlotTemplate: null,
        minorSlotTemplate: null
      };

    const [currentView] = React.useState("Week");

  return (
    <div>
      <h1>Hello {value}</h1>
      <div>Message from parent: { parentMessage.message }</div>
      <div>origin: {origin}</div>
      <button onClick={openAlert}>Whats up</button>
      <NavLink tag={Link} className="text-dark" to="/about">About</NavLink>
      <ScheduleComponent
                width='100%'
                height='650px'
                eventSettings={eventSettings}
                currentView={currentView}
            >
                <ViewsDirective>
                    <ViewDirective option='Day' timeScale={timeScale} />
                    <ViewDirective option='Week' />
                    <ViewDirective option='Month' />
                    <ViewDirective option='Year' />
                </ViewsDirective>
                <Inject services={[Day, Week, WorkWeek, Month, Year, Resize, DragAndDrop]} />
            </ScheduleComponent>
    </div>
  );
}

export { SchedulerTool };