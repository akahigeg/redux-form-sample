import { connect } from 'react-redux'
import * as ReduxForm from 'redux-form'
import SimpleForm from "../components/SimpleForm";

// 画面のルートコンポーネント - コンテナコンポーネント - プレゼンコンポーネントてかんじで階層化したいが => 考え方が違うか
// ともあれここではSimpleFormに処理をくっつける
const SimpleFormWithReduxForm = ReduxForm.reduxForm({
  form: 'simple'
})(SimpleForm)

// Selector
const selector = ReduxForm.formValueSelector('simple')
const SimpleFormWithSelector = connect(state => {
  // can select values individually
  const { firstName, lastName } = selector(state, 'firstName', 'lastName')
  return {
    firstName,
    lastName,
    fullName: `${firstName || ''} ${lastName || ''}`
  }
})(SimpleFormWithReduxForm)

// 初期値
const SimpleFormWithSelectorWithInitialValues = connect(state => { 
    return { initialValues: {firstName: "hoge", lastName: "fuga"} }
  })(SimpleFormWithSelector);

export default SimpleFormWithSelectorWithInitialValues;