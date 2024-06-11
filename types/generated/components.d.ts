import type { Schema, Attribute } from '@strapi/strapi';

export interface HomeCoverHomePageCover extends Schema.Component {
  collectionName: 'components_home_cover_home_page_covers';
  info: {
    displayName: 'Home Page Cover';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    position: Attribute.Enumeration<['top', 'bottom', 'right', 'left']> &
      Attribute.DefaultTo<'left'>;
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
      'home-cover.home-page-cover': HomeCoverHomePageCover;
      'menu.menu-button': MenuMenuButton;
      'menu.menu-link': MenuMenuLink;
    }
  }
}
