import React from "react";
import { Accordion, Container } from "react-bootstrap";

const Blog = () => {
  return (
    <Container>
      <h1 className="mt-5 text-center">Q&A</h1>
      <Accordion className="w-50 mx-auto mt-5" defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Difference between authorization and authentication
          </Accordion.Header>
          <Accordion.Body>
            Authentication <br />
            While user identity has historically been validated using the
            combination of a username and password, today’s authentication
            methods commonly rely upon three classes of information: What you
            know: Most commonly, this is a password. But it can also be an
            answer to a security question or a one-time pin that grants user
            access to just one session or transaction. What you possess: This
            could be a mobile device or app, a security token, or digital ID
            card. What you are: This is biometric data such as a fingerprint,
            retinal scan, or facial recognition.
            <br />
            Authorization <br />
            Once a user is authenticated, authorization controls are then
            applied to ensure users can access the data they need and perform
            specific functions such as adding or deleting information—based on
            the permissions granted by the organization. These permissions can
            be assigned at the application, operating system, or infrastructure
            levels. Two common authorization techniques include:
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </Accordion.Header>
          <Accordion.Body>
            Firebase, Backend-as-a-Service (BaaS), is a platform by Google that
            provides functionalities and helps with the backend development of
            your Android, iOS, or web and even some products that support
            Unity3D too. <br />
            Firebase Database: used to store users data like chat messages,
            users details and other metadata Firebase Cloud Storage: used to
            store user-generated content like the profile picture, multimedia
            messages, etc. Firebase Cloud Messaging: used to send notification
            Firebase Remote Config: used to perform A/B testing on the go
            Firebase has great features, but we’ve pointed out 19 amazing things
            Firebase can do.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            What other services does firebase provide other than authentication
          </Accordion.Header>
          <Accordion.Body>
            Parse – Open Source Backend Platform;
            <br /> Back4app – Parse Hosting Platform;
            <br /> Kinvey – Mobile Backend as a Service (mBaaS) for the
            Enterprise; <br />
            Backendless – Mobile Backend and API Services Platform;
            <br /> Kuzzle – Backend for web, hybrid, or native mobile apps and
            IoT projects; <br />
            Pubnub – Real-time APIs and Global Messaging;
            <br />
            Kumulos – App Performance Management;
            <br /> Game Sparks – Game Backend Platform; <br />
            Hoodie – Generic backend with a client API for Offline First
            applications;
            <br /> Appwrite – Open-Source backend for Flutter developers
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Blog;
