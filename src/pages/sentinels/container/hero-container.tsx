import React, { ReactElement, useState } from 'react';

import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import '../../../assets/scss/styles.scss';
import './hero-container.scss';
import { VIMEO_VIDEOIDS } from '../../../constants/vimeo-videoids';

import SentinelsClubVector from '../../../assets/images/sentinels-club-vector.svg';
import AlertDialogComponent from '../../../components/common/dialog/alert-dialog.component';

interface State {
  password: string;
  showPassword: boolean;
}

const HeroContainer: React.FC<any> = (): ReactElement => {
  const [openVideo, setOpenVideo] = useState(false);
  const [values, setValues] = React.useState<State>({
    password: '',
    showPassword: false,
  });
  const handleClick = () => {
    setOpenVideo(true);
  };

  const { password } = values;

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClose = () => {
    setOpenVideo(false);
  };

  const handleVideo = () => {
    if (password) setOpenVideo(true);
  };

  return (
    <section
      className="hero-section sentinels-section"
      style={{ backgroundColor: '#00467f' }}
    >
      <div className="hero-content">
        <div className="hero-title">
          <h1>
            Sentinels Club™
            {openVideo ? (
              <AlertDialogComponent
                fromPage={`landing`}
                title={``}
                description={``}
                isShow={openVideo}
                handleClose={handleClose}
                videoId={VIMEO_VIDEOIDS.SENTINELS_CLUB_VIDEO_ID}
              />
            ) : null}
            {/* <VideoComponent
              videoId={VIMEO_VIDEOIDS.SIGN_IN_CONNECT_VIDEO_ID}
            /> */}
          </h1>
        </div>
        <div className="hero-image-container">
          <img src={SentinelsClubVector} alt="General Compliance" />
        </div>

        <div className="hero-description">
          <p>
            Help build the network of the future by joining the sentinels club™.
            Together, we pledge to nondiscriminatory hiring and pay practices.
            DEI® Sentry Stack, Compliance Central, Secure backup, VSA - Managed
            Services, and DAO registration make the world`s most secure network.
            <br />
            <br />
          </p>
        </div>

        <div className="checkPass-container">
          <FormControl>
            <InputLabel>Enter your Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label=""
            />
          </FormControl>
          <button className="btn" onClick={() => handleVideo()}>
            Proceed
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroContainer;
