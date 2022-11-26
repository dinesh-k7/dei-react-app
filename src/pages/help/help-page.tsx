import { SpinnerRoundOutlined } from 'spinners-react';
import '../../pages/help/help.scss';
import '../../components/get-quote/get-quote.component.scss';
import SnackBarComponent from '../../components/common/snackbar/snackbar.component';
import badgeLogo from '../../assets/images/badge_star_vector.svg';
import coloredLogo from '../../assets/images/logo_colored_square.svg';
import quolliLogo from '../../assets/images/quolli_logo.svg';
import wimpLogo from '../../assets/images/wimp_logo.svg';
import TextBox from '../../components/common/form-element/text-box';
import { constants } from '../../constants';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useEffect, useState } from 'react';

const API_ENDPOINT = `${constants.NODE_ENDPOINT}`;

const schema = yup.object().shape({
  Email: yup.string().required().email('Email is invalid'),
  Subject: yup.string().required(),
  Query: yup.string().required(),
});

interface HelpProps {
  formFields: any;
  userLogin?: (user: any) => void;
}

interface FieldProps {
  id: string;
  name: string;
  label: string;
  type: string;
  required: boolean;
  placeholder: string;
  maxlength: number;
  pattern?: string;
}

const Help: React.FC<HelpProps> = (props: HelpProps) => {
  const { register, errors, handleSubmit,reset } = useForm({
    resolver: yupResolver(schema),
  });
  const [message, setMessage] = useState(false);
  const [isFired, setIsFired] = useState(false);

  const { formFields } = props;

  const onSubmit = (data) => {
    setIsFired(true);

    let userData = {
      email: data.Email,
      subject: data.Subject,
      query: data.Query,
    };
    
    console.log(data, 'data');
    if (!errors.length) {
      fetch(`${API_ENDPOINT}/mail-service/query_mail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
        .then((response) => {
          setMessage(true);
          setIsFired(false);
          reset()
        })
        .catch((error) => {
          setMessage(error)
          setIsFired(false)
        })
    }
  };

  let mess =
    'Thanks for connecting.Our team member will connect with you shortly';
  useEffect(() => {
    if (message) {
      renderSnackBar(mess);
    }
  }, [message]);

  const renderSnackBar = (mess) => (
    <SnackBarComponent isOpen={true} isError={false} message={mess} />
  );

  return (
    <section className="signin-form-section">
      {renderSnackBar('')}
      {message && renderSnackBar(mess)}
      <div className="form-container">
        <div className="nwo-logo">
          <img src={badgeLogo} alt={`Badge Logo`} height="90" />
        </div>
        <h1>Need any Help ?</h1>
        <form autoComplete="off">
          {formFields &&
            formFields.length &&
            // eslint-disable-next-line array-callback-return
            formFields.map((field: FieldProps, e): JSX.Element => {
              if (
                field.type === 'text' ||
                field.type === 'email' ||
                field.type === 'textbox'
              ) {
                return (
                  <div>
                    <TextBox
                      key={field.name}
                      register={register}
                      name={field.name}
                      placeholder={field.placeholder}
                      label_name={field.label}
                      maxlength={field.maxlength}
                      required={field.required}
                      pattern={field.pattern}
                      type={field.type}
                    />
                    <p className="error-txt">{errors[field.name]?.message}</p>
                  </div>
                );
              }
            })}
          <div className="button-container">
            <button
            disabled={isFired}
              type="button"
              className={`btn-basic`}
              onClick={handleSubmit(onSubmit)}
            >
              {isFired ? <SpinnerRoundOutlined size={30} color="#ffffff" /> : 'Submit'}
            </button>
            <br />
          </div>
        </form>
        <div className="logo-container">
          <a
            href="https://quolii.com/"
            className="quolii-logo"
            target="_blank"
            rel="noreferrer"
          >
            <img src={quolliLogo} alt={`Quolli Logo`} height="40" />
          </a>
          <a
            href="https://theclimatepush.com"
            target="_blank"
            rel="noreferrer"
            className="cp-logo"
          >
            <img src={coloredLogo} alt={`Colored Logo`} height="50" />
          </a>
          <a
            href="https://worldismyplayground.org"
            target="_blank"
            rel="noreferrer"
            className="wimp-logo"
          >
            <img src={wimpLogo} alt={`WIMP Logo`} height="40" />
          </a>
        </div>
      </div>{' '}
    </section>
  );
};
export default Help;
