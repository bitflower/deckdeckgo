/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@ionic/core';
import 'ionicons';
import 'deckdeckgo';
import 'deckdeckgo-inline-editor';
import {
  EventEmitter,
} from '@stencil/core';


export namespace Components {

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface AppAvatar {
    'src': string;
  }
  interface AppAvatarAttributes extends StencilHTMLAttributes {
    'src'?: string;
  }

  interface AppLogo {}
  interface AppLogoAttributes extends StencilHTMLAttributes {}

  interface AppNavigation {
    'logo': boolean;
    'menuToggle': boolean;
    'presentation': boolean;
    'publish': boolean;
    'user': boolean;
  }
  interface AppNavigationAttributes extends StencilHTMLAttributes {
    'logo'?: boolean;
    'menuToggle'?: boolean;
    'presentation'?: boolean;
    'publish'?: boolean;
    'user'?: boolean;
  }

  interface AppAddSlideAction {}
  interface AppAddSlideActionAttributes extends StencilHTMLAttributes {
    'onActionOpenSlideAdd'?: (event: CustomEvent<UIEvent>) => void;
  }

  interface AppEditorToolbar {
    'blurSelectedElement': () => Promise<void>;
    'hideToolbar': () => Promise<void>;
    'touch': (element: HTMLElement) => Promise<void>;
    'unSelect': () => Promise<void>;
  }
  interface AppEditorToolbarAttributes extends StencilHTMLAttributes {
    'onBlockSlide'?: (event: CustomEvent<boolean>) => void;
    'onSlideDelete'?: (event: CustomEvent<HTMLElement>) => void;
    'onSlideDidChange'?: (event: CustomEvent<HTMLElement>) => void;
  }

  interface AppFeed {}
  interface AppFeedAttributes extends StencilHTMLAttributes {}

  interface AppFooter {}
  interface AppFooterAttributes extends StencilHTMLAttributes {}

  interface AppPopular {}
  interface AppPopularAttributes extends StencilHTMLAttributes {}

  interface AppSlideNavigate {
    'slides': string[];
  }
  interface AppSlideNavigateAttributes extends StencilHTMLAttributes {
    'slides'?: string[];
  }

  interface AppAbout {}
  interface AppAboutAttributes extends StencilHTMLAttributes {}

  interface AppContact {}
  interface AppContactAttributes extends StencilHTMLAttributes {}

  interface AppOpensource {}
  interface AppOpensourceAttributes extends StencilHTMLAttributes {}

  interface AppPrivacy {}
  interface AppPrivacyAttributes extends StencilHTMLAttributes {}

  interface AppTerms {}
  interface AppTermsAttributes extends StencilHTMLAttributes {}

  interface AppEditor {}
  interface AppEditorAttributes extends StencilHTMLAttributes {}

  interface AppHome {}
  interface AppHomeAttributes extends StencilHTMLAttributes {}

  interface AppSlideType {}
  interface AppSlideTypeAttributes extends StencilHTMLAttributes {}

  interface AppSlotType {
    'selectedElement': HTMLElement;
  }
  interface AppSlotTypeAttributes extends StencilHTMLAttributes {
    'selectedElement'?: HTMLElement;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AppRoot': Components.AppRoot;
    'AppAvatar': Components.AppAvatar;
    'AppLogo': Components.AppLogo;
    'AppNavigation': Components.AppNavigation;
    'AppAddSlideAction': Components.AppAddSlideAction;
    'AppEditorToolbar': Components.AppEditorToolbar;
    'AppFeed': Components.AppFeed;
    'AppFooter': Components.AppFooter;
    'AppPopular': Components.AppPopular;
    'AppSlideNavigate': Components.AppSlideNavigate;
    'AppAbout': Components.AppAbout;
    'AppContact': Components.AppContact;
    'AppOpensource': Components.AppOpensource;
    'AppPrivacy': Components.AppPrivacy;
    'AppTerms': Components.AppTerms;
    'AppEditor': Components.AppEditor;
    'AppHome': Components.AppHome;
    'AppSlideType': Components.AppSlideType;
    'AppSlotType': Components.AppSlotType;
  }

  interface StencilIntrinsicElements {
    'app-root': Components.AppRootAttributes;
    'app-avatar': Components.AppAvatarAttributes;
    'app-logo': Components.AppLogoAttributes;
    'app-navigation': Components.AppNavigationAttributes;
    'app-add-slide-action': Components.AppAddSlideActionAttributes;
    'app-editor-toolbar': Components.AppEditorToolbarAttributes;
    'app-feed': Components.AppFeedAttributes;
    'app-footer': Components.AppFooterAttributes;
    'app-popular': Components.AppPopularAttributes;
    'app-slide-navigate': Components.AppSlideNavigateAttributes;
    'app-about': Components.AppAboutAttributes;
    'app-contact': Components.AppContactAttributes;
    'app-opensource': Components.AppOpensourceAttributes;
    'app-privacy': Components.AppPrivacyAttributes;
    'app-terms': Components.AppTermsAttributes;
    'app-editor': Components.AppEditorAttributes;
    'app-home': Components.AppHomeAttributes;
    'app-slide-type': Components.AppSlideTypeAttributes;
    'app-slot-type': Components.AppSlotTypeAttributes;
  }


  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLAppAvatarElement extends Components.AppAvatar, HTMLStencilElement {}
  var HTMLAppAvatarElement: {
    prototype: HTMLAppAvatarElement;
    new (): HTMLAppAvatarElement;
  };

  interface HTMLAppLogoElement extends Components.AppLogo, HTMLStencilElement {}
  var HTMLAppLogoElement: {
    prototype: HTMLAppLogoElement;
    new (): HTMLAppLogoElement;
  };

