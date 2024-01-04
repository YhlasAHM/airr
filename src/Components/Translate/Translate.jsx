import React from 'react'

import { useTranslation } from "react-i18next";

export const Translate = (props) => {

    const { t } = useTranslation()

    return (
        <>
            {t(`${props.title}`)}
        </>
    )
}
