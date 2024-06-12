import type { Schema, Attribute } from '@strapi/strapi';

export interface HomeComponentsCardInformation extends Schema.Component {
  collectionName: 'components_home_components_card_informations';
  info: {
    displayName: 'cardInformation';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface HomeComponentsChooseUsSection extends Schema.Component {
  collectionName: 'components_home_components_choose_us_sections';
  info: {
    displayName: 'chooseUsSection';
  };
  attributes: {
    title: Attribute.String;
    Heading: Attribute.String;
    individualisim: Attribute.Component<'home-components.individualisim'>;
    experienced: Attribute.Component<'home-components.individualisim'>;
    professionalism: Attribute.Component<'home-components.individualisim'>;
    qualified: Attribute.Component<'home-components.individualisim'>;
  };
}

export interface HomeComponentsContectCard extends Schema.Component {
  collectionName: 'components_home_components_contect_cards';
  info: {
    displayName: 'contectCard';
  };
  attributes: {
    logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    phone: Attribute.BigInteger;
    email: Attribute.Email;
    openDays: Attribute.String;
    time: Attribute.String;
    holidays: Attribute.String;
    contectUs: Attribute.Component<'home-components.readmore-btn'>;
  };
}

export interface HomeComponentsContectSection extends Schema.Component {
  collectionName: 'components_home_components_contect_sections';
  info: {
    displayName: 'contectSection';
  };
  attributes: {
    background: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Contacts: Attribute.Component<'home-components.contect-card'>;
  };
}

export interface HomeComponentsEventInfo extends Schema.Component {
  collectionName: 'components_home_components_event_infos';
  info: {
    displayName: 'eventInfo';
  };
  attributes: {
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Attribute.String;
  };
}

export interface HomeComponentsEventSectin extends Schema.Component {
  collectionName: 'components_home_components_event_sectins';
  info: {
    displayName: 'eventSectin';
  };
  attributes: {
    title: Attribute.String;
    Heading: Attribute.String;
    headingDesc: Attribute.Text;
    featImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeComponentsEventSolutionInfo extends Schema.Component {
  collectionName: 'components_home_components_event_solution_infos';
  info: {
    displayName: 'EventSolutionInfo';
    description: '';
  };
  attributes: {
    profesionalTeam: Attribute.Component<'home-components.event-info'>;
    qualityService: Attribute.Component<'home-components.event-info', true>;
    eventReadmoreButton: Attribute.Component<'home-components.readmore-btn'>;
  };
}

export interface HomeComponentsEventSolutionSection extends Schema.Component {
  collectionName: 'components_home_components_event_solution_sections';
  info: {
    displayName: 'EventSolutionSection';
  };
  attributes: {
    EventSection: Attribute.Component<'home-components.event-sectin'>;
  };
}

export interface HomeComponentsFaqSection extends Schema.Component {
  collectionName: 'components_home_components_faq_sections';
  info: {
    displayName: 'faqSection';
  };
  attributes: {
    title: Attribute.String;
    Heading: Attribute.String;
    faqs: Attribute.Component<'home-components.faqs', true>;
  };
}

export interface HomeComponentsFaqs extends Schema.Component {
  collectionName: 'components_home_components_faqs';
  info: {
    displayName: 'faqs';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.Text;
  };
}

export interface HomeComponentsHomeSlider extends Schema.Component {
  collectionName: 'components_home_components_home_sliders';
  info: {
    displayName: 'homeSlider';
  };
  attributes: {
    Slider: Attribute.Component<'home-components.slide-componetnts', true>;
  };
}

export interface HomeComponentsIndividualisim extends Schema.Component {
  collectionName: 'components_home_components_individualisims';
  info: {
    displayName: 'individualisim';
  };
  attributes: {
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    descrition: Attribute.Text;
  };
}

export interface HomeComponentsJoinNewsLetterSection extends Schema.Component {
  collectionName: 'components_home_components_join_news_letter_sections';
  info: {
    displayName: 'joinNewsLetterSection';
  };
  attributes: {
    JoinNewsLetter: Attribute.Component<'home-components.join-us'>;
  };
}

export interface HomeComponentsJoinUs extends Schema.Component {
  collectionName: 'components_home_components_joinuses';
  info: {
    displayName: 'joinUs';
  };
  attributes: {
    logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    email: Attribute.Email;
    JoinUsBttn: Attribute.Component<'home-components.readmore-btn'>;
  };
}

export interface HomeComponentsOurServiceSection extends Schema.Component {
  collectionName: 'components_home_components_our_service_sections';
  info: {
    displayName: 'ourServiceSection';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    heading: Attribute.String;
    wedding: Attribute.Component<'home-components.card-information'>;
    brand: Attribute.Component<'home-components.card-information'>;
    soscial: Attribute.Component<'home-components.card-information'>;
  };
}

export interface HomeComponentsOurTeam extends Schema.Component {
  collectionName: 'components_home_components_our_teams';
  info: {
    displayName: 'ourTeam';
  };
  attributes: {
    teamMember: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    memberName: Attribute.String;
    memberPosition: Attribute.String;
    email: Attribute.Component<'home-components.social-button'>;
    share: Attribute.Component<'home-components.social-button'>;
  };
}

export interface HomeComponentsPartnerSection extends Schema.Component {
  collectionName: 'components_home_components_partner_sections';
  info: {
    displayName: 'partnerSection';
  };
  attributes: {
    title: Attribute.String;
    Heading: Attribute.String;
    Logos: Attribute.Component<'home-components.partners', true>;
  };
}

export interface HomeComponentsPartners extends Schema.Component {
  collectionName: 'components_home_components_partners';
  info: {
    displayName: 'partners';
  };
  attributes: {
    logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeComponentsProjectSection extends Schema.Component {
  collectionName: 'components_home_components_project_sections';
  info: {
    displayName: 'projectSection';
  };
  attributes: {
    projects: Attribute.Component<'home-components.project'>;
    awards: Attribute.Component<'home-components.project'>;
    happyClients: Attribute.Component<'home-components.project'>;
  };
}

export interface HomeComponentsProject extends Schema.Component {
  collectionName: 'components_home_components_projects';
  info: {
    displayName: 'project';
  };
  attributes: {
    audio: Attribute.Media<'audios'>;
    title: Attribute.String;
    background: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeComponentsReadmoreBtn extends Schema.Component {
  collectionName: 'components_home_components_readmore_btns';
  info: {
    displayName: 'readmoreBTN';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
  };
}

export interface HomeComponentsSlideComponetnts extends Schema.Component {
  collectionName: 'components_home_components_slide_componetnts';
  info: {
    displayName: 'slideComponetnts';
    description: '';
  };
  attributes: {
    bckImg: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    readMoreButton: Attribute.Component<'home-components.readmore-btn'>;
    title: Attribute.String;
  };
}

export interface HomeComponentsSocialButton extends Schema.Component {
  collectionName: 'components_home_components_social_buttons';
  info: {
    displayName: 'socialButton';
  };
  attributes: {
    title: Attribute.String;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    link: Attribute.String;
  };
}

export interface HomeComponentsStaircase extends Schema.Component {
  collectionName: 'components_home_components_staircases';
  info: {
    displayName: 'staircase';
  };
  attributes: {
    background: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    workReadmoreButton: Attribute.Component<'home-components.readmore-btn'>;
  };
}

export interface HomeComponentsTeamSection extends Schema.Component {
  collectionName: 'components_home_components_team_sections';
  info: {
    displayName: 'teamSection';
  };
  attributes: {
    title: Attribute.String;
    Heading: Attribute.String;
    team: Attribute.Component<'home-components.our-team', true>;
  };
}

export interface HomeComponentsTestimonial extends Schema.Component {
  collectionName: 'components_home_components_testimonials';
  info: {
    displayName: 'testimonial';
  };
  attributes: {
    img: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Attribute.String;
    position: Attribute.String;
    description: Attribute.Text;
    logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeComponentsTestimonySection extends Schema.Component {
  collectionName: 'components_home_components_testimony_sections';
  info: {
    displayName: 'testimonySection';
  };
  attributes: {
    title: Attribute.String;
    Heading: Attribute.String;
    background: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Testimonials: Attribute.Component<'home-components.testimonial', true>;
  };
}

export interface HomeComponentsWorkSection extends Schema.Component {
  collectionName: 'components_home_components_work_sections';
  info: {
    displayName: 'workSection';
  };
  attributes: {
    title: Attribute.String;
    Heading: Attribute.String;
    staircase: Attribute.Component<'home-components.staircase'>;
  };
}

export interface MenuMenuButton extends Schema.Component {
  collectionName: 'components_menu_menu_buttons';
  info: {
    displayName: 'menuButton';
    icon: 'cursor';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface MenuMenuLink extends Schema.Component {
  collectionName: 'components_menu_menu_links';
  info: {
    displayName: 'MenuLink';
    icon: 'link';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'home-components.card-information': HomeComponentsCardInformation;
      'home-components.choose-us-section': HomeComponentsChooseUsSection;
      'home-components.contect-card': HomeComponentsContectCard;
      'home-components.contect-section': HomeComponentsContectSection;
      'home-components.event-info': HomeComponentsEventInfo;
      'home-components.event-sectin': HomeComponentsEventSectin;
      'home-components.event-solution-info': HomeComponentsEventSolutionInfo;
      'home-components.event-solution-section': HomeComponentsEventSolutionSection;
      'home-components.faq-section': HomeComponentsFaqSection;
      'home-components.faqs': HomeComponentsFaqs;
      'home-components.home-slider': HomeComponentsHomeSlider;
      'home-components.individualisim': HomeComponentsIndividualisim;
      'home-components.join-news-letter-section': HomeComponentsJoinNewsLetterSection;
      'home-components.join-us': HomeComponentsJoinUs;
      'home-components.our-service-section': HomeComponentsOurServiceSection;
      'home-components.our-team': HomeComponentsOurTeam;
      'home-components.partner-section': HomeComponentsPartnerSection;
      'home-components.partners': HomeComponentsPartners;
      'home-components.project-section': HomeComponentsProjectSection;
      'home-components.project': HomeComponentsProject;
      'home-components.readmore-btn': HomeComponentsReadmoreBtn;
      'home-components.slide-componetnts': HomeComponentsSlideComponetnts;
      'home-components.social-button': HomeComponentsSocialButton;
      'home-components.staircase': HomeComponentsStaircase;
      'home-components.team-section': HomeComponentsTeamSection;
      'home-components.testimonial': HomeComponentsTestimonial;
      'home-components.testimony-section': HomeComponentsTestimonySection;
      'home-components.work-section': HomeComponentsWorkSection;
      'menu.menu-button': MenuMenuButton;
      'menu.menu-link': MenuMenuLink;
    }
  }
}