  interface HTMLAppNavigationElement extends Components.AppNavigation, HTMLStencilElement {}
  var HTMLAppNavigationElement: {
    prototype: HTMLAppNavigationElement;
    new (): HTMLAppNavigationElement;
  };

  interface HTMLAppAddSlideActionElement extends Components.AppAddSlideAction, HTMLStencilElement {}
  var HTMLAppAddSlideActionElement: {
    prototype: HTMLAppAddSlideActionElement;
    new (): HTMLAppAddSlideActionElement;
  };

  interface HTMLAppEditorToolbarElement extends Components.AppEditorToolbar, HTMLStencilElement {}
  var HTMLAppEditorToolbarElement: {
    prototype: HTMLAppEditorToolbarElement;
    new (): HTMLAppEditorToolbarElement;
  };

  interface HTMLAppFeedElement extends Components.AppFeed, HTMLStencilElement {}
  var HTMLAppFeedElement: {
    prototype: HTMLAppFeedElement;
    new (): HTMLAppFeedElement;
  };

  interface HTMLAppFooterElement extends Components.AppFooter, HTMLStencilElement {}
  var HTMLAppFooterElement: {
    prototype: HTMLAppFooterElement;
    new (): HTMLAppFooterElement;
  };

  interface HTMLAppPopularElement extends Components.AppPopular, HTMLStencilElement {}
  var HTMLAppPopularElement: {
    prototype: HTMLAppPopularElement;
    new (): HTMLAppPopularElement;
  };

  interface HTMLAppSlideNavigateElement extends Components.AppSlideNavigate, HTMLStencilElement {}
  var HTMLAppSlideNavigateElement: {
    prototype: HTMLAppSlideNavigateElement;
    new (): HTMLAppSlideNavigateElement;
  };

  interface HTMLAppAboutElement extends Components.AppAbout, HTMLStencilElement {}
  var HTMLAppAboutElement: {
    prototype: HTMLAppAboutElement;
    new (): HTMLAppAboutElement;
  };

  interface HTMLAppContactElement extends Components.AppContact, HTMLStencilElement {}
  var HTMLAppContactElement: {
    prototype: HTMLAppContactElement;
    new (): HTMLAppContactElement;
  };

  interface HTMLAppOpensourceElement extends Components.AppOpensource, HTMLStencilElement {}
  var HTMLAppOpensourceElement: {
    prototype: HTMLAppOpensourceElement;
    new (): HTMLAppOpensourceElement;
  };

  interface HTMLAppPrivacyElement extends Components.AppPrivacy, HTMLStencilElement {}
  var HTMLAppPrivacyElement: {
    prototype: HTMLAppPrivacyElement;
    new (): HTMLAppPrivacyElement;
  };

  interface HTMLAppTermsElement extends Components.AppTerms, HTMLStencilElement {}
  var HTMLAppTermsElement: {
    prototype: HTMLAppTermsElement;
    new (): HTMLAppTermsElement;
  };

  interface HTMLAppEditorElement extends Components.AppEditor, HTMLStencilElement {}
  var HTMLAppEditorElement: {
    prototype: HTMLAppEditorElement;
    new (): HTMLAppEditorElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppSlideTypeElement extends Components.AppSlideType, HTMLStencilElement {}
  var HTMLAppSlideTypeElement: {
    prototype: HTMLAppSlideTypeElement;
    new (): HTMLAppSlideTypeElement;
  };

  interface HTMLAppSlotTypeElement extends Components.AppSlotType, HTMLStencilElement {}
  var HTMLAppSlotTypeElement: {
    prototype: HTMLAppSlotTypeElement;
    new (): HTMLAppSlotTypeElement;
  };

  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement
    'app-avatar': HTMLAppAvatarElement
    'app-logo': HTMLAppLogoElement
    'app-navigation': HTMLAppNavigationElement
    'app-add-slide-action': HTMLAppAddSlideActionElement
    'app-editor-toolbar': HTMLAppEditorToolbarElement
    'app-feed': HTMLAppFeedElement
    'app-footer': HTMLAppFooterElement
    'app-popular': HTMLAppPopularElement
    'app-slide-navigate': HTMLAppSlideNavigateElement
    'app-about': HTMLAppAboutElement
    'app-contact': HTMLAppContactElement
    'app-opensource': HTMLAppOpensourceElement
    'app-privacy': HTMLAppPrivacyElement
    'app-terms': HTMLAppTermsElement
    'app-editor': HTMLAppEditorElement
    'app-home': HTMLAppHomeElement
    'app-slide-type': HTMLAppSlideTypeElement
    'app-slot-type': HTMLAppSlotTypeElement
  }

  interface ElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'app-avatar': HTMLAppAvatarElement;
    'app-logo': HTMLAppLogoElement;
    'app-navigation': HTMLAppNavigationElement;
    'app-add-slide-action': HTMLAppAddSlideActionElement;
    'app-editor-toolbar': HTMLAppEditorToolbarElement;
    'app-feed': HTMLAppFeedElement;
    'app-footer': HTMLAppFooterElement;
    'app-popular': HTMLAppPopularElement;
    'app-slide-navigate': HTMLAppSlideNavigateElement;
    'app-about': HTMLAppAboutElement;
    'app-contact': HTMLAppContactElement;
    'app-opensource': HTMLAppOpensourceElement;
    'app-privacy': HTMLAppPrivacyElement;
    'app-terms': HTMLAppTermsElement;
    'app-editor': HTMLAppEditorElement;
    'app-home': HTMLAppHomeElement;
    'app-slide-type': HTMLAppSlideTypeElement;
    'app-slot-type': HTMLAppSlotTypeElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
