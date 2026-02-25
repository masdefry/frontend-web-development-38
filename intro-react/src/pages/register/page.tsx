import { useFormik } from 'formik';

export default function RegisterPage() {
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
    },
    onSubmit: (values: any) => {},
  });

  return (
    <>
      <form className='flex flex-col items-center py-10'>
        <fieldset className='fieldset w-90'>
          <legend className='fieldset-legend'>Email</legend>
          <input
            id='email'
            name='email'
            onChange={formik?.handleChange}
            value={formik?.values?.email}
            type='text'
            className='input'
            placeholder='Type your email'
          />
          <p className='label'>Optional</p>
        </fieldset>
        <fieldset className='fieldset w-90'>
          <legend className='fieldset-legend'>Password</legend>
          <input
            id='password'
            name='password'
            onChange={formik?.handleChange}
            value={formik?.values?.password}
            type='password'
            className='input'
            placeholder='Type your password'
          />
          <p className='label'>Optional</p>
        </fieldset>
        <fieldset className='fieldset w-90'>
          <legend className='fieldset-legend'>Name</legend>
          <input
            id='name'
            name='name'
            onChange={formik?.handleChange}
            value={formik?.values?.name}
            type='text'
            className='input'
            placeholder='Type your name'
          />
          <p className='label'>Optional</p>
        </fieldset>
        <button className='btn bg-green-700 text-white'>Register</button>
      </form>
    </>
  );
}
