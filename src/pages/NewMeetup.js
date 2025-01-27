import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {

  const history = useNavigate();

  // function add meetups handler
  function addMeetupHandler(data) {
    fetch(
      "https://react-getting-started-48a4f-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      console.log("Meetup added");
      history('/');
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
  );
}

export default NewMeetupPage;
