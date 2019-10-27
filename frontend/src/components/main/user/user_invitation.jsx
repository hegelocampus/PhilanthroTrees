import React from 'react';

class Invite extends React.Component {

  constructor(props){
    super(props);

    this.state ={
      email: "",
    }
    this.submitInvite = this.submitInvite.bind(this);
    this.checkNotEmpty = this.checkNotEmpty.bind(this);
  }

  submitInvite(e){
    e.preventDefault();
    this.props.userInvite(this.state.email,
       { id: this.props.community.id,
         name: this.props.community.name})
  }

  update(field){
    return (e)=>{
      this.setState({[field]: e.target.value})
    }
  }

  checkNotEmpty(object) {
    for (const key in object) {
      if (object.hasOwnProperty(key))
        return true;
    }
    return false;
  }

  render(){

    let inviteForm = <p></p>;

    let invite = <p></p>;
    

     inviteForm = <form onSubmit={this.submitInvite}>

        <p>Enter the Email of the member you would like to invite:</p>
        <label htmlFor="">
          Email:
        <input type="text" value={this.state.email} onChange={this.update('email')}/>
        </label>

        <input type="submit" value="Send Invite"/>
      </form>
    

    if (this.checkNotEmpty(this.props.invite)){
      invite = <p>{this.props.invite.msg}</p>
    }
    
    return(
      <React.Fragment>
        {inviteForm}
        {invite}
      </React.Fragment>
    )
  }
}

export default Invite;



// import {
//   useDispatch,
//   useSelector
// } from 'react-redux';
// import { userInvite } from '../../../actions/user_actions';
// import { Formik, Form, Field, ErrorMessage } from 'formik';

// export default (props) => {
//   const dispatch = useDispatch();

//   const community = useSelector(state =>{

//     if (state.entities.community){
//       return({
//         id: state.entities.community.id,
//         name: state.entities.community.name
//       })
//     }
//   });


//   return (
//     <React.Fragment>
//       <Formik
//         initialValues={{
//           emailAddress: '',
//           id: community.id,
//           name: community.name
//         }}
//         validate={values => {
//           let errors = {};
//           if (!values.emailAddress) {
//             errors.emailAddress = 'Required';
//           } else if (
//             !/^[A-Z0-9._%+-]/i.test(values.emailAddress)
//           ) {
//             errors.emailAddress = 'Invalid email';
//           }
//           return errors;
//         }}
//         onSubmit={(values, { setSubmitting }) => {
//           dispatch(userInvite(values.emailAddress, values)).then(
//             () => {
//               setSubmitting(false);
//             }
//           );
//         }}
//         render={({ errors, status, touched, isSubmitting }) => (
//           <Form>
//             <Field type="emailAddress" name="emailAddress" />
//             <ErrorMessage name="emailAddress" component="div" />
//             <button type="submit" disabled={isSubmitting}>
//               Send Invite
//             </button>
//           </Form>
//         )}
//       />
//     </React.Fragment>
//   );

// }