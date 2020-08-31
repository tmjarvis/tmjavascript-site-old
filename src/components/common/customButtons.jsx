import React from "react";
import { Button } from "react-bootstrap";

export const ContactButton = () => {
  return (
    <div>
      <style type="text/css">
        {`
    .btn-primary {
      color: #000000;
      font-weight: 600;
      background-color: #ffffff;
      border-color: #ffffff;
      border-radius: 5px;
      border-width: 2px
    }
    .btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open>.dropdown-toggle.btn-primary {
        color: #ffffff;
        background-color: #000000;
        border-color: #000000;

        /* background-color: #fff;
        color: #d4af37;
        border-color: #d4af37;
        font-weight:800; */
    }
    `}
      </style>
      <Button variant="primary" size="lg">
        Check Out My Work
      </Button>
    </div>
  );
};

export const EmailButton = () => {
  return (
    <div>
      <style type="text/css">
        {`
    .btn-primary {
      color: #000000;
      font-weight: 600;
      background-color: #ffffff;
      border-color: #ffffff;
      border-radius: 5px;
      border-width: 2px
    }
    .btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open>.dropdown-toggle.btn-primary {
        color: #ffffff;
        background-color: #000000;
        border-color: #000000;

        /* background-color: #fff;
        color: #d4af37;
        border-color: #d4af37;
        font-weight:800; */
    }
    `}
      </style>
      <Button variant="primary" size="lg">
        Send me an email
      </Button>
    </div>
  );
};

// I know this is terrible practice --> I'll fix this later.

export const DownloadPDFButton = (props) => {
  return (
    <div>
      <style type="text/css">
        {`
    .btn-primary {
      color: #000000;
      font-weight: 600;
      background-color: #ffffff;
      border-color: #ffffff;
      border-radius: 5px;
      border-width: 2px
    }
    .btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open>.dropdown-toggle.btn-primary {
        color: #ffffff;
        background-color: #000000;
        border-color: #000000;

        /* background-color: #fff;
        color: #d4af37;
        border-color: #d4af37;
        font-weight:800; */
    }
    `}
      </style>
      <Button variant="primary" size="lg">
        {props.buttonText}
      </Button>
    </div>
  );
};
