import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import { Formik } from "formik";
import * as Yup from "yup";

import { addPost, getCurrentUser, RootState } from '../../../../store';
import { User } from '../../../../types/user';
import { PostRequest } from '../../../../types/post';

import Avatar from '../../../../components/Avatar';
import TextArea from '../../../../components/TextArea';
import Button from '../../../../components/Button';

import * as S from './styles';

function Profile() {
  const user = useSelector<RootState>(getCurrentUser) as User;
  const dispatch = useDispatch();

  const schema = Yup.object({
    content: Yup.string().required().max(300).min(10),
  });

  const internalSubmit = ({ content = "" }: PostRequest, actions: any) => {
    dispatch(addPost({ content, user }));
    actions.resetForm({
      content: '',
    });
  }

  return <S.Wrapper>
    <Avatar {...user} />
    <S.Separator />
    <Formik
      validationSchema={schema}
      onSubmit={internalSubmit}
      validateOnBlur
      initialValues={{
        content: '',
      }}>
      {({ handleSubmit, handleChange, values, errors }) => (
        <Form className="w-100 d-flex flex-column align-items-end" noValidate onSubmit={handleSubmit}>
          <Form.Group className="mb-2 w-100">
            <TextArea
              className="border border-success w-100 p-1"
              name="content"
              as="textarea"
              rows={3}
              value={values.content}
              onChange={handleChange}
            />
          </Form.Group>
          <Button
            type="submit"
            size="sm"
            backgroundColor="purple"
            color="white"
            disabled={!!errors.content}
            width={164}
          >
            publicar
          </Button>
        </Form>
      )}
    </Formik>
  </S.Wrapper>
}

export default Profile;