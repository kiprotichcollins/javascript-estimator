/* eslint-disable eol-last */
/* eslint-disable indent */
import * as newData from './functions';

const impact = {};
const servereImpact = {};
const output = [];
const covid19ImpactEstimator = (data) => {
    impact.currentlyInfected = newData.currentlyInfected(data.reportedCases);
    servereImpact.currentlyInfected = newData.serverlyinfected(data.reportedCases);
    impact.infectionsByRequestedTime = newData.infectionsByRequestedTime(impact.currentlyInfected);
    servereImpact.infectionsByRequestedTime = newData.infectionsByRequestedTime(
        servereImpact.currentlyInfected
    );

    return output.push({ data, impact, output });
};

export default covid19ImpactEstimator;