/* eslint-disable eol-last */
/* eslint-disable indent */
import * as newData from './functions';

const impact = {};
const servereImpact = {};
const covid19ImpactEstimator = (data) => {
    const input = data;
    // impact.currentlyInfected = newData.currentlyInfected(data.reportedCases);
    // servereImpact.currentlyInfected = newData.serverlyinfected(data.reportedCases);
    // eslint-disable-next-line max-len
    // impact.infectionsByRequestedTime = newData.infectionsByRequestedTime(impact.currentlyInfected);
    // servereImpact.infectionsByRequestedTime = newData.infectionsByRequestedTime(
    //     servereImpact.currentlyInfected
    // );

    return {
        data: input,
        impact: {
            currentlyInfected: newData.currentlyInfected(data.reportedCases),
            infectionsByRequestedTime: newData.infectionsByRequestedTime(impact.currentlyInfected)
        },
        servereImpact: {
            currentlyInfected: newData.serverlyinfected(data.reportedCases),
            infectionsByRequestedTime: newData.infectionsByRequestedTime(
                servereImpact.currentlyInfected
            )
        }
    };
};

export default covid19ImpactEstimator;