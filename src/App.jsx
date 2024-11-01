import ArrayOfObjects from './ArrayOfObjects'
import ArrayState from './ArrayState'
import Colorpicker from './Colorpicker'
import styles from './Div.module.css' //modules styles
import ObjectState from './ObjectState'
import Prop_comp from './Prop_comp'

function App() {
   const styles2 = { // inline style
    width:'50px',
    height:'20px',
    border:'1px solid red'
   }
  return (
    <>
     <div style={styles}></div>
     <div style={styles2}></div>
     <Prop_comp name={'Olya'} age={36}/>
     <Prop_comp name={'Elie'} age={51}/>
     <Prop_comp/> /** default props were passing as guest name an 0 age */
     <Colorpicker/>
     <ObjectState/>
     <ArrayState/>
     <ArrayOfObjects/>
    </>
  )
}

export default App
