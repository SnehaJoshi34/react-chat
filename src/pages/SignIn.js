import React from 'react';
import firebase from 'firebase/app';

import { Container, Grid, Row, Panel, Col, Button, Avatar } from 'rsuite';
import { auth } from '../misc/firebase';

const SignIn = () => {
  const signInWithProvider = async provider => {
    const result = await auth.signInWithPopup(provider);
    console.log('result', result);
  };
  const onFacebookSignIn = () => {
    signInWithProvider(new firebase.auth.FacebookAuthProvider());
  };
  const onGoogleSignIn = () => {
    signInWithProvider(new firebase.auth.GoogleAuthProvider());
  };

  return (
    <Container>
      <Grid className="mt-page">
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
              <div className="text-center">
                <h2>Welcome to Chat</h2>
                <p>progressive chat platform for neophytes</p>
              </div>
              <div className="mt-3">
                <Button block color="blue" onClick={onFacebookSignIn}>
                  <Avatar icon="facebook" />
                  Continue with Facebook
                </Button>
                <Button block color="green" onClick={onGoogleSignIn}>
                  <Avatar icon="google" />
                  Continue with Google
                </Button>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default SignIn;
