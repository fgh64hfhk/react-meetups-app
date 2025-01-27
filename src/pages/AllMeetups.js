import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-48a4f-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  let content;

  if (isLoading) {
    content = (
      <section>
        <p style={{ fontSize: 25 }}>Loading...</p>
      </section>
    );
  } else if (loadedMeetups.length === 0) {
    content = (
      <section>
        <p style={{ fontSize: 25 }}>No meetups found.</p>
      </section>
    );
  } else {
    content = <MeetupList meetups={loadedMeetups} />;
  }

  return (
    <section>
      <h1>All Meetups</h1>
      {content}
    </section>
  );
}

export default AllMeetupsPage;
