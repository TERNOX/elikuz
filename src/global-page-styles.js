import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {},
    "index": {},
    "videointi": {},
    "videointi/musiikkivideon-tekeminen": {},
    "videointi/lyhyt-mainos": {},
    "videointi/pitka-mainos": {},
    "videointi/tapahtuman-videointi": {},
    "valokuvaus": {},
    "valokuvaus/tuotekuvaus": {},
    "valokuvaus/yhden-henkilon-kuvaus": {},
    "valokuvaus/yhden-henkilon-kuvaus/muotokuvaus-studiossa": {},
    "valokuvaus/yhden-henkilon-kuvaus/lavastettu-kuvaus-studiossa": {},
    "valokuvaus/yhden-henkilon-kuvaus/henkilokuvaus-miljoossa": {},
    "valokuvaus/monen-henkilon-kuvaus": {},
    "valokuvaus/monen-henkilon-kuvaus/pari-ja-perhekuvaus-studiossa": {},
    "valokuvaus/monen-henkilon-kuvaus/lavastettu-pari-ja-perhekuvaus-studiossa": {},
    "valokuvaus/monen-henkilon-kuvaus/pari-ja-perhekuvaus-miljoossa": {},
    "valokuvaus/promokuvaus": {},
    "valokuvaus/promokuvaus/promokuvaus-studiossa": {},
    "valokuvaus/promokuvaus/promokuvaus-miljoossa": {},
    "valokuvaus/tapahtuman-valokuvaus": {},
    "valokuvaus/kuvankasittely": {}
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
