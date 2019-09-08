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

export default class p10 extends React.Component {
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
                      }}> BIO-BIZ

</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        }}>Did you know that shampoo sold in the form of dry bars or pellets can save up to 4% of global emissions due to shipping?  Come up with solutions for a startup to reduce our Carbon footprint starting with household products! 

</Text>
                        <View style={{padding:7,
                              backgroundColor: 'rgba(0,0,0,0.4)',
                            borderRadius: 4,
                            paddingLeft:10
                          }}>
                        <Text style={{fontSize: 15,
                          }}>
                           Participation: Team of 2- 3
                        </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Registration Fee: 150 INR
                        </Text>
                        <Text style={{fontSize: 15,
                              }}>
                         Prize Money: 1st – 1500/- & 2nd – 1000/-
                      </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Date: 14/09/2019
                        </Text>
                          <Text style={{fontSize: 15,
                              }}>
                           TIME- 11:00AM - 1:00PM
                        </Text>
                          <Text style={{fontSize: 15,
                            }}>
                           Venue: RK Hall, PG Block, 1st floor

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

                      }}>1. Teams of 2-3 

</Text>
                         <Text style={{paddingBottom: 20,
                        fontSize: 15,

                      }}>2. Max 15 teams 


</Text>                  

                         <Text style={{paddingBottom: 20,
                        fontSize: 15,

                      }}>3. Did you know that shampoo sold in the form of dry bars or pellets can save up to 4% of global emissions due to shipping? 
 


</Text>      
                       <Text style={{paddingBottom: 20,
                        fontSize: 15,

                      }}>4. Come up with solutions for reducing our Carbon footprint starting with household products! 


</Text>                   
			  <Text style={{paddingBottom: 20,
                        fontSize: 15,

                      }}>5. Round one - innovative idea > come up with an idea based around a product (preferably a household product that is short lived, finally ending up in a landfill) 

</Text>                  
   
			  <Text style={{paddingBottom: 20,
                        fontSize: 15,

                      }}>6. Teams will be given a minimum of one week to come up with the product and how much it contributes to excessive emissions. Their alternative or solution will be judged on obviousness, usability and uniqueness. (Presentation with technical aspects)

</Text>
                         <Text style={{paddingBottom: 20,
                        fontSize: 15,

                      }}>7. Elimination - 6 teams will move to the next round 

</Text> 

                         <Text style={{paddingBottom: 20,
                        fontSize: 15,

                      }}>8. Round 2 - Teams will have to convince why and how their hypothetical product will change the market and consumer health/behavior. Interactive round with questions from the judges and public based on cost, convenience, health concerns and sustainability.

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
                              1. Madhushree Dhondalay- 9738222354
                        </Text>
                        <Text style={{fontSize: 15,
                          }}>
                              2. Neha B- 9108035101
                        </Text>

                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>
      </Fragment>


    );
  }
}