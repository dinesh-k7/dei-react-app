import image from '../../../assets/images/seo-marketing.svg';
import icon from '../../../assets/images/section-service-icon.svg';
import { VIMEO_VIDEOIDS } from '../../../constants/vimeo-videoids';

export const seoSection = {
  title: 'Marketing',
  colorCode: '#fdcf00',
  useColor: true,
  buttonText: 'Get a Quote',
  features: [],
  description:
    'Our marketing channels connect clients to products and services. Positive client experience equals loyalty. DEI® offers a distinctive marketing strategy to help your business.',
  image,
  icon,
  imageAlign: 'left',
  services: [
    {
      id: 'seo-one',
      target: '_blank',
      title: 'Email Marketing',
      link: 'https://www.deiportal.com/products/email-marketing',
      description:
        'Email Marketing helps you connect with customers. In minutes, professional web campaigns provide on-brand communications to smartphones, tablets, and desktops.',
    },
    {
      id: 'seo-two',
      target: '_blank',
      title: 'SEO Optimization',
      link: 'https://≈www.deiportal.com/products/seo',
      description: 'These DEI® Site Sentinels examine your website and give you step-by-step guidelines for Google®, Yahoo®, and Bing®. Optimize your business with a few clicks.',
    },
    {
      id: 'seo-three',
      title: 'Ambassadors Club',
      target: '_blank',
      link: 'https://novusordoseclorum.org/ambassadors-unite',
      description:
        'Our brand ambassadors promote your company`s authorized content on social media. They get credit for their audience`s business contribution. Apply now!',
    },
     {
      id: 'seo-four',
      title: 'Marketing Suite',
      target: '_blank',
      link: 'https://novusordoseclorum.org/marketing-consultation-with-mr-nwo/',
      description:
        'Book your consult now! Our 7-step marketing suite provides a thorough and ethical marketing plan. Subscribe or buy a marketing bundle today.',
    },
  ],
  isShowMore: false,
  isHideButton: true,
  isShowVideo: true,
  vimeoVideoId:VIMEO_VIDEOIDS.SITE_SENTINELS_VIDEO_ID
};
