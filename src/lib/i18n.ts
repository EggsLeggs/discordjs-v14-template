// init I18next
// t function that takes a language and a key and returns a string
import { createInstance, i18n } from "i18next";
import { getOptions } from "../i18n/settings";

export class i18nInstance {
  private i18nInstance: i18n;

  constructor() {
    this.i18nInstance = this.initI18next();
  }

  private initI18next = () => {
    const i18nInstance = createInstance();
    i18nInstance.init(getOptions());

    return i18nInstance;
  };

  public t = (language: string, key: string): string => {
    return this.i18nInstance.t(key, { lng: language });
  };
}
