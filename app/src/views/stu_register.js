import React from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../layout/header';


export default function Streg() {
    return (

        <div>
            <Header></Header>
            <h1>Student Registration</h1>
            <div className="container">
                <form>
                    <h3 className="display-5">General Info</h3>
                    <br></br>
                    <h4>Masters Degree Program</h4>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" for="inputGroupSelect01">First Option</label>
                        </div>
                        <select className="custom-select" id="inputGroupSelect01">
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" for="inputGroupSelect01">Second Option</label>
                        </div>
                        <select className="custom-select" id="inputGroupSelect01">
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" for="inputGroupSelect01">Third Option</label>
                        </div>
                        <select className="custom-select" id="inputGroupSelect01">
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" for="inputGroupSelect01">Fourth Option</label>
                        </div>
                        <select className="custom-select" id="inputGroupSelect01">
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <br></br>
                    <h4>Personal Information</h4>
                    <div className="input-group mb-3">
                        <select className="custom-select" id="inputGroupSelect01" style="max-width:10%; padding-right:3px;">
                            <option selected>Title</option>
                            <option value="1">Mr</option>
                            <option value="2">Mrs</option>
                            <option value="3">Miss</option>
                            <option value="3">Rev</option>
                        </select>
                        <input type="text" placeholder="Name with initials" className="form-control"></input>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" placeholder="Name denoted by initials" className="form-control"></input>
                    </div>
                    <div className="input-group mb-3">
                        <select className="custom-select" id="inputGroupSelect01">
                            <option selected>Gender</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                        </select>
                    </div>
                    <div className="row">
                        <div className='col-sm-6'>
                            <div className="form-group">
                                <div className='input-group date' id='datetimepicker1'>
                                    <input type='text' className="form-control" placeholder="Date of Birth" />
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-calendar"></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" placeholder="Email Address" className="form-control"></input>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" placeholder="NIC Number" className="form-control"></input>
                        <select className="custom-select" id="inputGroupSelect01" style="max-width:10%; padding-right:3px;">
                            <option selected>V</option>
                            <option value="1">X</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" placeholder="Mobile" className="form-control"></input>
                        <input type="text" placeholder="Land Line" className="form-control"></input>
                    </div>
                    <div className="input-group mb-3">
                        <textarea className="form-control" rows="3" placeholder="Address"></textarea>
                    </div>
                    <br></br>
                    <h4>University Education (Undergraduate degree)</h4>
                    <div className="input-group mb-3">
                        <input type="text" placeholder="Degree Title" className="form-control"></input>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" placeholder="University" className="form-control"></input>
                    </div>
                    <div className="input-group mb-3">
                        <select className="custom-select" id="inputGroupSelect01">
                            <option selected>Year</option>
                            <option value="1">2006</option>
                            <option value="2">2005</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <select className="custom-select" id="inputGroupSelect01">
                            <option selected>className</option>
                            <option value="1">First</option>
                            <option value="2">Second</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <select className="custom-select" id="inputGroupSelect01">
                            <option selected>Study Period</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </div>
                    <br></br>
                    <h4>University Education (Postgraduate degree)</h4>
                    <div className="input-group mb-3">
                        <input type="text" placeholder="Degree Title" className="form-control"></input>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" placeholder="University" className="form-control"></input>
                    </div>
                    <div className="input-group mb-3">
                        <select className="custom-select" id="inputGroupSelect01">
                            <option selected>Year</option>
                            <option value="1">2006</option>
                            <option value="2">2005</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <select className="custom-select" id="inputGroupSelect01">
                            <option selected>className</option>
                            <option value="1">First</option>
                            <option value="2">Second</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <select className="custom-select" id="inputGroupSelect01">
                            <option selected>Study Period</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </div>
                    <br></br>
                    <h4>University Education (Anyother degree)</h4>
                    <div className="input-group mb-3">
                        <input type="text" placeholder="Degree Title" className="form-control"></input>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" placeholder="University" className="form-control"></input>
                    </div>
                    <div className="input-group mb-3">
                        <select className="custom-select" id="inputGroupSelect01">
                            <option selected>Year</option>
                            <option value="1">2006</option>
                            <option value="2">2005</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <select className="custom-select" id="inputGroupSelect01">
                            <option selected>Class</option>
                            <option value="1">First</option>
                            <option value="2">Second</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <select className="custom-select" id="inputGroupSelect01">
                            <option selected>Study Period</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </div>
                    <br></br>
                    <h3 className="display-5">Professinal Qualifications</h3>
                    <br></br>
                    <h4>Qualification</h4>
                    <div className="input-group mb-3">
                        <input type="text" placeholder="Qualification" className="form-control"></input>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" placeholder="Organization" className="form-control"></input>
                    </div>
                    <br></br>
                    <h3 className="display-5">Work Experience</h3>
                    <br></br>
                    <h4>Work Experience</h4>
                    <div className="input-group mb-3">
                        <input type="text" placeholder="Designation" className="form-control"></input>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" placeholder="Organization" className="form-control"></input>
                    </div>
                    <div className="input-group mb-3">
                        <textarea className="form-control" rows="3" placeholder="Address"></textarea>
                    </div>
                    <div className="row">
                        <div className='col-sm-6'>
                            <div className="form-group">
                                <div className='input-group date' id='datetimepicker1'>
                                    <input type='text' className="form-control" placeholder="From Date" />
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-calendar"></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" placeholder="Email" className="form-control"></input>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" placeholder="Fixed line number" className="form-control"></input>
                    </div>
                    <div className="input-group mb-3">
                        <textarea className="form-control" rows="3" placeholder="Job Description"></textarea>
                    </div>
                    <div className="input-group mb-3">
                        <textarea className="form-control" rows="3" placeholder="Correspondence Address"></textarea>
                    </div>

                    <h4>Employment Records</h4>
                    <div className="input-group mb-3">
                        <input type="text" placeholder="Designation" className="form-control"></input>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" placeholder="Work palce/ Employment" className="form-control"></input>
                    </div>
                    <div className="row">
                        <div className='col-sm-6'>
                            <div className="form-group">
                                <div className='input-group date' id='datetimepicker1'>
                                    <input type='text' className="form-control" placeholder="From Date" />
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-calendar"></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-sm-6'>
                            <div className="form-group">
                                <div className='input-group date' id='datetimepicker1'>
                                    <input type='text' className="form-control" placeholder="To Date" />
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-calendar"></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 className="display-5">Referees</h3>
                    <br></br>
                    <h4>1) Academic or prfessional</h4>
                    <div className="input-group mb-3">
                        <input type="text" placeholder="Name" className="form-control"></input>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" placeholder="Designation" className="form-control"></input>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" placeholder="Work palce/ Employment" className="form-control"></input>
                    </div>
                    <div className="row">
                        <div className='col-sm-6'>
                            <div className="form-group">
                                <div className='input-group date' id='datetimepicker1'>
                                    <input type='text' className="form-control" placeholder="From Date" />
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-calendar"></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-sm-6'>
                            <div className="form-group">
                                <div className='input-group date' id='datetimepicker1'>
                                    <input type='text' className="form-control" placeholder="To Date" />
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-calendar"></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4>2) Academic or prfessional</h4>
                    <div className="input-group mb-3">
                        <input type="text" placeholder="Name" className="form-control"></input>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" placeholder="Designation" className="form-control"></input>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" placeholder="Work palce/ Employment" className="form-control"></input>
                    </div>
                    <div className="row">
                        <div className='col-sm-6'>
                            <div className="form-group">
                                <div className='input-group date' id='datetimepicker1'>
                                    <input type='text' className="form-control" placeholder="From Date" />
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-calendar"></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-sm-6'>
                            <div className="form-group">
                                <div className='input-group date' id='datetimepicker1'>
                                    <input type='text' className="form-control" placeholder="To Date" />
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-calendar"></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <input className="btn btn-primary btn-lg" type="submit" value="Submit"></input>
                </form>
                <br></br>
            </div>
        </div>
    );
}

export default Streg;