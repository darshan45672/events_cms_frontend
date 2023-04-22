import { Label,Input,Button  } from "reactstrap";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import React, { useEffect, useState } from "react";

const CreateEvent = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <div className="contaainer">
        <div className="row">
            <div className="col-md-12">
                    <Label for="exampleEmail">
                    Event Title
                    </Label>
                    <Input
                    placeholder="Enter the Event title or name"
                    type="text"
                    />
                    <Label for="exampleEmail">
                    Image
                    </Label>
                    <Input
                    placeholder="Image URL"
                    type="text"
                    />
                    <Label for="exampleEmail" className="mt-2">
                    Venue
                    </Label>
                    <Input
                    placeholder="Enter the Venue"
                    type="text"
                    />

                    <Label for="exampleEmail" className="mt-2">
                    Start Date
                    </Label>
                     <DatePicker selected={startDate}  showTimeSelect className="form-control" onChange={(date) => setStartDate(date)} />

                    <Label for="exampleEmail" className="mt-2">
                    End Date
                    </Label>
                     <DatePicker selected={endDate}  showTimeSelect className="form-control" onChange={(date) => setStartDate(date)} />

                     <Label for="exampleEmail" className="mt-2">
                    Description
                    </Label>
                    <Input
                    id="exampleText"
                    name="text"
                    type="textarea"
                    />

<Button color="primary mt-3">
                   Create Event
                </Button>
            </div>
        </div>
    </div>
    );
}

export default CreateEvent;