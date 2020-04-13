/* eslint-disable eol-last */
/* eslint-disable indent */
// eslint-disable-next-line import/prefer-default-export
export function currentlyInfected(reportedCases) {
    return reportedCases * 10;
}
export function serverlyinfected(reportedCases) {
    return reportedCases * 50;
}
export function infectionsByRequestedTime(currentlyInfectedData, timeElapsed) {
    // get the number of days from today;
    // let today = new Date().toISOString().slice(0, 10);
    // get days
    const days = timeElapsed / 3;
    return currentlyInfectedData * (2 ** days);
}