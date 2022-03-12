import { Formik } from 'formik';

export default function DisplayImage() {
  return (
    <div>
      <Formik
        initialValues={{ photo1: '' }}
        onSubmit={(values) => {
          console.log('value');
        }}
      >
        {(formProps) => (
          <Form>
            <Input type='file' name='photo1' />
            <Button type='submit'>Submit</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
