import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {
        "color": ""
    },
    "index": {
        "color": ""
    },
    "videointi": {
        "color": ""
    },
    "videointi/musiikkivideon-tekeminen": {
        "color": ""
    },
    "videointi/lyhyt-mainos": {
        "color": ""
    },
    "videointi/pitka-mainos": {
        "color": ""
    },
    "videointi/tapahtuman-videointi": {
        "color": ""
    },
    "valokuvaus": {
        "color": ""
    },
    "valokuvaus/tuotekuvaus": {
        "color": ""
    },
    "valokuvaus/yhden-henkilon-kuvaus": {
        "color": ""
    },
    "valokuvaus/yhden-henkilon-kuvaus/muotokuvaus-studiossa": {
        "color": ""
    },
    "valokuvaus/yhden-henkilon-kuvaus/lavastettu-kuvaus-studiossa": {
        "color": ""
    },
    "valokuvaus/yhden-henkilon-kuvaus/henkilokuvaus-miljoossa": {
        "color": ""
    },
    "valokuvaus/monen-henkilon-kuvaus": {
        "color": ""
    },
    "valokuvaus/monen-henkilon-kuvaus/pari-ja-perhekuvaus-studiossa": {
        "color": ""
    },
    "valokuvaus/monen-henkilon-kuvaus/lavastettu-pari-ja-perhekuvaus-studiossa": {
        "color": ""
    },
    "valokuvaus/monen-henkilon-kuvaus/pari-ja-perhekuvaus-miljoossa": {
        "color": ""
    },
    "valokuvaus/promokuvaus": {
        "color": ""
    },
    "valokuvaus/promokuvaus/promokuvaus-studiossa": {
        "color": ""
    },
    "valokuvaus/promokuvaus/promokuvaus-miljoossa": {
        "color": ""
    },
    "valokuvaus/tapahtuman-valokuvaus": {
        "color": ""
    },
    "valokuvaus/kuvankasittely": {
        "color": ""
    }
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
