import React, {Fragment} from 'react';
import {
  StatusBar,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  Dimensions} from 'react-native';
  const { width, height } = Dimensions.get('window');

export default class p3 extends React.Component {
  render() {
    return (
      <Fragment>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView>
      <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <View>
          <Image source={require('../assets/ww.jpeg')}
            style={{width:width,
            height:150}}/>
          </View>
            <View style={{paddingLeft:13,
                  paddingRight:13,
              }}>
                  <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',

                  }}>
                      <Text style={{
                        fontSize: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'rgba(0,160,169,1)',
                        fontWeight: 'bold',
                        paddingTop:20,
                        paddingBottom:30,
                        paddingLeft: 7
                      }}>MEGA-MIND

</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        }}>Have a suggestion for energy sustainability and tackle its related problems? This is the perfect platform to lighten up your idea. In this event the participants can get to present their ideas and discuss.

</Text>
                        <View style={{padding:7,
                              backgroundColor: 'rgba(0,0,0,0.4)',
                            borderRadius: 4,
                            paddingLeft:10
                          }}>
                        <Text style={{fontSize: 15,
                          }}>
                           Participation: Team of 3
                        </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Registration Fee: 150 INR
                        </Text>
                        <Text style={{fontSize: 15,
                              }}>
                         Prize Money: 1st � 1500/- & 2nd � 1000/-
                      </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Date: 14/09/2019
                        </Text>
                          <Text style={{fontSize: 15,
                              }}>
                           Time: 11:00AM - 4:00PM
                        </Text>
                          <Text style={{fontSize: 15,
                            }}>
                           Venue: CLASSROOM 606, TCE Dept, New building.
                        </Text>
                        </View>
                    </View>
                    <View style={{padding:7,
                          backgroundColor: 'rgba(0,0,0,0.4)',
                        borderRadius: 4,
                      }} >
                    <View>

                        <Text style={{
                          fontSize: 19,
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          paddingBottom:10,
                          fontWeight: 'bold',

                        }}>Rules of the event:</Text>
                    </View>
                    <View>
                        <Text style={{paddingBottom: 20,
                        fontSize: 15,

                      }}>
 1. Each team gets 15 minutes to share their ideas.

</Text>
                         <Text style={{paddingBottom: 20,
                        fontSize: 15,

                      }}>2. Participants need to get their own laptops.


</Text>
                        <Text style={{paddingBottom: 20,
                        fontSize: 15,

                      }}>3. Topic will be given on the spot, and participants get 1 hour to prepare on the given topics.

</Text>

                         <Text style={{paddingBottom: 20,
                        fontSize: 15,

                      }}>4. They have to present their ideas with a PPT.

</Text>


                    </View>
                    </View>

                    <View style={{padding:10,
                    backgroundColor: '#00000000'}} />
                    <View style={{padding:7,
                          backgroundColor: 'rgba(0,0,0,0.4)',
                        borderRadius: 4,
                        paddingTop:10
                      }}>
                        <Text style={{
                          fontSize: 19,
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          paddingBottom:10,
                          fontWeight: 'bold',
                          }}>Event Coordinators:</Text>
                        <Text style={{fontSize: 15,
                          }}>
                             1. Vidyashree T S- 8548893504

                        </Text>
                        <Text style={{fontSize: 15,
                          }}>
                              2. Shilpa M P - 6361444050

                        </Text>

                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>
      </Fragment>


    );
  }
}