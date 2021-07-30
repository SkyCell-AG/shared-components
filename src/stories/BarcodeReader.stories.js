// import React from 'react'
// import {
//     makeStyles,
// } from '@material-ui/core'

// import BarcodeReader, { getContainerNumberFromGRAI } from 'BarcodeReader'
// import Button from '../Button'

// const useStyles = makeStyles(() => {
//     return {
//         button:{
//             width: 200,
//         },
//         barcodeReaderContainer:{
//             height:600,
//         },
//         skipButton: {
//           position: 'relative'
//         },
//     }
// })

// const BarcodeReaderStory = {
//     title: 'BarcodeReader',
//     component: BarcodeReader,
// }
// const Template = (props) => {
//     const classes = useStyles()
//     const [
//         state,
//         setState,
//     ] = React.useState({
//         open: false,       
//     })
//     const onChange = ({
//         target: {
//             value,
//         },
//     }, label) => {
//         setState({open: false})
//         alert(`Scaned ${label} = ${value}`)
//     }

//     const startScan = (()=>{
//         setState({open: true})
//     })

//    const onSubmit = ()=>{ 
//        setState({open: false})
//        alert('onSubmit called') 
//     }
//     return (
//         <div>
//             <div className={classes.button}>
//             {!state.open && (
//                 <Button
//                     label="Start Scan"
//                     onClick={startScan}
//                 />)
//             }
//             </div>
//             <div className={classes.barcodeReaderContainer}> 
//             { 
//                 state.open && (
//                     <BarcodeReader 
//                         decoder={getContainerNumberFromGRAI}
//                         onChange={onChange}
//                         label="barcode"
//                         skipButton={props.skipButton}
//                         onSubmit={props.skipButton? onSubmit: undefined}
//                         classes={{
//                             skipButton: classes.skipButton,
//                         }}
//                     />)
//             }
//             </div>
//         </div>
//     )
// }

// export const Primary = Template.bind({})

// export const WithSkipButton = Template.bind({})

// WithSkipButton.args = {    
//     skipButton: Button,    
// }

// export default BarcodeReaderStory