// File này chứa những đường dẫn cho các Component 
//.................................................
//.................................................
// Nếu như có Component nào mới thì cập nhật vào trong file này


//export auth login components: 
export { default as AuthWrapper } from './auth/AuthWrapper';
export { default as FormLogin } from './auth/login/FormLogin'
export { default as FormSignUp } from './auth/signup/FormSignUp'


//export commons components: 
export { default as DashBoard } from './common/DashBoard'
export { default as NavBar } from './common/NavBar/NavBar'

//export messages components: 
export { default as FailedMessage} from './messages/FailedMessage'
export { default as SucceedMeassage } from './messages/SucceedMeassage'


//export home components: 
export { default as LeftNav } from './home/left/LeftNav'
export { default as CenterContent } from './home/center/Center'
export { default as RightNav } from './home/right/RightNav'