import axios from 'axios';


handleSubmit(event){
    event.preventDefault();
    console.log('sign-up-form, username: ');
    console.log(this.state.username);
    axios.post('/'), {
        username: this.state.username,
        password: this.state.password
    }
    .then(response => {
        console.log(response);
        if (response.data) {
            console.log('successful signup');
            this.setState({
                redirectTO: '/login'
            })
        } else {
            console.log('Sign-up error');
        }
    }).catch(error => {
        console.log('sign up server error:');
        console.log(error);
    })
};
