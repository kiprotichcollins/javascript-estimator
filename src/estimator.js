/* eslint-disable eol-last */
/* eslint-disable indent */
import * as newData from './functions';

const impact = {};
const servereImpact = {};
const covid19ImpactEstimator = (data) => {
    const input = data;
    impact.currentlyInfected = newData.currentlyInfected(data.reportedCases);
    servereImpact.currentlyInfected = newData.serverlyinfected(data.reportedCases);
    // eslint-disable-next-line max-len
    impact.infectionsByRequestedTime = newData.infectionsByRequestedTime(newData.currentlyInfected(data.reportedCases), data.timeToElapse);
    servereImpact.infectionsByRequestedTime = newData.infectionsByRequestedTime(
        newData.serverlyinfected(data.reportedCases), data.timeToElapse
    );

    return {
        data: input,
        impact: {
            currentlyInfected: impact.currentlyInfected,
            infectionsByRequestedTime: impact.infectionsByRequestedTime
        },
        servereImpact: {
            currentlyInfected: newData.servereImpact.currentlyInfected,
            infectionsByRequestedTime: servereImpact.infectionsByRequestedTime
        }
    };
};

export default covid19ImpactEstimator;