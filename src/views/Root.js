import React from 'react';
import GameScreen from '../Components/organisms/GameScreen/GameScreen';
import HomeScreen from '../Components/organisms/HomeScreen/HomeScreen';
import Layout from '../Components/templates/Layout';

function Root() {
  return (
    <Layout>
      {/* <HomeScreen /> */}
      <GameScreen />
    </Layout>
  );
}

export default Root;
