import { login } from '../../firebase'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Input from './components/Input'
import Spereator from './components/Separator'
import { loginSchema } from './validation'
import { useSelector } from 'react-redux'

export default function Login() {

    const navigate = useNavigate()
    const {user:currentUser} = useSelector(state => state.auth)

    const handleSubmit = async (values, actions) => {
        const user = await login(values.email, values.password)
        if(user){
            navigate("/", {replace:true})
        }
    }
    console.log(currentUser)
  return currentUser ? <Navigate to={"/"} replace={true} /> : (
    <div className='w-full'>
        <div className='pt-[25px] pb-[22px] mb-[30px] flex justify-center items-center border-b w-full border-[#d9dadc]'>

            <svg className='h-14' role="img" viewBox="0 0 78 24" height="100%" ><path d="M18.616 10.639c-3.77-2.297-9.99-2.509-13.59-1.388a1.077 1.077 0 0 1-1.164-.363 1.14 1.14 0 0 1-.119-1.237c.136-.262.37-.46.648-.548 4.132-1.287 11-1.038 15.342 1.605a1.138 1.138 0 0 1 .099 1.863 1.081 1.081 0 0 1-.813.213c-.142-.02-.28-.07-.403-.145Zm-.124 3.402a.915.915 0 0 1-.563.42.894.894 0 0 1-.69-.112c-3.144-1.983-7.937-2.557-11.657-1.398a.898.898 0 0 1-.971-.303.952.952 0 0 1-.098-1.03.929.929 0 0 1 .54-.458c4.248-1.323 9.53-.682 13.14 1.595a.95.95 0 0 1 .3 1.286Zm-1.43 3.267a.73.73 0 0 1-.45.338.712.712 0 0 1-.553-.089c-2.748-1.722-6.204-2.111-10.276-1.156a.718.718 0 0 1-.758-.298.745.745 0 0 1-.115-.265.757.757 0 0 1 .092-.563.737.737 0 0 1 .457-.333c4.455-1.045 8.277-.595 11.361 1.338a.762.762 0 0 1 .241 1.028ZM11.696 0C5.237 0 0 5.373 0 12c0 6.628 5.236 12 11.697 12 6.46 0 11.698-5.372 11.698-12 0-6.627-5.238-12-11.699-12h.001Zm20.126 11.078c-2.019-.494-2.379-.84-2.379-1.57 0-.688.633-1.151 1.572-1.151.91 0 1.814.352 2.76 1.076a.131.131 0 0 0 .187-.03l.987-1.426a.139.139 0 0 0-.025-.185c-1.127-.928-2.396-1.378-3.88-1.378-2.18 0-3.703 1.342-3.703 3.263 0 2.06 1.315 2.788 3.585 3.352 1.932.457 2.258.84 2.258 1.524 0 .757-.659 1.229-1.72 1.229-1.18 0-2.141-.408-3.216-1.364a.13.13 0 0 0-.188.016l-1.106 1.35a.137.137 0 0 0 .013.188c1.252 1.147 2.79 1.752 4.451 1.752 2.35 0 3.869-1.317 3.869-3.356 0-1.723-1.003-2.676-3.465-3.29Zm10.487 2.31c0 1.454-.874 2.47-2.125 2.47-1.235 0-2.169-1.061-2.169-2.47 0-1.41.933-2.47 2.17-2.47 1.23 0 2.124 1.038 2.124 2.47Zm-1.706-4.354c-1.018 0-1.854.412-2.543 1.256v-.95a.136.136 0 0 0-.038-.095.132.132 0 0 0-.093-.04h-1.81a.131.131 0 0 0-.093.04.136.136 0 0 0-.039.096v10.546c0 .076.06.137.133.137h1.809a.132.132 0 0 0 .093-.041.136.136 0 0 0 .038-.096v-3.329c.69.794 1.525 1.18 2.543 1.18 1.893 0 3.808-1.494 3.808-4.35 0-2.858-1.915-4.354-3.808-4.354Zm8.72 6.839c-1.297 0-2.274-1.068-2.274-2.486 0-1.422.943-2.455 2.244-2.455 1.305 0 2.288 1.069 2.288 2.487 0 1.422-.949 2.454-2.258 2.454Zm0-6.838c-2.438 0-4.347 1.926-4.347 4.383 0 2.432 1.896 4.338 4.317 4.338 2.445 0 4.36-1.92 4.36-4.369 0-2.44-1.901-4.353-4.33-4.353Zm9.535.17h-1.99V7.117a.136.136 0 0 0-.08-.126.13.13 0 0 0-.052-.01h-1.809a.133.133 0 0 0-.093.04.136.136 0 0 0-.038.095v2.087h-.87a.131.131 0 0 0-.122.085.139.139 0 0 0-.01.052v1.595c0 .074.06.135.132.135h.87v4.126c0 1.667.809 2.513 2.404 2.513.648 0 1.186-.138 1.694-.434a.135.135 0 0 0 .067-.117V15.64a.137.137 0 0 0-.063-.115.13.13 0 0 0-.129-.006c-.349.18-.685.263-1.061.263-.58 0-.84-.271-.84-.876V11.07h1.99a.13.13 0 0 0 .094-.04.136.136 0 0 0 .039-.096V9.339a.137.137 0 0 0-.039-.096.132.132 0 0 0-.094-.04v.001Zm6.934.007v-.255c0-.755.281-1.092.914-1.092.376 0 .68.077 1.019.194a.13.13 0 0 0 .118-.02.135.135 0 0 0 .056-.11V6.365a.137.137 0 0 0-.026-.081.133.133 0 0 0-.068-.05 4.852 4.852 0 0 0-1.502-.22c-1.67 0-2.554.965-2.554 2.788v.393h-.87a.132.132 0 0 0-.093.04.136.136 0 0 0-.038.096v1.603c0 .075.059.136.132.136h.87v6.364c0 .075.058.135.131.135h1.809c.072 0 .131-.06.131-.135V11.07h1.69l2.586 6.362c-.294.669-.583.802-.977.802-.319 0-.654-.098-.998-.29a.133.133 0 0 0-.105-.01.135.135 0 0 0-.078.072l-.612 1.38a.137.137 0 0 0 .056.175 3.733 3.733 0 0 0 1.932.508c1.334 0 2.073-.638 2.724-2.355l3.137-8.317a.14.14 0 0 0-.014-.126.131.131 0 0 0-.108-.06h-1.883a.132.132 0 0 0-.126.092l-1.928 5.651L69.006 9.3a.133.133 0 0 0-.124-.088h-3.09v.001Zm-4.02-.008h-1.809a.132.132 0 0 0-.093.041.136.136 0 0 0-.038.096v8.094c0 .075.06.135.132.135h1.809c.072 0 .131-.06.131-.135V9.34a.136.136 0 0 0-.038-.096.133.133 0 0 0-.094-.04Zm-.896-3.685a1.295 1.295 0 0 0-.919.393c-.243.25-.379.586-.377.937a1.342 1.342 0 0 0 .377.938 1.304 1.304 0 0 0 .92.393c.346-.002.677-.143.92-.393s.379-.587.377-.938c0-.735-.581-1.33-1.296-1.33h-.002Zm15.918 4.49h-.331v.434h.331c.165 0 .264-.083.264-.216 0-.142-.099-.217-.264-.217Zm.215.619.36.517h-.304l-.323-.474h-.279v.474h-.254v-1.37h.595c.31 0 .515.163.515.436a.412.412 0 0 1-.31.417Zm-.282-1.31c-.652 0-1.146.532-1.146 1.183 0 .65.49 1.175 1.139 1.175.652 0 1.147-.532 1.147-1.183 0-.65-.492-1.174-1.14-1.174Zm-.007 2.488a1.259 1.259 0 0 1-.904-.384 1.296 1.296 0 0 1-.368-.92c0-.717.563-1.314 1.279-1.314a1.259 1.259 0 0 1 .903.384 1.295 1.295 0 0 1 .369.921c0 .717-.563 1.314-1.279 1.314Z"></path></svg>
        </div>
        <div className='max-w-[450px] pt-2.5 mx-auto pb-[130px] flex items-center justify-center'>
            <div className='flex flex-col w-full gap-y-2.5'>
                <p className='text-sm font-semibold text-center'>Devam etmek için Spotify'da oturum aç.</p>
                
                <button className='text-[#f8f8f8] bg-[#1877f2] font-semibold py-[13px] px-[31px] rounded-full border border-[#878787] hover:border-black flex gap-x-2.5 text-center items-center tracking-[2px] uppercase justify-center'>
                    <svg role="img" focusable="false" height="24" width="24" viewBox="0 0 24 24" ><path d="M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h8.62v-7h-2.35v-2.69h2.35v-2a3.27 3.27 0 013.49-3.59 19.25 19.25 0 012.1.11v2.43h-1.44c-1.13 0-1.35.54-1.35 1.32v1.73h2.69L17.76 14h-2.34v7H20a1 1 0 001-1V4a1 1 0 00-1-1z" fill="currentColor"></path></svg>
                    Facebook ile devam et
                </button>
                <button className='text-[#f8f8f8] bg-[#000000e6] font-semibold py-[13px] px-[31px] rounded-full border border-[#878787] hover:border-black flex gap-x-2.5 text-center items-center tracking-[2px] uppercase justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24px" height="24px">    <path d="M 16.125 1 C 14.972 1.067 13.648328 1.7093438 12.861328 2.5273438 C 12.150328 3.2713438 11.589359 4.3763125 11.818359 5.4453125 C 13.071359 5.4783125 14.329031 4.8193281 15.082031 3.9863281 C 15.785031 3.2073281 16.318 2.12 16.125 1 z M 16.193359 5.4433594 C 14.384359 5.4433594 13.628 6.5546875 12.375 6.5546875 C 11.086 6.5546875 9.9076562 5.5136719 8.3476562 5.5136719 C 6.2256562 5.5146719 3 7.4803281 3 12.111328 C 3 16.324328 6.8176563 21 8.9726562 21 C 10.281656 21.013 10.599 20.176969 12.375 20.167969 C 14.153 20.154969 14.536656 21.011 15.847656 21 C 17.323656 20.989 18.476359 19.367031 19.318359 18.082031 C 19.922359 17.162031 20.170672 16.692344 20.638672 15.652344 C 17.165672 14.772344 16.474672 9.1716719 20.638672 8.0136719 C 19.852672 6.6726719 17.558359 5.4433594 16.193359 5.4433594 z"/></svg>
                    Apple ile devam et
                </button>
                <button className='text-[#6a6a6a] bg-transparent font-semibold py-[13px] px-[31px] rounded-full border border-[#878787] hover:border-black flex gap-x-2.5 text-center items-center tracking-[2px] uppercase justify-center'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M21.6 12.2272C21.6 11.5181 21.5364 10.8363 21.4182 10.1818H12V14.0499H17.3818C17.15 15.2999 16.4455 16.359 15.3864 17.0681V19.5772H18.6182C20.5091 17.8363 21.6 15.2727 21.6 12.2272Z" fill="#4285F4"></path><path fillRule="evenodd" clipRule="evenodd" d="M12 21.9999C14.7 21.9999 16.9636 21.1044 18.6181 19.5772L15.3863 17.0681C14.4909 17.6681 13.3454 18.0226 12 18.0226C9.39542 18.0226 7.19087 16.2635 6.40451 13.8999H3.0636V16.4908C4.70905 19.759 8.09087 21.9999 12 21.9999Z" fill="#34A853"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.40455 13.9001C6.20455 13.3001 6.09091 12.6592 6.09091 12.0001C6.09091 11.341 6.20455 10.7001 6.40455 10.1001V7.50916H3.06364C2.38636 8.85916 2 10.3864 2 12.0001C2 13.6137 2.38636 15.141 3.06364 16.491L6.40455 13.9001Z" fill="#FBBC05"></path><path fillRule="evenodd" clipRule="evenodd" d="M12 5.97727C13.4681 5.97727 14.7863 6.48182 15.8227 7.47273L18.6909 4.60455C16.9591 2.99091 14.6954 2 12 2C8.09087 2 4.70905 4.24091 3.0636 7.50909L6.40451 10.1C7.19087 7.73636 9.39542 5.97727 12 5.97727Z" fill="#EA4335"></path></svg>
                    Google ile devam et
                </button>

                <Spereator/>

                <Formik 
                    initialValues={{
                        email:"",
                        password:"",
                        rememberMe: false
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={loginSchema}
                    >
                        {({values}) => (
                    <Form className='flex flex-col gap-y-4 pb-4'>
                        <Input name="email" label="E-posta adresi" placeholder="E-posta adresi" />
                        <Input name="password" type="password" label="Parola" placeholder="Parola" />
                        <a className='hover:underline'>Parolanı mı unuttun?</a>
                        <div className='flex justify-between'>
                            <div className='pb-4'>
                                <Field id="rememberMe" type="checkbox" name="rememberMe" className="hidden" />
                                <label htmlFor='rememberMe' className='py-1 min-h-[32px] flex relative items-center gap-x-3'>
                                    <span className={`w-4 relative h-4 rounded-[3px] ${values.rememberMe ? "bg-secondary before:border-b-2 before:h-[5px] before:w-[9px] before:absolute before:top-[46%] before:left-[50%] before:border-l-2 before:border-white before:-rotate-[48deg] before:-translate-x-1/2 before:-translate-y-1/2" : "bg-white border border-[#878787]"}`}></span>
                                    Beni hatırla
                                </label>
                            </div>
                            <button type='submit' className='bg-primary font-semibold tracking-[2px] uppercase py-[14px] px-8 rounded-full hover:scale-105'>Oturum Aç</button>
                        </div>
                    </Form>
                        )}
                </Formik>
                <hr className='mb-5'/>
                <div className='flex flex-col gap-y-5'>
                    <p className='text-lg text-center font-bold'>Hesabın yok mu?</p>
                    <Link className='font-semibold rounded-full border py-[13px] px-[31px] text-center tracking-[2px] uppercase border-[#878787] text-[#878787]' to="/auth/register">Spotify için kaydol</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
