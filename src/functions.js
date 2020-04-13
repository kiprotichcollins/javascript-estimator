/* eslint-disable eol-last */
/* eslint-disable indent */
// eslint-disable-next-line import/prefer-default-export
export function currentlyInfected(reportedCases) {
    return reportedCases * 10;
}
export function serverlyinfected(reportedCases) {
    return reportedCases * 50;
}
export function infectionsByRequestedTime(currentlyInfectedData) {
    return currentlyInfectedData * 1024;
}