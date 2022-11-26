import React, { Fragment, ReactElement, useState } from 'react';

import './video.component.scss';
import AlertDialogComponent from '../dialog/alert-dialog.component';
import VideoLibraryTwoTone from '@mui/icons-material/VideoLibraryTwoTone';

interface IProps {
  videoId: number;
}

const VideoComponent: React.FC<IProps> = (props: IProps): ReactElement => {
  const { videoId } = props;
  const [openVideo, setOpenVideo] = useState(false);
  const handleClick = () => {
    setOpenVideo(true);
  };

  const handleClose = () => {
    setOpenVideo(false);
  };
  return (
    <Fragment>
      <VideoLibraryTwoTone
        style={{
          color: '#453396',
          cursor: 'pointer',
          fontSize: '42px',
          marginLeft: '16px',
        }}
        onClick={() => handleClick()}
      />

      {/* * Video component */}
      {openVideo ? (
        <AlertDialogComponent
          fromPage={`landing`}
          title={``}
          description={``}
          isShow={openVideo}
          handleClose={handleClose}
          videoId={videoId}
        />
      ) : (
        ''
      )}
    </Fragment>
  );
};

export default VideoComponent;
