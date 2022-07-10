import React from "react";
import Alert from 'react-bootstrap/Alert';
import styles from "./Alertstyle.module.scss";
import Button from "react-bootstrap/Button";
import { useState } from "react";


const Alerts = () => {
    const [show, setShow] = useState(true);

    if (show) {
      return (
        <Alert className={styles.blabla} variant="success text-center" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Deine ToDo-Liste ist leer. Du hast nichts zu tun.</Alert.Heading>
          
        </Alert>
      );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export default Alerts 