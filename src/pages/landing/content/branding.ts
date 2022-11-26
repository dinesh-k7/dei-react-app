import image from '../../../assets/images/branding.svg';
import { VIMEO_VIDEOIDS } from '../../../constants/vimeo-videoids';

export const brandingSection = {
  title: 'Branding',
  colorCode: '#FF7D7D',
  buttonText: 'Logo Designer',
  buttonLink: '/branding',
  features: [
    {
      id: 'branding-01',
      title: 'Graphic design',
    },
    {
      id: 'branding-02',
      title: 'Logo design',
    },
  ],
  description: "Create a stunning logo for your brand!",
  descriptiontwo: `You're our business. We'll help you establish brand loyalty and trust. No cloning - your logo will be unique! The New World Order, DEI®, and Climate-Push have featured our work..`,
  image,
  imageAlign: 'right',
  isShowVideo: true,
  vimeoVideoID:VIMEO_VIDEOIDS.BRANDING_VIDEO_ID
};
