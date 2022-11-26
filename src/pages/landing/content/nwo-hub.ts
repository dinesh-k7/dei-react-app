import image from '../../../assets/images/nwo-hub.svg';
import icon from '../../../assets/images/section-service-icon.svg';
import { VIMEO_VIDEOIDS } from '../../../constants/vimeo-videoids';

export const nwoHubSection = {
  title: `DEI Portal™`,
  colorCode: '#49e69a',
  buttonText: 'Get a Quote',
  useColor: true,
  features: [],
  description: 'All the help and resources you need to build your digital enterprise: Domains, Emails, and Hosting all in one place! Plus you get live *customer service to guide you every step of the way.',
  descriptiontwo:
    'Customer service for DEIportal.com is strictly for products and services on DEIportal.com',
  image,
  icon,
  imageAlign: 'right',
  services: [
    {
      id: 'nwo-hub-one',
      target: '_blank',
      title: 'Buy a Domain',
      link: 'https://www.deiportal.com/',
      description:
        'Your Brand Starts with a Domain. Register yours and develop your digital enterprise by buying a domain - the first step to building a website, making an online business card, or launching your online presence.',
    },
    {
      id: 'nwo-hub-two',
      target: '_blank',
      title: 'Get a Business Email',
      link: 'https://www.deiportal.com/products/professional-email',
      description: 'Business email gives you a domain-based email address, promoting a professional image. You can trust us to maintain your business email. Protect data with DEI® Data Sentinels.',
    },
    {
      id: 'nwo-hub-three',
      target: '_blank',
      title: 'Create a Website',
      link: 'https://www.deiportal.com/products/website-builder',
      description:
        'We offer clients a website experience that fosters engagement and conversion. DEI® professionals help you create a site that improves information organization and usability for every visitor.',
    },
    {
      id: 'nwo-hub-four',
      target: '_blank',
      title: 'Host a Website',
      link: 'https://www.deiportal.com/products/dedicated-server',
      description:
        'Websites require homes. High-powered hosting ensures quality performance. Choose from several website possibilities. We provide the basics so you can host, build, and market your website in one place.',
    },
  ],

  isShowMore: false,
  isHideButton: true,
  isShowVideo: true,
  vimeoVideoId:VIMEO_VIDEOIDS.DEI_PORTAL_VIDEO_ID


};
