export const SAVE_USER_DETAILS = 'SAVE_USER_DETAILS';
export const CHANGE_PROGRESS_BAR_PROGRESS = 'CHANGE_PROGRESS_BAR_PROGRESS';

export function saveUserdetails(details) {
    return {
        type: SAVE_USER_DETAILS,
        payload: details
    }
}

export function changeProgressBarProgress(progress) {
    return {
        type: CHANGE_PROGRESS_BAR_PROGRESS,
        payload: progress
    }
}