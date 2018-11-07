import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from "moment";
//import routes from "../../route/choresRoutes";
//import deleteButton from "../../components/deleteButton";
//import ChoresModal from "./ChoresModal";
//import updateButton from "../../components/updateButton";
import Chores from "../chores";
import { Container, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label } from 'reactstrap'
import "./chores.css";
//import routes from "../components/routes"
import axios from "axios";

BigCalendar.momentLocalizer(moment);

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

class chores extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            nestedModal: false,
            closeAll: false,
            chores: [],
            title: "",
            description: "",
            dueDate: "",
            id: "",
            assignee: 
                <select>
                    <option data-roommate-id= "1">Randy</option>,
                    <option data-roommate-id= "2">Anna</option>,
                    <option data-roommate-id= "6">Nick</option>,
                    <option data-roommate-id= "7">Helen</option>
                </select>
        };
        this.toggle = this.toggle.bind(this);
        this.toggleNested = this.toggleNested.bind(this);
        this.toggleAll = this.toggleAll.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    toggleNested() {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: false
        });
    }

    toggleAll() {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: true
        });
    }

    componentDidMount() {
        axios.get('/user').then(response => {
            console.log(response.data.user)
            if (!!response.data.user) {
                console.log('THERE IS A USER')
                console.log(response.data.user.local.username)
                this.setState({
                    user: response.data.user
                })
                console.log(this.state)
                this.searchDb();
            }
        })
    }

    handlechoresChange = chores => {
        const { name, value } = chores.target;
        this.setState({
            [name]: value
        });
    }

    searchDb = () => {
        axios.get("/api/chores/user/" + this.state.user._id)
            .then(res => {
                for (let i = 0; i < res.data.length; i++) {
                    res.data[i].start = new Date(res.data[i].start)
                    res.data[i].end = new Date(res.data[i].end)
                }
                this.setState({ events: res.data });
            })
            .catch(err => console.log(err));
    };

    updateModal = (id) => {
        chores.getChores(id)
            .then(res => {
                console.log(res.data)
                var makeStart = res.data.start.split(" ");
                var makeEnd = res.data.end.split(" ");
                var makeStartDate = makeStart[0].split("-");
                var makeEndDate = makeEnd[0].split("-");
                console.log(makeStartDate)
                this.setState({
                    title: res.data.title,
                    description: res.data.description,
                    dueDate: makeStartDate[0],
                    id: res.data._id
                })
            })
            .then(this.toggle())
    };

    deleteChore = id => {
        console.log(this.state.id)
        chores.deleteChore(id)
            .then(console.log("success"))
            .catch(err => console.log(err));
    };

    editChore = (id) => {
        var updatedChore = {
            title: this.state.title,
            start: `${this.state.startYear}-${this.state.startMonth}-${this.state.startDay} ${this.state.startTime}`,
            end: `${this.state.endYear}-${this.state.endMonth}-${this.state.endDay} ${this.state.endTime}`,
            description: this.state.description
        }
        console.log(id, updatedChore)
        chores.updatedChore(id, updatedChore)
            .then(console.log("successfully updated"))
            .catch(err => console.log(err))
    }

    render() {

        return (

            <Container className="calendarContainer">
                <BigCalendar
                    chores={this.state.chores}
                    popupevents={this.state.chores}
                    views={allViews}
                    step={60}
                    showMultiDayTimes
                    defaultDate={new Date(new Date().setHours(new Date().getHours() - 3))}
                    onSelectChore={chores => this.updateModal(chores._id)}
                    onSelectSlot={slotInfo =>
                        alert(
                            `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                            `\nend: ${slotInfo.end.toLocaleString()}` +
                            `\naction: ${slotInfo.action}`
                        )
                    }
                />
                {/* <Chores /> */}

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{this.state.title}</ModalHeader>
                    <ModalBody>
                        <h3>{this.state.description}</h3>
                        <p>Starts at: {`${this.state.startYear}-${this.state.startMonth}-${this.state.startDay} ${this.state.startTime}`}</p>
                        <p>Ends at: {`${this.state.endYear}-${this.state.endMonth}-${this.state.endDay} ${this.state.endTime}`}</p>
                        <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                            <ModalHeader>Edit Chores</ModalHeader>
                            <ModalBody>
                                <Form>
                                    <FormGroup>
                                        <Label for="title">Chore Title</Label>
                                        <chores
                                            value={this.state.title}
                                            onChange={this.handlechoresChange}
                                            name="title"
                                            placeholder="What are you up to?" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="description">Chore Description </Label>
                                        <chores
                                            value={this.state.description}
                                            onChange={this.handlechoresChange}
                                            name="description"
                                            placeholder="Tell me more." />
                                    </FormGroup>
                                    <h3>Chore Start</h3>
                                    <div className="row">
                                        <div className="col-sm">
                                            <FormGroup>
                                                <Label for="startYear">Year </Label>
                                                <chores
                                                    value={this.state.startYear}
                                                    onChange={this.handlechoresChange}
                                                    name="startYear"
                                                    placeholder="YYYY" />
                                            </FormGroup>
                                        </div>
                                        <div className="col-sm">
                                            <FormGroup>
                                                <Label for="startMonth">Month </Label>
                                                <chores
                                                    value={this.state.startMonth}
                                                    onChange={this.handlechoresChange}
                                                    name="startMonth"
                                                    placeholder="MM" />
                                            </FormGroup>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm">
                                            <FormGroup>
                                                <Label for="startDate">Date </Label>
                                                <chores
                                                    value={this.state.startDay}
                                                    onChange={this.handlechoresChange}
                                                    name="startDay"
                                                    placeholder="DD" />
                                            </FormGroup>
                                        </div>
                                        <div className="col-sm">
                                            <FormGroup>
                                                <Label for="startTime">Time </Label>
                                                <chores
                                                    value={this.state.startTime}
                                                    onChange={this.handlechoresChange}
                                                    name="startTime"
                                                    placeholder="HH:MM (military time)" />
                                            </FormGroup>
                                        </div>
                                    </div>
                                    <h3>Chore End</h3>
                                    <div className="row">
                                        <div className="col-sm">
                                            <FormGroup>
                                                <Label for="endYear">Year </Label>
                                                <chores
                                                    value={this.state.endYear}
                                                    onChange={this.handlechoresChange}
                                                    name="endYear"
                                                    placeholder="YYYY" />
                                            </FormGroup>
                                        </div>
                                        <div className="col-sm">
                                            <FormGroup>
                                                <Label for="endMonth">Month </Label>
                                                <chores
                                                    value={this.state.endMonth}
                                                    onChange={this.handlechoresChange}
                                                    name="endMonth"
                                                    placeholder="MM" />
                                            </FormGroup>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm">
                                            <FormGroup>
                                                <Label for="endDate">Date </Label>
                                                <chores
                                                    value={this.state.endDay}
                                                    onChange={this.handlechoresChange}
                                                    name="endDay"
                                                    placeholder="DD" />
                                            </FormGroup>
                                        </div>
                                        <div className="col-sm">
                                            <FormGroup>
                                                <Label for="endTime">Time </Label>
                                                <chores
                                                    value={this.state.endTime}
                                                    onChange={this.handlechoresChange}
                                                    name="endTime"
                                                    placeholder="HH:MM (military time)" />
                                            </FormGroup>
                                        </div>
                                    </div>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <updateButton onClick={() => this.editChores(this.state.id)} />{' '}
                                <Button color="secondary" onClick={this.toggleAll}>Nevermind</Button>
                            </ModalFooter>
                        </Modal>
                    </ModalBody>
                    <ModalFooter>
                        <Button className="confirmBtn" onClick={this.toggle}>Okay</Button>{' '}
                        <Button color="info" onClick={this.toggleNested}>Edit</Button>{' '}
                        <deleteButton onClick={() => this.deleteChores(this.state.id)} />
                    </ModalFooter>
                </Modal>

            </Container>
        )
    }
};

export default chores