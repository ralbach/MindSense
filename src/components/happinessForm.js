import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';

import NavBar from './NavBar';



class HappinessForm extends React.Component {
  constructor(){
    super();
    this.state = {
      totalScore: 0,

    }
  }



  addScore = (value) => {
    let newTotal = this.state.totalScore + value;
    this.setState({totalScore: newTotal});
  }



  render(){
    return (
      <div>
        <NavBar />
        <h1>Answer these as accurately as you can based on how much you've exerienced them during the past week.</h1>
        <h3>Each question will be scored from 0 - 4</h3>
        <ul>
          <li>0 - Not at All</li>
          <li>1 - Somewhat</li>
          <li>2 - Moderately</li>
          <li>3 - A Lot</li>
          <li>4- Extremely</li>
        </ul>
        <Formik
          initialValues={{
            feelingSad: null,
            feelingUnhappy: null,
            cryingSpells: null,
            feelingDiscouraged: null,
            feelingHopeless: null,
            lowSelfEsteem: null,
            feelingWorthless: null,
            feelingGuilt: null,
            criticizingYourself: null,
            difficultyMakingDecisions: null,
            noInterestFamilyFriends: null,
            loneliness: null,
            spendingLessTime: null,
            lossOfMotivation: null,
            noInterestWork: null,
            avoidingWork: null,
            lossOfPleasure: null,
            feelingTired: null,
            difficultySleeping: null,
            decreasedIncreasedApetite: null,
            noInterestSex: null,
            worriedAboutHealth: null,
            suicidalThoughts: null,
            endYourLife: null,
            planOnHarmingYourself: null,
          }}
           validationSchema = {yup.object().shape({
            feelingSad: yup.string().required("please fill all responses before continuing."),
            feelingUnhappy: yup.string().required("please fill all responses before continuing."),
            cryingSpells: yup.string().required("please fill all responses before continuing."),
            feelingDiscouraged: yup.string().required("please fill all responses before continuing."),
            feelingHopeless: yup.string().required("please fill all responses before continuing."),
            lowSelfEsteem: yup.string().required("please fill all responses before continuing."),
            feelingWorthless: yup.string().required("please fill all responses before continuing."),
            feelingGuilt: yup.string().required("please fill all responses before continuing."),
            criticizingYourself: yup.string().required("please fill all responses before continuing."),
            difficultyMakingDecisions: yup.string().required("please fill all responses before continuing."),
            noInterestFamilyFriends: yup.string().required("please fill all responses before continuing."),
            loneliness: yup.string().required("please fill all responses before continuing."),
            spendingLessTime: yup.string().required("please fill all responses before continuing."),
            lossOfMotivation: yup.string().required("please fill all responses before continuing."),
            noInterestWork: yup.string().required("please fill all responses before continuing."),
            avoidingWork: yup.string().required("please fill all responses before continuing."),
            lossOfPleasure: yup.string().required("please fill all responses before continuing."),
            feelingTired: yup.string().required("please fill all responses before continuing."),
            difficultySleeping: yup.string().required("please fill all responses before continuing."),
            decreasedIncreasedApetite: yup.string().required("please fill all responses before continuing."),
            noInterestSex: yup.string().required("please fill all responses before continuing."),
            worriedAboutHealth: yup.string().required("please fill all responses before continuing."),
            suicidalThoughts: yup.string().required("please fill all responses before continuing."),
            endYourLife: yup.string().required("please fill all responses before continuing."),
            planOnHarmingYourself: yup.string().required("please fill all responses before continuing."),
          })}

          onSubmit={
            (values, { setSubmitting }) =>{
            Object.keys(values).forEach((i) => {
              this.addScore(Number(values[i]));
            })
            console.log(this.state.totalScore)}
          }>

            {({
              values,
              submitForm,
              isSubmitting
            }) => (
          <Form onSubmit={(e) => {e.preventDefault(); submitForm(e)}}>
            <div>
              <label>
              1. Feeling Sad or down in the dumps.
              </label>
              <Field type="radio" name="feelingSad" value="0" />0
              <Field type="radio" name="feelingSad" value="1" />1
              <Field type="radio" name="feelingSad" value="2" />2
              <Field type="radio" name="feelingSad" value="3" />3
              <Field type="radio" name="feelingSad" value="4" />4
            </div>

            <div>
              <label>
              2. Feeling unhappy or blue.
              </label>
              <Field type="radio" name="feelingUnhappy" value="0" />0
              <Field type="radio" name="feelingUnhappy" value="1" />1
              <Field type="radio" name="feelingUnhappy" value="2" />2
              <Field type="radio" name="feelingUnhappy" value="3" />3
              <Field type="radio" name="feelingUnhappy" value="4" />4
            </div>

            <div>
              <label>
              3. Crying spells or tearfulness.
              </label>
              <Field type="radio" name="cryingSpells" value="0" />0
              <Field type="radio" name="cryingSpells" value="1" />1
              <Field type="radio" name="cryingSpells" value="2" />2
              <Field type="radio" name="cryingSpells" value="3" />3
              <Field type="radio" name="cryingSpells" value="4" />4
            </div>

            <div>
              <label>
              4. Feeling discouraged.
              </label>
              <Field type="radio" name="feelingDiscouraged" value="0" />0
              <Field type="radio" name="feelingDiscouraged" value="1" />1
              <Field type="radio" name="feelingDiscouraged" value="2" />2
              <Field type="radio" name="feelingDiscouraged" value="3" />3
              <Field type="radio" name="feelingDiscouraged" value="4" />4
            </div>

            <div>
              <label>
              5. Feeling hopeless.
              </label>
              <Field type="radio" name="feelingHopeless" value="0" />0
              <Field type="radio" name="feelingHopeless" value="1" />1
              <Field type="radio" name="feelingHopeless" value="2" />2
              <Field type="radio" name="feelingHopeless" value="3" />3
              <Field type="radio" name="feelingHopeless" value="4" />4
            </div>

            <div>
              <label>
              6. Having low self-esteem.
              </label>
              <Field type="radio" name="lowSelfEsteem" value="0" />0
              <Field type="radio" name="lowSelfEsteem" value="1" />1
              <Field type="radio" name="lowSelfEsteem" value="2" />2
              <Field type="radio" name="lowSelfEsteem" value="3" />3
              <Field type="radio" name="lowSelfEsteem" value="4" />4
            </div>

            <div>
              <label>
              7. Feeling worthless or inadequate.
              </label>
              <Field type="radio" name="feelingWorthless" value="0" />0
              <Field type="radio" name="feelingWorthless" value="1" />1
              <Field type="radio" name="feelingWorthless" value="2" />2
              <Field type="radio" name="feelingWorthless" value="3" />3
              <Field type="radio" name="feelingWorthless" value="4" />4
            </div>

            <div>
              <label>
              8. Feeling guilt or shame.
              </label>
              <Field type="radio" name="feelingGuilt" value="0" />0
              <Field type="radio" name="feelingGuilt" value="1" />1
              <Field type="radio" name="feelingGuilt" value="2" />2
              <Field type="radio" name="feelingGuilt" value="3" />3
              <Field type="radio" name="feelingGuilt" value="4" />4
            </div>

            <div>
              <label>
              9. Criticizing or blaming yourself.
              </label>
              <Field type="radio" name="criticizingYourself" value="0" />0
              <Field type="radio" name="criticizingYourself" value="1" />1
              <Field type="radio" name="criticizingYourself" value="2" />2
              <Field type="radio" name="criticizingYourself" value="3" />3
              <Field type="radio" name="criticizingYourself" value="4" />4
            </div>

            <div>
              <label>
              10. Having difficulty making decisions.
              </label>
              <Field type="radio" name="difficultyMakingDecisions" value="0" />0
              <Field type="radio" name="difficultyMakingDecisions" value="1" />1
              <Field type="radio" name="difficultyMakingDecisions" value="2" />2
              <Field type="radio" name="difficultyMakingDecisions" value="3" />3
              <Field type="radio" name="difficultyMakingDecisions" value="4" />4
            </div>

            <div>
              <label>
              11. Loss of interest in family friends or colleagues.
              </label>
              <Field type="radio" name="noInterestFamilyFriends" value="0" />0
              <Field type="radio" name="noInterestFamilyFriends" value="1" />1
              <Field type="radio" name="noInterestFamilyFriends" value="2" />2
              <Field type="radio" name="noInterestFamilyFriends" value="3" />3
              <Field type="radio" name="noInterestFamilyFriends" value="4" />4
            </div>

            <div>
              <label>
              12. Feeling loneliness
              </label>
              <Field type="radio" name="loneliness" value="0" />0
              <Field type="radio" name="loneliness" value="1" />1
              <Field type="radio" name="loneliness" value="2" />2
              <Field type="radio" name="loneliness" value="3" />3
              <Field type="radio" name="loneliness" value="4" />4
            </div>

            <div>
              <label>
              13. Spending less time with family or friends.
              </label>
              <Field type="radio" name="spendingLessTime" value="0" />0
              <Field type="radio" name="spendingLessTime" value="1" />1
              <Field type="radio" name="spendingLessTime" value="2" />2
              <Field type="radio" name="spendingLessTime" value="3" />3
              <Field type="radio" name="spendingLessTime" value="4" />4
            </div>

            <div>
              <label>
              14. Feeling a loss of motivation.
              </label>
              <Field type="radio" name="lossOfMotivation" value="0" />0
              <Field type="radio" name="lossOfMotivation" value="1" />1
              <Field type="radio" name="lossOfMotivation" value="2" />2
              <Field type="radio" name="lossOfMotivation" value="3" />3
              <Field type="radio" name="lossOfMotivation" value="4" />4
            </div>

            <div>
              <label>
              15. Loss of interest in work or other activities.
              </label>
              <Field type="radio" name="noInterestWork" value="0" />0
              <Field type="radio" name="noInterestWork" value="1" />1
              <Field type="radio" name="noInterestWork" value="2" />2
              <Field type="radio" name="noInterestWork" value="3" />3
              <Field type="radio" name="noInterestWork" value="4" />4
            </div>

            <div>
              <label>
              16. Avoiding work or other activities.
              </label>
              <Field type="radio" name="avoidingWork" value="0" />0
              <Field type="radio" name="avoidingWork" value="1" />1
              <Field type="radio" name="avoidingWork" value="2" />2
              <Field type="radio" name="avoidingWork" value="3" />3
              <Field type="radio" name="avoidingWork" value="4" />4
            </div>

            <div>
              <label>
              17. Loss of pleasure or satisfaction in life.
              </label>
              <Field type="radio" name="lossOfPleasure" value="0" />0
              <Field type="radio" name="lossOfPleasure" value="1" />1
              <Field type="radio" name="lossOfPleasure" value="2" />2
              <Field type="radio" name="lossOfPleasure" value="3" />3
              <Field type="radio" name="lossOfPleasure" value="4" />4
            </div>

            <div>
              <label>
              18. Feeling tired.
              </label>
              <Field type="radio" name="feelingTired" value="0" />0
              <Field type="radio" name="feelingTired" value="1" />1
              <Field type="radio" name="feelingTired" value="2" />2
              <Field type="radio" name="feelingTired" value="3" />3
              <Field type="radio" name="feelingTired" value="4" />4
            </div>

            <div>
              <label>
              19. Difficulty sleeping or sleeping too much.
              </label>
              <Field type="radio" name="difficultySleeping" value="0" />0
              <Field type="radio" name="difficultySleeping" value="1" />1
              <Field type="radio" name="difficultySleeping" value="2" />2
              <Field type="radio" name="difficultySleeping" value="3" />3
              <Field type="radio" name="difficultySleeping" value="4" />4
            </div>

            <div>
              <label>
              20. Decreased or increased apetite.
              </label>
              <Field type="radio" name="decreasedIncreasedApetite" value="0" />0
              <Field type="radio" name="decreasedIncreasedApetite" value="1" />1
              <Field type="radio" name="decreasedIncreasedApetite" value="2" />2
              <Field type="radio" name="decreasedIncreasedApetite" value="3" />3
              <Field type="radio" name="decreasedIncreasedApetite" value="4" />4
            </div>

            <div>
              <label>
              21. Loss of interest in sex.
              </label>
              <Field type="radio" name="noInterestSex" value="0" />0
              <Field type="radio" name="noInterestSex" value="1" />1
              <Field type="radio" name="noInterestSex" value="2" />2
              <Field type="radio" name="noInterestSex" value="3" />3
              <Field type="radio" name="noInterestSex" value="4" />4
            </div>

            <div>
              <label>
              22. Worrying about your health.
              </label>
              <Field type="radio" name="worriedAboutHealth" value="0" />0
              <Field type="radio" name="worriedAboutHealth" value="1" />1
              <Field type="radio" name="worriedAboutHealth" value="2" />2
              <Field type="radio" name="worriedAboutHealth" value="3" />3
              <Field type="radio" name="worriedAboutHealth" value="4" />4
            </div>

            <div>
              <label>
              23. Do you have any suicidal thoughts?
              </label>
              <Field type="radio" name="suicidalThoughts" value="0" />0
              <Field type="radio" name="suicidalThoughts" value="1" />1
              <Field type="radio" name="suicidalThoughts" value="2" />2
              <Field type="radio" name="suicidalThoughts" value="3" />3
              <Field type="radio" name="suicidalThoughts" value="4" />4
            </div>

            <div>
              <label>
              24. Would you like to end your life?
              </label>
              <Field type="radio" name="endYourLife" value="0" />0
              <Field type="radio" name="endYourLife" value="1" />1
              <Field type="radio" name="endYourLife" value="2" />2
              <Field type="radio" name="endYourLife" value="3" />3
              <Field type="radio" name="endYourLife" value="4" />4
            </div>

            <div>
              <label>
              25. Do you have a plan for harming yourself?
              </label>
              <Field type="radio" name="planOnHarmingYourself" value="0" />0
              <Field type="radio" name="planOnHarmingYourself" value="1" />1
              <Field type="radio" name="planOnHarmingYourself" value="2" />2
              <Field type="radio" name="planOnHarmingYourself" value="3" />3
              <Field type="radio" name="planOnHarmingYourself" value="4" />4
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
            )}
        </Formik>
      </div>
    )
  }

}


export default HappinessForm;