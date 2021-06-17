import {i18n} from "i18next";
import {useTranslation, TFunction} from "react-i18next";

interface useLocalizationType {
    trans: TFunction,
    i18n: i18n,
    ready: boolean
}


export default function useLocalization(): useLocalizationType {
    const {t, i18n, ready} = useTranslation();

    const trans = t;

    return {
        trans,
        i18n,
        ready
    }

}