import { Label,Input,Button  } from "reactstrap";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import React, { useEffect, useState } from "react";

import { postEvent } from "../../pages/api/api";

import { useAlert } from 'react-alert'

import {  useSession } from 'next-auth/react'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AWSS3UploadAsh from 'aws-s3-upload-ash'
import { UploadResponse } from 'aws-s3-upload-ash/dist/types'

import { useS3Upload } from "next-s3-upload";


const CreateEvent = (props) => {

    const alert = useAlert()
    const { data: session, status } = useSession()

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [title, setTitle] = useState();
    const [venue, setVenue] = useState();
    const [description, setDescription] = useState();


    const handleChangeTitle = (e) => setTitle(e.target.value);
    const handleChangeVenue = (e) => setVenue(e.target.value);
    const handleChangeDescription = (e) => setDescription(e.target.value);

    let [imageUrl, setImageUrl] = useState();
    let { FileInput, openFileDialog, uploadToS3 } = useS3Upload();

    let handleFileChange = async file => {
        let { url } = await uploadToS3(file);
        setImageUrl(url);
      };
    


      const resetFields = () => {
        setTitle("");
        setVenue("");
        setDescription("");
        setImageUrl("");
        };


    const handleClick = () => {
        if (!title || !imageUrl || !venue || !startDate || !endDate || !description) {
           
            toast.error("Enter all fields", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                })
            return;
          }
        postEvent({
            title: title,
            img: imageUrl,
            venue: venue,
            startDate: startDate,
            endDate: endDate,
            description: description,
            branch: {
                id: props.user.branch.id
              },
        }).then((res) => {
            toast.success("Event Created", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                })
                resetFields();

        }).catch((err) => {
            toast.error("Something went wrong", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                })
        })
    }

    return (
        <div className="container">
        <ToastContainer />
        <div className="row">
            <div className="col-md-12">
                    <Label for="exampleEmail">
                    Event Title
                    </Label>
                    <Input
                    placeholder="Enter the Event title or name"
                    type="text"
                    value={title} onChange={handleChangeTitle}
                    />
                
                    <div className="row">
                         
                    <div className="col-md-12">
                    <FileInput onChange={handleFileChange} />

                        <button onClick={openFileDialog} className="btn-secondary mt-4 mb-2">Upload Event Image</button>

                        {imageUrl && <img src={imageUrl} className="img-fluid" />}
                    </div>
                    </div>


                    <Label for="exampleEmail" className="mt-2">
                    Venue
                    </Label>
                    <Input
                       value={venue} onChange={handleChangeVenue}
                    placeholder="Enter the Venue"
                    type="text"
                    />

                    <div className="row">
                        <div className="col-md-12">
                            <Label for="exampleEmail" className="mt-2">
                            Start Date
                            </Label>
                            <DatePicker selected={startDate} dateFormat='dd/MM/yyyy h:m a'  showTimeSelect className="form-control" onChange={(date) => setStartDate(date)} />

                        </div>
                        <div className="col-md-12">
                        <Label for="exampleEmail" className="mt-2">
                        End Date
                        </Label>
                        <DatePicker selected={endDate}  dateFormat='dd/MM/yyyy h:m a'  showTimeSelect className="form-control" onChange={(date) => setStartDate(date)} />

                        </div>
                    </div>
                
                     <Label for="exampleEmail" className="mt-2">
                    Description
                    </Label>
                    <Input
                    id="exampleText"
                    name="text"
                    type="textarea"
                    value={description}
                    onChange={handleChangeDescription}
                    />

                <Button color="primary mt-3" onClick={() => handleClick()}>
                                Create Event
                </Button>
            </div>
        </div>
    </div>
    );
}

export default CreateEvent;