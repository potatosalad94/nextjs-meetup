import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import { Fragment } from "react";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb://remiachji:9Ki54OMcjCAnU1aF@cluster0-shard-00-00.6uyjt.mongodb.net:27017,cluster0-shard-00-01.6uyjt.mongodb.net:27017,cluster0-shard-00-02.6uyjt.mongodb.net:27017/Meetups?ssl=true&replicaSet=atlas-x2ggnr-shard-0&authSource=admin&retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 3600,
  };
}

// export async function getServerSideProps() {

// }

export default HomePage;
