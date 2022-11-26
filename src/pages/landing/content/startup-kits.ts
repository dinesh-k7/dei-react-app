import image from '../../../assets/images/startup-kit.svg';
import { VIMEO_VIDEOIDS } from '../../../constants/vimeo-videoids';

export const startupKitsSection = {
  title: 'Start-up Kits',
  colorCode: '#EC407A',
  buttonText: 'Get a Quote',
  buttonLink: '/startup-kit',
  features: [
    {
      id: 'startup-one',
      title: 'DEI® DAO Bundle™ #1',
    },
    {
      id: 'startup-two',
      title: 'DEI® DAO Bundle™ #2',
    },
    {
      id: 'startup-three',
      title: 'DEI® DAO Bundle™ #3',
    },
    {
      id: 'startup-four',
      title: 'DEI® DAO Bundle™ #4',
    },
    {
      id: 'startup-five',
      title: 'DEI®️ Certification - Business',
    },
    {
      id: 'startup-six',
      title: 'DEI®️ Certification - Freelancer',
    },
  ],
  description: 'Need Help? We can help. DEI® Start-Up Kits enable you to keep business running while upgrading your business` logistics platform.',
  image,
  imageAlign: 'right',
  services: [],
  isShowMore: false,
  buttonColor: '#fff',
  isShowVideo:true,
  vimeoVideoId:VIMEO_VIDEOIDS.STARTUP_KIT_VIDEO_ID

};
