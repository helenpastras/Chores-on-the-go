
import React, { Component } from 'react';
import "./dashboard.css";

// const MOCK_DATA = {
//     incomplete: [
//         {
//             name: 'Chore #4'
//         },
//         {
//             name: 'Chore #5'
//         }
//     ],
//     progress: [
//         {
//             name: 'Chore #1'
//         }
//     ],
//     complete: [
//         {
//             name: 'Chore #2'
//         },
//         {
//             name: 'Chore #3'
//         },
//         {
//             name: 'Chore #5'
//         }
//     ],
// };


const MOCK_ROOMMATES_DATA = [
    {
        userId: 'some_id',
        name: 'John Doe',
        chores: {
            incomplete: [
                {
                    name: 'Chore #4'
                },
                {
                    name: 'Chore #5'
                }
            ],
            progress: [
                {
                    name: 'Chore #1'
                }
            ],
            complete: [
                {
                    name: 'Chore #2'
                },
                {
                    name: 'Chore #3'
                },
                {
                    name: 'Chore #5'
                }
            ],
        }
    },
    {
        userId: 'some_id',
        name: 'Jane Doe',
        chores: {
            incomplete: [
                {
                    name: 'Chore #1'
                },
                {
                    name: 'Chore #5'
                }
            ],
            progress: [],
            complete: [
                {
                    name: 'Chore #2'
                },
                {
                    name: 'Chore #3'
                }
            ],
        }
    },
];

function ChoreColumn(props) {
    const { className, data } = props;
    if (!data) return null;

    return (
        <div className="progresscol">
            {data.map(chore => (
                <div>
                    <h2>{chore.name}</h2>
                </div>
            ))}
        </div>
    )
}

class Dashboard extends Component {
    componentDidMount() {
        // axios.get('/api/user/getAllChores')
        // .then(data => {
        //     this.setState({ data: data });
        // })

        this.setState({ roommates: MOCK_ROOMMATES_DATA });
    }

    state = {
        roommates: []
    };

    render() {
        const { roommates } = this.state;

        console.log(roommates);
        return (
            <div> 
                <h1>My dashboard</h1>
                {   
                    roommates.length && roommates.map(roommate => {
                        const { incomplete, progress, complete } = roommate.chores;
                        return (
                            <div className="chore-wrapper">
                                <ChoreColumn className="incompletecol" data={incomplete} />
                                <ChoreColumn className="prorgresscol" data={progress} />
                                <ChoreColumn className="completecol" data={complete} />
                            </div>
                        )
                    })
                }
                {/* <div className="chore-wrapper">
                    <ChoreColumn className="incompletecol" data={incomplete} />
                    <ChoreColumn className="prorgresscol" data={progress} />
                    <ChoreColumn className="completecol" data={complete} />
        
                </div>

                <div className="chore-wrapper">
                    <ChoreColumn className="incompletecol" data={incomplete} />
                    <ChoreColumn className="prorgresscol" data={progress} />
                    <ChoreColumn className="completecol" data={complete} />
        
                </div>

                <div className="chore-wrapper">
                    <ChoreColumn className="incompletecol" data={incomplete} />
                    <ChoreColumn className="prorgresscol" data={progress} />
                    <ChoreColumn className="completecol" data={complete} />
        
                </div> */}

            </div>
        )
    }
}

export default Dashboard;