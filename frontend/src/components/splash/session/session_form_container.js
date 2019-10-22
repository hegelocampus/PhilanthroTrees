import { connect } from "react-redux";
import { login, signup } from "../../../actions/session_actions";
import Form from "./session_form";

const mapStateToProps = (state, ownProps) => ({
  formType: ownProps.formType
})

const mapDispatchToProps = (dispatch, ownProps) => {
  let process = (ownProps.formType === 'login' ? login : signup);
  return { processForm: user => dispatch(process(user)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
