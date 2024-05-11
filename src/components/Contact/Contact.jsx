import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <p>Name: {name}</p>
      <p>Number: {number}</p>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </>
  );
};

export default Contact;
